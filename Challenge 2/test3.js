// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  for (let i = 0; i < arr2.length; i++) {
    var maxArr1 = Math.max(...arr1);
    if(arr2[i]>maxArr1){
     var result1=true;
    }
    else{
     var result1=false;
     break;
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    var minArr1 = Math.min(...arr1);
    // const element = arr2[j];
    if(arr2[j]<minArr1){
      var result2= true;
      break;
    }
    else{
      var result2 = false;
    }
  }
  const res = [result1,result2];
  return res;
}

console.log(result(arr1, arr2));