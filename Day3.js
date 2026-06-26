// console.log(typeof(typeof(1)));


// let arr= [1,2,3,7,9,24,200,0,4,5];
// let max=arr[0];
// let min = arr[0];
// for(let i =1;i<arr.length;i++){
//      if(arr[i] > max){
//         max = arr[i];
//      }
//      if(arr[i] < min){
//         min =arr[i];
//      }
// }
// console.log(max);
// console.log(min);



// let arr= [200,0,4,5];
// let sum = 0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
// }
// console.log(sum);



// let arr= [1,2,3,7,9,24,200,0,4,5];
// let left =0;
// let right = arr.length-1;
// while(left<right){
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++;
//     right--;
// }
// console.log(arr);



// let str = "banana"

// let obj = {};

// for(let i=0;i<str.length;i++){
//     let char = str[i];
//     if(obj[char]){
//         obj[char]++;
//     }else{
//         obj[char]=1;
//     }
// }

// console.log(obj);




// function outer(){
//     let count=0;

//     return function(){
//           count++;
//           return count;
//     }
// }

// const count = outer();
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
