package com.example.exercise.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Exercise 2: Simple Calculator API
 * Concepts: @PathVariable vs @RequestParam, basic arithmetic, error handling
 *
 * Path variable style:
 *   GET /calculator/add/10/5
 *   GET /calculator/subtract/10/5
 *   GET /calculator/multiply/10/5
 *   GET /calculator/divide/10/5
 *
 * Query param style (same operations, different way of passing data):
 *   GET /calculator/multiply?a=4&b=6
 */
@RestController
public class CalculatorController {

    // ---- Using @PathVariable ----

    @GetMapping("/calculator/add/{a}/{b}")
    public String add(@PathVariable double a, @PathVariable double b) {
        return format(a, "+", b, a + b);
    }

    @GetMapping("/calculator/subtract/{a}/{b}")
    public String subtract(@PathVariable double a, @PathVariable double b) {
        return format(a, "-", b, a - b);
    }

    @GetMapping("/calculator/multiply/{a}/{b}")
    public String multiplyPath(@PathVariable double a, @PathVariable double b) {
        return format(a, "*", b, a * b);
    }

    @GetMapping("/calculator/divide/{a}/{b}")
    public String dividePath(@PathVariable double a, @PathVariable double b) {
        if (b == 0) {
            return "Error: Division by zero is not allowed.";
        }
        return format(a, "/", b, a / b);
    }

    // ---- Using @RequestParam (query string style: ?a=..&b=..) ----

    @GetMapping("/calculator/multiply")
    public String multiplyQuery(@RequestParam double a, @RequestParam double b) {
        return format(a, "*", b, a * b);
    }

    @GetMapping("/calculator/divide")
    public String divideQuery(@RequestParam double a, @RequestParam double b) {
        if (b == 0) {
            return "Error: Division by zero is not allowed.";
        }
        return format(a, "/", b, a / b);
    }

    // Helper method to keep response formatting consistent
    private String format(double a, String op, double b, double result) {
        return a + " " + op + " " + b + " = " + result;
    }
}
