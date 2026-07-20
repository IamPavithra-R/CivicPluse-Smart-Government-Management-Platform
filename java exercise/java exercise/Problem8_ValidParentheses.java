import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Scanner;

/**
 * Problem 8: Valid Parentheses (LeetCode classic)
 * Checks whether a string of brackets ()[]{} is balanced/valid.
 * Uses a Stack (ArrayDeque) - every closing bracket must match
 * the most recently opened bracket.
 */
public class Problem8_ValidParentheses {

    public static boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<>();

        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else {
                if (stack.isEmpty()) {
                    return false;
                }
                char top = stack.pop();
                if ((c == ')' && top != '(') ||
                    (c == '}' && top != '{') ||
                    (c == ']' && top != '[')) {
                    return false;
                }
            }
        }

        return stack.isEmpty();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string of brackets: ");
        String input = sc.nextLine();

        System.out.println(isValid(input) ? "Valid" : "Not Valid");

        sc.close();
    }
}
