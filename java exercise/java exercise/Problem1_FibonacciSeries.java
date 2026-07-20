import java.util.Scanner;

/**
 * Problem 1: Fibonacci Series
 * Print the first N terms of the Fibonacci series.
 * Series: 0, 1, 1, 2, 3, 5, 8, 13, ...
 */
public class Problem1_FibonacciSeries {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of terms: ");
        int n = sc.nextInt();

        System.out.print("Fibonacci Series: ");
        int first = 0, second = 1;

        for (int i = 0; i < n; i++) {
            System.out.print(first + " ");
            int next = first + second;
            first = second;
            second = next;
        }

        sc.close();
    }
}
