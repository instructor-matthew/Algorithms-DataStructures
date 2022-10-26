let arr = [1, 1, 2, 2, 3, 4, 4, 5];

function removeDupes(nums) {
  i = 0;
  for (var j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  nums.length = nums.length - i;
  return nums;
}

console.log(removeDupes(arr))