// const mergeSort = array => {
//   if (array.length > 1) {
//     middle = Math.floor(array.length / 2)
//     left = array.slice(0, middle)
//     right = array.slice(middle)
//     console.log('left', left)
//     console.log('right', right)
//     mergeSort(left)
//     mergeSort(right)
//     // console.log('before mergeRight')
//     let i = 0
//     let j = 0
//     let k = 0
//     while (i < left.length && j < right.length) {
//       if (left[i] < right[j]) {
//         array[k] = left[i]
//         i++
//       } else {
//         array[k] = right[j]
//         j++
//       }
//       k++
//     }
//     while (i < left.length) {
//       array[k] = left[i]
//       i++
//       k++
//     }
//     while (j < right.length) {
//       array[k] = right[j]
//       j++
//       k++
//     }
//   }
//   return array
// }

// const data = [4, 2, 3, 1, 5]
// console.log(mergeSort(data))

let bucketData = [1, 5, 3, 2, 6, 7]

// Create bucketSort function (array, bucket size)
//   Create vars for i, min, max, and bucket size
//   Find min and max value
//   Create amount of buckets
//   Push values to correct buckets
//   Sort buckets

const bucketSort = (array, bucketSize) => {
  let i
  let min = array[0]
  let max = array[array.length - 1]
  bucketSize = bucketSize || 2

  let bucketCount = Math.floor(max - min / bucketSize + 1)
  let allBuckets = new Array(bucketCount)
  console.log(allBuckets)
}

bucketSort(bucketData)
