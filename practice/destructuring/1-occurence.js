// Count the occurrences.
// You are building a word count generator that will take a large string of text as input and output the words and
// the number of times they are present in the string. Your task is to write a function that can count the
// occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
// assume that the string only contains alphabetic characters and spaces.

function countWords(str) {
  const words = str.split('');
  const map = new Map();

  for (let word of words) {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  }
  return map;
}

const str = 'Hi, How are you ?';
console.log(countWords(str));

// Map(12) {
//   'H' => 2,
//   'i' => 1,
//   ',' => 1,
//   ' ' => 4,
//   'o' => 2,
//   'w' => 1,
//   'a' => 1,
//   'r' => 1,
//   'e' => 1,
//   'y' => 1,
//   'u' => 1,
//   '?' => 1
// }
