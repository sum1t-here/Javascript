var names = ['John', 'Jerry', 'Naruto', 'Sasuke', 'Naruto'];
console.log('Enter a name to be searched for: ');

var name = 'Naruto';
var position = names.indexOf(name);
var lastPosition = names.lastIndexOf(name);
if (position >= 0) {
  console.log(`Found ${name} at position ${position}`);
  console.log(`Last found ${name} at position ${lastPosition}`);
} else {
  console.log('Not found in an array');
}

// string representation of an array

var nameStr = names.join();
console.log(nameStr); // John,Jerry,Naruto,Sasuke,Naruto
console.log(typeof nameStr); // string

nameStr = nameStr.toString();
console.log(nameStr); // John,Jerry,Naruto,Sasuke,Naruto

// creating new arrays from existing arrays

var narutoAnime = ['Naruto', 'Kakashi', 'Tsunade', 'Konohamaru'];
var jujutsuAnime = ['Gojo', 'Itadori', 'Sukuna'];

var combine = narutoAnime.concat(jujutsuAnime);
console.log(combine);
// [
//     'Naruto',
//     'Kakashi',
//     'Tsunade',
//     'Konohamaru',
//     'Gojo',
//     'Itadori',
//     'Sukuna'
//   ]
