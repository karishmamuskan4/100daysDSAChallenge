function minvisitors(visitors,k) {
  const n = visitors.length
  let minsum=Infinity;
 for(i=0;i<n-k;i++){
   let sum = 0;
   for(j=0;j<k;j++){
     sum+=visitors[i+j];
   }
   if (sum<minsum){
     minsum=sum;
   }
 }
 return minsum;
}
console.log(minvisitors([180,20,30, 30,50,200,100],2))