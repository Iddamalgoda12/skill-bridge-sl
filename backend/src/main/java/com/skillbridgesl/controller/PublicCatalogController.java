package com.skillbridgesl.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class PublicCatalogController {
    private final JdbcTemplate jdbc;
    private final ObjectMapper mapper;

    @GetMapping("/careers/public")
    public List<JsonNode> careers() { return list("career_catalog"); }

    @GetMapping("/careers/public/{slug}")
    public ResponseEntity<JsonNode> career(@PathVariable String slug) { return response(detail("career_catalog", slug)); }

    @GetMapping("/universities/public")
    public List<JsonNode> universities() { return list("university_catalog"); }

    @GetMapping("/universities/public/{slug}")
    public ResponseEntity<JsonNode> university(@PathVariable String slug) { return response(detail("university_catalog", slug)); }

    private ResponseEntity<JsonNode> response(JsonNode data) {
        return data == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(data);
    }

    private List<JsonNode> list(String table) {
        return jdbc.query("SELECT catalog_data - 'detail' AS data FROM " + table + " WHERE is_published = TRUE ORDER BY sort_order, slug",
            (rs, row) -> parse(rs.getString("data")));
    }

    private JsonNode detail(String table, String slug) {
        String profileTable = table.equals("career_catalog") ? "career_profiles" : "university_profiles";
        return jdbc.query("SELECT p.profile_data AS data FROM " + profileTable + " p JOIN " + table
                        + " c ON c.slug = p.slug WHERE p.slug = ? AND c.is_published = TRUE",
            rs -> rs.next() ? parse(rs.getString("data")) : null, slug);
    }

    private JsonNode parse(String json) {
        try { return mapper.readTree(json); }
        catch (Exception exception) { throw new IllegalStateException("Stored catalog JSON is invalid", exception); }
    }
}
