package com.example.exercise.model;

/**
 * Plain Old Java Object (POJO).
 * Spring Boot uses Jackson under the hood to automatically convert
 * objects like this into JSON when returned from a @RestController.
 */
public class Student {

    private int id;
    private String name;
    private String course;
    private double marks;

    public Student() {
    }

    public Student(int id, String name, String course, double marks) {
        this.id = id;
        this.name = name;
        this.course = course;
        this.marks = marks;
    }

    // Getters and setters - required for Jackson to read/write fields as JSON

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public double getMarks() {
        return marks;
    }

    public void setMarks(double marks) {
        this.marks = marks;
    }
}
