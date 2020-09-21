
// function splitArrayByN(arr, n) {
//   n = Number((arr.length/n).toString().split('.')[0]) + 1;
//   var rest = arr.length % n, // how much to divide
//       restUsed = rest, // to keep track of the division over the elements
//       partLength = Math.floor(arr.length / n),
//       result = [];
//   for(var i = 0; i < arr.length; i += partLength) {
//       var end = partLength + i,
//           add = false;
//       if(rest !== 0 && restUsed) { // should add one element for the division
//           end++;
//           restUsed--; // we've used one division element now
//           add = true;
//       }
//       result.push(arr.slice(i, end)); // part of the array
//       if(add) {
//           i++; // also increment i in the case we added an extra element for division
//       }
//   }
//   return result;
// }
// // Split in group of 3 items

// function testSplitArray(){
// var result0 = splitArrayByN([1,2], 4);
// var result1 = splitArrayByN([1,2,3,4,5,6], 4);
// var result2 = splitArrayByN([1,2,3,4,5,6,7], 4);
// var result3 = splitArrayByN([1,2,3,4,5,6,7,8], 4);
// var result4 = splitArrayByN([1,2,3,4,5,6,7,8,9], 4);
// var result5 = splitArrayByN([1,2,3,4,5,6,7,8,9,10], 4);
// var result6 = splitArrayByN([1,2,3,4,5,6,7,8,9,10,11], 4);
// var result7 = splitArrayByN([1,2,3,4,5,6,7,8,9,10,11,12], 4);
// var result8 = splitArrayByN([1,2,3,4,5,6,7,8,9,10,11,12,13], 4);
// var result9 = splitArrayByN([1,2,3,4,5,6,7,8,9,10,11,12,13,14], 4);
// var result10 = splitArrayByN([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 4);
// var result11 = splitArrayByN([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 4)
// var result12 = splitArrayByN([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17], 4);
// var aa = 2;
// }

//aaaaaaaaaaaaaaaaaaaaaaaaaaaaa!!!!!