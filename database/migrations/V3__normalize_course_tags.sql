-- Move course tags from the original PostgreSQL array column into the
-- collection table used by the Course JPA entity.
CREATE TABLE course_tags (
    course_id UUID         NOT NULL REFERENCES courses (id) ON DELETE CASCADE,
    tag       VARCHAR(255) NOT NULL,
    PRIMARY KEY (course_id, tag)
);

INSERT INTO course_tags (course_id, tag)
SELECT courses.id, tags.tag
FROM courses
CROSS JOIN LATERAL unnest(courses.tags) AS tags(tag)
WHERE courses.tags IS NOT NULL
  AND tags.tag IS NOT NULL
ON CONFLICT (course_id, tag) DO NOTHING;

ALTER TABLE courses DROP COLUMN tags;
