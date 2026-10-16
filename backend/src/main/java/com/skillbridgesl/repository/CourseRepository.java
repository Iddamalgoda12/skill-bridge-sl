package com.skillbridgesl.repository;

import com.skillbridgesl.model.Course;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface CourseRepository extends JpaRepository<Course, UUID>,
                                           JpaSpecificationExecutor<Course> {

    Optional<Course> findBySlug(String slug);

    Page<Course> findByStatus(Course.Status status, Pageable pageable);

    Page<Course> findByCategoryIdAndStatus(UUID categoryId, Course.Status status, Pageable pageable);

    Page<Course> findByInstructorId(UUID instructorId, Pageable pageable);

    @Query("""
           SELECT c FROM Course c
           WHERE c.status = 'PUBLISHED'
             AND (LOWER(c.title)       LIKE LOWER(CONCAT('%', :q, '%'))
               OR LOWER(c.description) LIKE LOWER(CONCAT('%', :q, '%')))
           """)
    Page<Course> search(String q, Pageable pageable);
}

