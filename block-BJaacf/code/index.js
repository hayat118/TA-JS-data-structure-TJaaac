// 1. Create an array named numbers and store 5 number values in it
let numbers=[5,12,15,18,21]
// 2. Calculate the sum of array items and print it to the console using console.log()
  let sum=0;

for(let i=0;i<numbers.length;i=i+1){
  sum +=numbers[i];
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
let numbers=[5,12,15,18,21]
let sum=0;

for(let i=0;i<numbers.length;i=i+1){
  sum +=numbers[i];
}
console.log(sum/numbers.length)


// 4. Find the highest number in the array and print it to the console using console.log()
let numbers=[5,12,15,18,21]
let highestNumber=numbers[0];
for (let i=0;i<numbers.length;i++){
   if(highestNumber<numbers[i]){
     highestNumber=numbers[i]
   }
}
console.log(highestNumber);

// 5. Find the lowest number in the array and print it to the console using console.log()
let numbers=[5,12,15,18,21]
let lowestNumber=numbers[0];
for (let i=0;i<numbers.length;i++){
   if(lowestNumber>numbers[i]){
     lowestNumber=numbers[i]
   }
}
console.log(lowestNumber);

// 6. Find the even numbers in the array and print them to the console using console.log()
let numbers=[5,12,15,18,21]
let evenNumbers=[]
for (let i=0;i<numbers.length;i++){
  if(numbers[i]%2==0){
    evenNumbers.push(numbers[i])
  }
}
console.log(evenNumbers);


// 7. Find the odd numbers in the array and print them to the console using console.log()
let numbers=[5,12,15,18,21]
let evenNumbers=[]
for (let i=0;i<numbers.length;i++){
  if(numbers[i]%2!==0){
    evenNumbers.push(numbers[i])
  }
}
console.log(evenNumbers);

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let numbers=[5,12,15,18,21]
let result=[]
for(i=0;i<numbers.length;i++){
  if(numbers[i]%5==0){
    result.push(numbers[i])
  }
}
console.log(result);


// 9. Log all the element of the array one by one
let numbers=[5,12,15,18,21]
for(i=0;i<numbers.length;i++){
console.log(numbers[i])
    
}


// 10. Find all the number in the array that is divisible by 3
let numbers=[5,12,15,18,21]
let result=[]
for(i=0;i<numbers.length;i++){
  if(numbers[i]%3==0){
    result.push(numbers[i])
  }
}
console.log(result);
