function findLongestWord(arr) {
  let longestWord = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord(["Java", "Python", "JavaScript"])); // "JavaScript"
console.log(findLongestWord(["football", "basketball", "tennis"])); // "basketball"
console.log(findLongestWord(["sun", "moon", "stars"])); // "stars"

function sumUniqueNumbers(arr) {
  let uniqueNums = {};
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueNums[arr[i]]) {
      uniqueNums[arr[i]] = true;
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5])); // 15
console.log(sumUniqueNumbers([10, 20, 10, 20, 30])); // 60
console.log(sumUniqueNumbers([0, -1, -2, -1, -3])); // -6

function mergeArrays(...arrays) {
  let mergedArray = [];
  for (let i = 0; i < arrays.length; i++) {
    mergedArray = mergedArray.concat(arrays[i]);
  }
  return Array.from(new Set(mergedArray));
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergeArrays([1, 3, 5], [2, 4, 6], [3, 5, 7])); // [1, 3, 5, 2, 4, 6, 7]

function hasProperty(obj, prop) {
  return obj.hasOwnProperty(prop);
}

console.log(hasProperty({name: "Alice", age: 25}, "age")); // true
console.log(hasProperty({name: "Bob", country: "France"}, "gender")); // false
console.log(hasProperty({type: "fruit", color: "red"}, "color")); // true

function getPropertyValue(obj, prop) {
  return obj[prop];
}

console.log(getPropertyValue({name: "Alice", age: 25}, "name")); // "Alice"
console.log(getPropertyValue({brand: "Toyota", model: "Camry"}, "year")); // undefined
console.log(getPropertyValue({type: "laptop", brand: "Dell"}, "brand")); // "Dell"

function invertObject(obj) {
  let invertedObj = {};
  let keys = Object.keys(obj);
  for (let i = keys.length - 1; i >= 0; i--) {
    invertedObj[obj[keys[i]]] = keys[i];
  }
  return invertedObj;
}

const originalObject1 = { a: 1, b: 2, c: 1 };
const invertedObject1 = invertObject(originalObject1);
console.log(invertedObject1); // { '1': 'c', '2': 'b' }
