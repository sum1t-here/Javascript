// Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.

const capitalizeAuthor = (author) => {
  return author
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const filterAndCapitalizeBooks = (books) => {
  return books
    .filter((book) => book.year >= 2010)
    .map((book) => ({
      title: book.title,
      author: capitalizeAuthor(book.author),
      year: book.year,
    }));
};

const bookList = [
  { title: 'Book1', author: 'author1', year: 2008 },
  { title: 'Book2', author: 'author2', year: 2012 },
  { title: 'Book3', author: 'author3', year: 2005 },
  { title: 'Book4', author: 'author4', year: 2015 },
];

const filteredAndCapitalizedBooks = filterAndCapitalizeBooks(bookList);

console.log('Original Book List:', bookList);
console.log('Filtered and Capitalized Books:', filteredAndCapitalizedBooks);

// Original Book List: [
//     { title: 'Book1', author: 'author1', year: 2008 },
//     { title: 'Book2', author: 'author2', year: 2012 },
//     { title: 'Book3', author: 'author3', year: 2005 },
//     { title: 'Book4', author: 'author4', year: 2015 }
//   ]
//   Filtered and Capitalized Books: [
//     { title: 'Book2', author: 'Author2', year: 2012 },
//     { title: 'Book4', author: 'Author4', year: 2015 }
//   ]
