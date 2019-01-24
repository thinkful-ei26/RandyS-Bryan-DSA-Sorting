// Input:
// Create a method that takes three parameters. Input, Length and Start.
// Input is an unsorted array -> Length is how many times we need to loop. Pivot item is last item in the array
// so that our loop ends before the pivot value
// Start -> Starts loop from 0

// Output
// Pseudocode
let qsCount = 0
const quickSort = (input, start = 0, end = input.length - 1) => {
  // Base case
  if (input.length < 2) {
    return input
  }

  // Setting the pivot value to be the last element in the array
  const pivot = input[input.length - 1] // 3
  const leftArr = []
  const rightArr = []
  while (start < end) {
    qsCount++
    // Check the left side of the pivot
    if (input[start] < pivot) {
      leftArr.push(input[start])
    }
    // if 5 < 3 [].push(5) leftArr = [1.2]
    // Check the right side of the pivot
    else {
      rightArr.push(input[start]) // rightArr = [5,4]
    }
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
console.log('Count:', qsCount)

//split array in 2 and recursively sort each side
//merge the 2 parts

let msCount = 0

const mergeSort = input => {
  if (input.length < 2) {
    return input
  }
  const middle = Math.floor(input.length / 2)
  let leftArr = input.slice(0, middle)
  let rightArr = input.slice(middle)
  leftArr = mergeSort(leftArr)
  rightArr = mergeSort(rightArr)

  return merge(leftArr, rightArr, input)
}

const merge = (leftArr, rightArr, input) => {
  let leftIndex = 0
  let rightIndex = 0
  let outputIndex = 0
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    msCount++
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      input[outputIndex++] = leftArr[leftIndex++]
    } else {
      input[outputIndex++] = rightArr[rightIndex++]
    }
  }
  for (let i = leftIndex; i < leftArr.length; i++) {
    input[outputIndex++] = leftArr[i]
  }
  for (let i = rightIndex; i < rightArr.length; i++) {
    input[outputIndex++] = rightArr[i]
  }
  return input
}
// ++variable increments the variable, returning the new value.
// variable++ increments the variable, but returns the old value.
// --variable decrements the variable, returning the new value.
// variable-- decrements the variable, but returns the old value.

console.log(mergeSort(testData))
console.log(msCount)

let test = [1, 6, 4, 5, 3, 8]

const sortBucket = notSortedBucket => {
  for (let i = 1; i < notSortedBucket.length; i++) {
    let temp = notSortedBucket[i]
    let j = i - 1
    for (j; j >= 0 && notSortedBucket[j] > temp; j--) {
      notSortedBucket[j + 1] = notSortedBucket[j]
    }
    notSortedBucket[j + 1] = temp
  }
}

const bucketSort = (input, min, max, size) => {
  if (input.length < 1) {
    return input
  }
  // We gotta make the buckets
  DEFAULT_SIZE = 3
  size = size || DEFAULT_SIZE
  let bucketCount = Math.floor((max - min) / size) + 1
  let buckets = new Array(bucketCount)
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = []
  }
  // Now we distribute values into buckets
  for (let i = 0; i < input.length; i++) {
    // min 1 max 10
    // input[i] = 9
    buckets[Math.floor((input[i] - min) / size)].push(input[i])
  }
  // Sort the buckets
  // for (let i = 0; i < buckets.length; i++) {
  //   console.log(buckets[i]))
  // }
  console.log(buckets)
  for (i = 0; i < bucketCount.length; i++) {
    sortBucket(buckets[i])
    for (let j = 0; j < buckets[i].length; j++) {
      input.push(buckets[i][j])
    }
  }
  return input
}

// 1,3,4

console.log(bucketSort(test, 1, 8, 3))
