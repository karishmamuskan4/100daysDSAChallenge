/*📢 DSA Day - 9 Challenge: Real-World Two Pointers (EZ-Medium) 💻🚀
✅ Q1. Remove Duplicate Emails (Like Gmail cleanup)
📧 Problem:
You're building an email cleanup feature. Given a sorted list of email IDs, remove all duplicates in-place and return the list of unique emails.

📝 Input:
emails = ["ali@gmail.com", "ali@gmail.com", "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"]
📤 Output:
["ali@gmail.com", "sara@gmail.com", "zayn@gmail.com"]

✅ Q2. Playlist Duration Matcher (Music App Feature)
🎵 Problem:
You’re building a music app. Users want to create a 2-song playlist that exactly matches their commute time.

You're given an array of song durations (in minutes), and a targetDuration.
Find one pair of songs (different songs) that exactly add up to the target.

📝 Input:

songs = [3, 5, 8, 2, 7, 4]  
targetDuration = 10

📤 Output:

[2, 8] // or [3, 7], any valid pair

*/
//1st one
function removeDublicates(emails) {
 let j = 0;
 for(let i =0; i<emails.length;i++){
  if (emails[i]!==emails[j]) {
   j++
   emails[j]=emails[i]
  }
 }
 return emails.slice(0,j+1);
}
console.log(removeDublicates( ["ali@gmail.com", "ali@gmail.com", "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"]
))
//2nd one
function songspair (song, duration){
 let left = 0;
let right= song.length-1;
while(left<right){
let time=song[left]+song[right]
if(time==duration){
 return [song[left], song[right]]
}
else if(time<duration) {
 left++
}
else{
 right--
}
}

}
console.log(songspair([3,5,8,2,7,4],10))