// Lists are one of the most common organizing tools people use in their day-to-day lives.
// We have to-do lists, grocery lists, top-ten lists, bottom-ten lists, and many other types.
// Our computer programs can also use lists, particularly if we only have a few items to store in list form.
// Lists are especially useful if we don’t have to perform searches on the items in the list or put them into
// some type of sorted order. When we need to perform long searches or complex sorts, lists become less useful,
// especially with more complex data structures.

class List {
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  }
  // Append: Adding an Element to a List

  append(element) {
    this.dataStore[this.listSize++] = element;
  }

  // Find: Finding an Element in a List

  find(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
        return i;
      }
    }
    return -1;
  }

  // Remove: Removing an Element from a List

  remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  }

  // Length: Determining the Number of Elements in a List

  length() {
    return this.listSize;
  }

  // toString: Retrieving a List’s Elements

  toString() {
    return this.dataStore;
  }

  // Insert: Inserting an Element into a List

  insert(element, after) {
    const insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
    }
  }

  // Clear: Removing all elements from an list
  clear() {
    delete this.dataStore;
    this.dataStorev = [];
    this.listSize = this.pos = 0;
  }

  // Contains: To see if a particular element is present in an array
  contains(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (element === this.dataStore[i]) {
        return true;
      }
    }
    return false;
  }
}

const myList = new List();
myList.append(1);
myList.append(2);
myList.append(3);

console.log(myList.toString()); // Output: [1, 2, 3]
console.log(myList.length()); // Output: 3
console.log(myList.contains(2)); // Output: true
console.log(myList.find(2)); // Output: 1
myList.insert(4, 2);
console.log(myList.toString()); // Output: [1, 2, 4, 3]
myList.remove(2);
console.log(myList.toString());
