/*📢 DSA Day - 10 Challenge is LIVE! 🧠⚡
Focus: Two Pointers Real-World Edition (Medium)

Problem Statement:
You're building a calendar integration tool. Two people share their schedules in the form of sorted busy time intervals (start and end times). You need to merge both their busy slots into a single calendar and combine any overlapping or touching intervals.

📝 Input Example:

userA = [[9, 11], [13, 15], [18, 20]]  
userB = [[10, 12], [14, 16], [17, 18]]

📤 Expected Output:

[[9, 12], [13, 16], [17, 20]]

🔧 Explanation:

[9, 11] and [10, 12] overlap → merged into [9, 12]

[13, 15] and [14, 16] overlap → merged into [13, 16]

[18, 20] and [17, 18] touch → merged into [17, 20]
*/

function mergeSchedules(userA, userB) {
  // Step 1: Merge both arrays
  let all = [...userA, ...userB];

  // Step 2: Sort by start time
  all.sort((a, b) => a[0] - b[0]);

  // Step 3: Merge intervals
  let merged = [all[0]]; // start with first interval

  for (let i = 1; i < all.length; i++) {
    let last = merged[merged.length - 1]; // last interval in merged
    let current = all[i];

    if (current[0] <= last[1]) {
      // Overlap or touch → merge
      last[1] = Math.max(last[1], current[1]);
    } else {
      // No overlap → push new interval
      merged.push(current);
    }
  }

  return merged;
}

let userA = [[9, 11], [13, 15], [18, 20]];
let userB = [[10, 12], [14, 16], [17, 18]];

console.log(mergeSchedules(userA, userB));
// Output: [ [ 9, 12 ], [ 13, 16 ], [ 17, 20 ] ]
