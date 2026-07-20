import java.util.Scanner;

/**
 * Problem 2: Recursion
 * Demonstrates recursion using Factorial calculation.
 * factorial(n) = n * factorial(n-1), with factorial(0) = 1
 */
public class Problem2_Recursion {

    public static long factorial(int n) {
        if (n == 0 || n == 1) {
            return 1; // base case
        }
        return n * factorial(n - 1); // recursive case
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();

        if (n < 0) {
            System.out.println("Factorial is not defined for negative numbers.");
        } else {
            System.out.println("Factorial of " + n + " is: " + factorial(n));
        }

        sc.close();
    }
}
