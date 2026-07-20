import java.util.Scanner;

/**
 * Problem 5: Prime Numbers in a Range
 * Prints all prime numbers up to N using the Sieve of Eratosthenes algorithm.
 */
public class Problem5_PrimeNumberRange {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the upper limit N: ");
        int n = sc.nextInt();

        boolean[] isComposite = new boolean[n + 1];

        for (int i = 2; (long) i * i <= n; i++) {
            if (!isComposite[i]) {
                for (int multiple = i * i; multiple <= n; multiple += i) {
                    isComposite[multiple] = true;
                }
            }
        }

        System.out.println("Prime numbers up to " + n + ":");
        for (int i = 2; i <= n; i++) {
            if (!isComposite[i]) {
                System.out.print(i + " ");
            }
        }

        sc.close();
    }
}
