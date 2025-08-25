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

//day 10
function mergeSchedule (userA,userB){
  let intervals=[...userA,...userB]
  let start=0
  let end=1
  intervals=intervals.sort((a,b)=>a[0]-b[0])
let previous=intervals[0];
let result =[previous];
for(let current of intervals){
  if(current[start]<= previous[end]){
    previous[end]=Math.max(previous[end], current[end])
  }
  else{
    result.push(current);
    previous=current;
  }
  
}
return result ;
}
console.log(mergeSch([[1,3],[6,9],[14,18]],[[2,4],[8,12],[16,20]]));