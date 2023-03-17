function plusMinus(arr) {
  let positive = arr.filter(number => number > 0).length / arr.length;
  let negative = arr.filter(number => number < 0).length / arr.length;;
  let zeronums = arr.filter(number => number == 0).length / arr.length;;
  return console.log(positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + zeronums.toFixed(6))

}
function miniMaxSum(arr) {
  let sorted = arr.sort(function(a, b) {
    return a - b;
  });
  let min = 0;
  let max = 0;
  for (let ix=0; ix< sorted.length; ix++) {
    if (ix != 0) {
      max += sorted[ix];
    }
    if (ix != sorted.length - 1) {
      min += sorted[ix];
    }
  }
  return console.log(min + ' ' + max);
}
miniMaxSum([1, 3, 5, 7, 9]);

function timeConversion(s) {
  let postfix = s.substring(s.length-2);
  let hour = Number(s.substring(0, 2));
  let time = s.substring(0, s.length-2);
  let zeroArr = time.split(':');
  if (postfix === 'AM') {
    if (hour === 12) {
      zeroArr[0] = '00';
      time = zeroArr.join(':');
    }
    return time;
  }
  if (hour === 12) {
    return time;
  }
  let tHour = (hour + 12).toString();
  zeroArr[0] = tHour.length === 1 ? '0' + tHour : tHour;
  time = zeroArr.join(':');
  console.log(time);
  return time;
}
timeConversion('01:05:45PM');

function lonelyinteger(a) {
  let set = new Set(a);
  let result = null;
  for (let elem of set) {
   let filtered = a.filter(e => e === elem) || [];
   if (filtered.length === 1) {
     result = elem;
   }
  }
  return result;
}
console.log(lonelyinteger([1,2,3,4,3,2,1]));
/// Diagonal Difference
function diagonalDifference(arr) {
  let n = arr.length;
  let d1 = 0;
  let d2 = 0;
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      if(i === j) {
        d1 += arr[i][j];
      }
      if(i + j === n - 1){
        d2 += arr[i][j];
      }
    }
  }
  return Math.abs(d1 - d2);
}

/// Counting Sort 1
function countingSort(arr) {
  let freqArr = new Array(100).fill(0);

  for (let i of arr) {
    freqArr[i] += 1;
  }

  return freqArr;
}
// Zig Zag Sequence
let arr = [6,2, 3, 5, 7, 1, 4];
let midIndex = Math.floor(arr.length / 2);
let sorted = arr.sort(function(a, b) {
  return a - b;
});
let popped = sorted.pop();
let beginArr = sorted.slice(0, midIndex);
let endArr = sorted.slice(midIndex).reverse();
let resultArr = beginArr.concat(popped, endArr);
console.log(resultArr.join(' '));
console.log(resultArr);
