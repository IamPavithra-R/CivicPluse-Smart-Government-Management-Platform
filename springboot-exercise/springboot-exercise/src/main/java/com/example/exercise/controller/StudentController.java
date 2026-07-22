package com.example.exercise.controller;

import com.example.exercise.model.Student;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Exercise 3: Return JSON response from a POJO
 * Concepts: Spring Boot auto-serializes returned Java objects into JSON
 * (no manual conversion needed - Jackson handles it automatically)
 *
 * Try:
 *   GET /student        -> single Student object as JSON
 *   GET /students        -> list of Student objects as JSON array
 *   GET /student/2        -> a specific student by id
 */
@RestController
public class StudentController {

    // Returning a single POJO - Spring converts it to a JSON object automatically
    @GetMapping("/student")
    public Student getStudent() {
        return new Student(1, "Ravi Kumar", "Computer Science", 88.5);
    }

    // Returning a List<POJO> - Spring converts it to a JSON array automatically
    @GetMapping("/students")
    public List<Student> getAllStudents() {
        List<Student> students = new ArrayList<>();
        students.add(new Student(1, "Ravi Kumar", "Computer Science", 88.5));
        students.add(new Student(2, "Anjali Sharma", "Information Technology", 92.0));
        students.add(new Student(3, "Karthik Reddy", "Electronics", 79.25));
        return students;
    }

    // Path variable example - fetch one student "by id" from the in-memory list
    @GetMapping("/student/{id}")
    public Student getStudentById(@PathVariable int id) {
        for (Student s : getAllStudents()) {
            if (s.getId() == id) {
                return s;
            }
        }
        return new Student(0, "Not Found", "N/A", 0);
    }
}
