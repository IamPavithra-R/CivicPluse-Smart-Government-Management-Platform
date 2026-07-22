package com.example.exercise;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootExerciseApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootExerciseApplication.class, args);
        System.out.println("Server started. Try:");
        System.out.println("  GET  http://localhost:8080/hello");
        System.out.println("  GET  http://localhost:8080/calculator/add/10/5");
        System.out.println("  GET  http://localhost:8080/calculator/multiply?a=4&b=6");
        System.out.println("  GET  http://localhost:8080/student");
    }
}
