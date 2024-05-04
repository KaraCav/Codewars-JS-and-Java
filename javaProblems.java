// NUMBER 1: Multpiles of 3 or 5 - Return the sum of all multiples of 3 or 5 below X 
// EX: If x = 10, the multiples below it are 3, 5, 6 and 9. Return their sum → 23.

public class Solution {
  public int solution(int number) {
        int total = 0;
        for (int count = 0; count < number; count++) {
            if (count % 3 == 0 || count % 5 == 0) {
                total = total + count;
            }
        }
        return total;
  }
}
