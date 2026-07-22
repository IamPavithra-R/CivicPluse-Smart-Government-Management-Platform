# Spring Boot Exercises

Three beginner exercises in one runnable Spring Boot project.

## How to run

1. Make sure you have **Java 17+** and **Maven** installed.
2. In this folder, run:
   ```
   mvn spring-boot:run
   ```
3. The app starts on `http://localhost:8080`

## Endpoints to try

### 1. Hello World API (`HelloWorldController.java`)
- `GET /hello`
- `GET /hello/name?name=Priya`

### 2. Calculator API (`CalculatorController.java`)
- `GET /calculator/add/10/5`
- `GET /calculator/subtract/10/5`
- `GET /calculator/multiply/10/5`
- `GET /calculator/divide/10/5`
- `GET /calculator/multiply?a=4&b=6`
- `GET /calculator/divide?a=10&b=0` (see the error handling)

### 3. JSON from POJO (`StudentController.java` + `Student.java`)
- `GET /student` — single object as JSON
- `GET /students` — list of objects as JSON array
- `GET /student/2` — lookup by id

## Folder structure

```
springboot-exercise/
├── pom.xml
└── src/main/
    ├── java/com/example/exercise/
    │   ├── SpringbootExerciseApplication.java
    │   ├── controller/
    │   │   ├── HelloWorldController.java
    │   │   ├── CalculatorController.java
    │   │   └── StudentController.java
    │   └── model/
    │       └── Student.java
    └── resources/
        └── application.properties
```
