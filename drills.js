// Input:
// Create a method that takes three parameters. Input, Length and Start.
// Input is an unsorted array -> Length is how many times we need to loop. Pivot item is last item in the array
// so that our loop ends before the pivot value
// Start -> Starts loop from 0

// Output
// Pseudocode
const quickSort = (input, start = 0, end = input.length - 1) => {
  // Base case
  if (input.length < 2) return input

  // Setting the pivot value to be the last element in the array
  const pivot = input[input.length - 1] // 3
  const leftArr = []
  const rightArr = []
  while (start < end) {
    // Check the left side of the pivot
    if (input[start] < pivot) leftArr.push(input[start])
    // if 5 < 3 [].push(5) leftArr = [1.2]
    // Check the right side of the pivot
    else rightArr.push(input[start]) // rightArr = [5,4]
    // Iterate through the while loop to eventually break out
    start++ // start -> 1, 2, 3, 4
  }
  // Recursively call left side of pivot, pivot and recursively call right side
  // with recursive functions iterated through enumerated properties with spread syntax
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)] // returns quickSort([1,2], [3], [5,4])
}

const testData = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  91,
  9,
  70,
  81,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  69,
  90,
  1,
  6,
  7,
  64,
  43,
  9,
  73,
  80,
  98,
  46,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  34,
  53,
  78,
  40,
  14,
  5,
]

console.log(quickSort(testData))

// const mergeSort ()
