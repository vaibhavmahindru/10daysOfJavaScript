function getSecondLargest(nums) {
  // Complete the function
  var fl = nums[0];
  var sl = 0;
  for (let i = 0; i < nums.length; i++) {
    //if the array is unsorted
    if (nums[i] < fl && sl < nums[i]) {
      sl = nums[i];
    }
    // if array is sorted
    else if (nums[i] > fl) {
      sl = fl;
      fl = nums[i];
    }
  }
  return sl;
}

function main() {
  const n = +readLine();
  const nums = readLine().split(" ").map(Number);

  console.log(getSecondLargest(nums));
}
