function moveZeroes(nums) {
  let zeroIndex = 0; // Pointer to track the position of zeros

  // Traverse the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is not zero
    if (nums[i] !== 0) {
      // Swap the non-zero element with the element at the zeroIndex
      [nums[i], nums[zeroIndex]] = [nums[zeroIndex], nums[i]];
      zeroIndex++; // Increment the zeroIndex
    }
  }
}

// Example usage:
const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // Output: [1, 3, 12, 0, 0]

const nums2 = [0];
moveZeroes(nums2);
console.log(nums2); // Output: [0]
