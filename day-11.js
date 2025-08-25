/*📢 DSA Day - 11 Challenge: Advanced Two Pointers 🧠🔥

You’ve now got the hang of basic and medium-level problems. Today, let’s push your thinking with a hard-level problem that demands both logic and optimization using the Two Pointers technique.

🔥 Challenge: Find All Unique Triplets That Sum to Zero
Problem Statement:
You’re building a feature for a finance dashboard that analyzes daily profit/loss patterns. You're given an array of integers representing daily net changes.
Your task is to find all unique triplets (i, j, k) such that:
arr[i] + arr[j] + arr[k] == 0  and i != j != k

📝 Input Example:
arr = [-1, 0, 1, 2, -1, -4]

📤 Expected Output:
[[-1, -1, 2], [-1, 0, 1]
*/
function threesum(nums) {
 nums=nums.sort((a,b)=>a-b)
 let result = [ ];
 for(let i=0;i<=nums.length-2;i++){
   if(i>0 && nums [i]===nums[i-1])continue;
   let j= i+1;
   let k = nums.length-1;
   while(j<k){
     let sum = nums[i]+nums[j]+nums[k]
     if (sum ==0) {
       result.push([nums[i],nums[j], nums[k]])
       while(nums[j]===nums[j+1])j++
       while(nums[k]=== nums[k-1])k--
       j++
       k--
     }
     else if (sum<0){
       j++
     }
     else{
       k--
     }
   }
 }
 return result
}
console.log(threesum([1,-1,-4,0,2,1,2]));