import java.util.Scanner;

/**
 * Problem 7: Reverse a String
 * Reverses a string in place using the two-pointer technique.
 */
public class Problem7_ReverseString {

    public static void reverseString(char[] s) {
        int left = 0;
        int right = s.length - 1;

        while (left < right) {
            char temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String input = sc.nextLine();

        char[] chars = input.toCharArray();
        reverseString(chars);

        System.out.println("Reversed string: " + new String(chars));

        sc.close();
    }
}
