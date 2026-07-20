import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

/**
 * Problem 4: Frequency Count
 * Counts how many times each element appears in an array.
 * Uses a LinkedHashMap to preserve the order elements first appear in.
 */
public class Problem4_FrequencyCount {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();

        int[] arr = new int[n];
        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        Map<Integer, Integer> frequencyMap = new LinkedHashMap<>();

        for (int num : arr) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        System.out.println("Element : Frequency");
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            System.out.println(entry.getKey() + " : " + entry.getValue());
        }

        sc.close();
    }
}
