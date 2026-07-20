import java.util.Arrays;
import java.util.Scanner;

/**
 * Problem 9: Move Zeroes (LeetCode classic)
 * Moves all zeroes in an array to the end while keeping the relative
 * order of the non-zero elements, done in-place using two pointers.
 */
public class Problem9_MoveZeroes {

    public static void moveZeroes(int[] nums) {
        int insertPos = 0;

        // Step 1: move all non-zero elements to the front
        for (int num : nums) {
            if (num != 0) {
                nums[insertPos] = num;
                insertPos++;
            }
        }

        // Step 2: fill the remaining positions with zero
        while (insertPos < nums.length) {
            nums[insertPos] = 0;
            insertPos++;
        }
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

        moveZeroes(nums);

        System.out.println("Array after moving zeroes: " + Arrays.toString(nums));

        sc.close();
    }
}
