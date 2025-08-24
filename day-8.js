/*📢 DSA Day - 8 Challenge: Two Pointers Special!

✅ Q1. Count Pairs with Given Sum

🧮 Problem:
You're given a sorted array of integers and a target sum.
Find how many unique pairs exist such that the sum of the pair equals the target.

📝 Input:

arr = [1, 2, 3, 4, 5, 6, 7]  
target = 8

📤 Output:

3

✅ Q2. Move Zeroes to End

📦 Problem:
You're given an array. Move all 0s to the end while maintaining the order of non-zero elements.
Do it in-place, using two pointers.

📝 Input:

arr = [0, 1, 0, 3, 12]

📤 Output:

[1, 3, 12, 0, 0]
*/

//1st one
function countpair(array,target) {
 let count = 0
 let left = 0
 let right = array.length-1
 while(left<right){
 let sum = array[left]+ array[right];
  if(sum===target){
   count+=1
   left++
   right--
  }
  else if (sum<target) {
   left++
  }
  else{
   right--
  }
 }
 return count;
}
console.log(countpair([1,2,3,4,5,6,7],8));
//2nd answer 
function movezeros(array) {
 let j = 0;
 for(i=0;i<array.length;i++){
  if (array[i]!==0) {
   array[j]=array[i];
   j++
  }
 }
 while(j<array.length){
  array[j] = 0;
  j++
 }
 return array;
}
console.log(movezeros([1,2,0,3,0,3,45,67,0]));