// Problem Statement:
// Given an array of integers and a target sum, determine if there exists a contiguous
// subarray within the array that sums up to the target. Return true if such a subarray exists,
// otherwise return false.
// Example:
// Input: arr = [4, 2, 7, 1, 9, 5], target = 17
// Output: true
// Explanation: The subarray [7, 1, 9] sums up to 17, which is equal to the target.
// Constraints:
// - The array will contain between 1 and 100,000 elements.
// - The elements in the array and the target sum will be between -1,000,000,000 and
// 1,000,000,000.
// Expected Time Complexity: O(n), where n is the length of the array.
// Expected Space Complexity: O(1).

const arrManipulation = (arr, target) => {
    let currentSum = 0;
  
    // Iterate through all possible subarrays
    for (let i = 0; i < arr.length; i++) {
      for (let j = i+1; j < arr.length; j++) {

        // Calculate the sum of the current subarray
        currentSum = arr.slice(i, j ).reduce((a, b) => a + b, 0);

        // Check if the current sum equals the target
        if (currentSum === target) {
          return true;
        }
      }
    }
  //If No subarray found with a sum equal to the target
    return false;
  };
  
  console.log(arrManipulation([4, 2, 7, 1, 9, 5], 17));
  console.log(arrManipulation([1,4,2,3], 5));
  console.log(arrManipulation([4, 2], 17));