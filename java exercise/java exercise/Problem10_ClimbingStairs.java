import java.util.Scanner;

/**
 * Problem 10: Climbing Stairs (LeetCode classic)
 * You are climbing a staircase with n steps. Each time you can climb
 * either 1 or 2 steps. Count the distinct number of ways to reach the top.
 * This is the same pattern as Fibonacci - a nice bridge from recursion to DP.
 */
public class Problem10_ClimbingStairs {

    // Bottom-up dynamic programming approach (efficient, avoids recomputation)
    public static int climbStairs(int n) {
        if (n <= 2) {
            return n;
        }

        int oneStepBefore = 2; // ways to reach step 2
        int twoStepsBefore = 1; // ways to reach step 1

        for (int i = 3; i <= n; i++) {
            int current = oneStepBefore + twoStepsBefore;
            twoStepsBefore = oneStepBefore;
            oneStepBefore = current;
        }

        return oneStepBefore;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of stairs: ");
        int n = sc.nextInt();

        System.out.println("Distinct ways to climb " + n + " stairs: " + climbStairs(n));

        sc.close();
    }
}
