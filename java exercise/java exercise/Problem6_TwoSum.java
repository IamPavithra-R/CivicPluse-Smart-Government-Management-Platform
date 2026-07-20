import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

/**
 * Problem 6: Two Sum (LeetCode classic)
 * Given an array of integers and a target, return the indices of the two
 * numbers that add up to the target. Uses a HashMap for an O(n) solution.
 */
public class Problem6_TwoSum {

    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> seen = new HashMap<>(); // value -> index

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (seen.containsKey(complement)) {
                return new int[]{seen.get(complement), i};
            }
            seen.put(nums[i], i);
        }

        return new int[]{-1, -1}; // no solution found
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();

        int[] nums = new int[n];
        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }

        System.out.print("Enter target sum: ");
        int target = sc.nextInt();

        int[] result = twoSum(nums, target);

        if (result[0] == -1) {
            System.out.println("No two numbers add up to the target.");
        } else {
            System.out.println("Indices: [" + result[0] + ", " + result[1] + "]");
        }

        sc.close();
    }
}
