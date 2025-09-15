function longestProductiveStreak(days, k) {
  let n = days.length;
  let maxLen = 0;

  for (let i = 0; i < n; i++) {
    let zeros = 0;
    for (let j = i; j < n; j++) {
      if (days[j] === 0) zeros++;

      if (zeros <= k) {
        maxLen = Math.max(maxLen, j - i + 1);
      } else {
        break; // no point checking longer subarray
      }
    }
  }

  return maxLen;
}

let days = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0];
let k = 2;
console.log(longestProductiveStreak(days, k)); // Output: 7
