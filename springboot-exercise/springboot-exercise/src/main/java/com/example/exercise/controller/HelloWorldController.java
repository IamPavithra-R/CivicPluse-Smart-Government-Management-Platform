package com.example.exercise.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Exercise 1: Hello World REST API
 * Concepts: @RestController, @GetMapping, @RequestParam
 *
 * Try:
 *   GET /hello
 *   GET /hello/name?name=Priya
 */
@RestController
public class HelloWorldController {

    // Basic GET endpoint - returns a plain string
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, World! Welcome to Spring Boot.";
    }

    // GET endpoint with an optional query parameter
    @GetMapping("/hello/name")
    public String sayHelloToName(@RequestParam(defaultValue = "Guest") String name) {
        return "Hello, " + name + "! Welcome to Spring Boot.";
    }
}
