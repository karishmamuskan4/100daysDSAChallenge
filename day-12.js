/*
📢 DSA Day - 12 Challenge: Sliding Window Begins! 🪟✨
Hey Warriors!
Today marks your intro to one of the most powerful techniques in array/string problems Sliding Window.
But hold up before we rush into optimization, today’s task is to solve a classic problem using a brute-force approach only.

👨🏻‍💻 Why?
Because only when you feel the pain of inefficiency… will you crave optimization. 💀😅


✅ Challenge: Maximum Sum of K Consecutive Elements (Brute-Force Only)
📊 Problem Statement:
You are analyzing website traffic logs. The array visits contains the number of users who visited the site on each day. You are asked to find the maximum number of visitors in any k consecutive days.

📥 Input:

visits = [10, 20, 30, 40, 50, 60, 70]  
k = 3

📤 Expected Output:
180
*/

function maxVisitors(visits, k) {
  let maxSum = 0;

  for (let i = 0; i <= visits.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += visits[j];
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  return maxSum;
}

console.log(maxVisitors([10, 20, 30, 40, 50, 60, 70], 3)); 
// Output: 180
