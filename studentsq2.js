const ages=[19,22,19,24,20,25,26,24,25,24];
//step 1:sort the array
ages.sort((a,b)=>a-b);
//step 2:Find the max and min array
const minAge=ages[0];
const maxAge=ages[ages.length-1];
//step 3: Find the median age
let medianAge
if(ages.length %2===0)
{
    const mid1=ages[Math.floor(ages.length)/2 -1];
    const mid2=ages[Math.floor(ages.length/2)];
    medianAge=(mid1+mid2)/2;

}
else{
    medianAge=ages[Math.floor(ages.length /2)]
}
//Step 4:Find the average age
const sumAges=ages.reduce((sum,age)=>sum +age,0);
const averageage=sumAges/ages.length;
//Step 5:Find the range of ages
const averageRange=maxAge-minAge;
//Step 6:Compare(min-average) and(max-average)
const minDifference=Math.abs(minAge-averageage);
const maxDifference=Math.abs(maxAge-averageage);
console.log('Sorted Age:',ages);
console.log('Min Age:',minAge);
console.log('Max Age:',maxAge);
console.log('Median Age:',medianAge);
console.log('Average Age:',averageage);
console.log('Age Range:',averageRange);
console.log('Min-Average:',minDifference);
console.log('Max-Average:',maxDifference);

