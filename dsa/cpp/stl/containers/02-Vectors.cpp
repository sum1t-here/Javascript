#include <iostream>
#include <vector>
using namespace std;

void explainVector() {
  vector<int> v;
  // creates an empty container

  v.push_back(1);
  v.emplace_back(2);

  // emplace_back is similar to push_back

  vector<pair<int, int>> vec;
  vec.push_back({1, 2});
  vec.emplace_back(1, 2);

  vector<int> v(5, 100);
  // container of size 5 having all it's instance filled as 100

  vector<int> v(5);
  // even if the sized is given it can be increased

  vector<int> v1(5, 20);
  vector<int> v2(v1);

  //   accessing elements in a vector

  cout << v[0] << " " << v.at(0);

  // ITERATORS
  vector<int>::iterator it = v.begin();
  // v.begin() --> points directly to memory
  it++;
  // it moves to next memory
  cout << *(it) << " ";

  it = it + 2;
  cout << *(it) << " ";

  vector<int>::iterator it = v.end();
  // v.end() points to the memory location after the last element
  // use it-- to point to the last element

  // Printing an element

  cout << v.back() << " ";
  // fetch last element of a vector container

  for (vector<int>::iterator it = v.begin(); it != v.end(); it++) {
    cout << *(it) << " ";
  }

  for (auto it = v.begin(); it != v.end(); it++) {
    cout << *(it) << " ";
  }
  // auto assigns the data type automatically (auto a = 5; is same as int a =
  // 5;)

  for (auto it : v) {
    cout << it << " ";
  }

  // DELETION

  // {10, 20, 12, 13}
  v.erase(v.begin() + 1);  // {10,12,13}
  // .erase(iterator)

  // {10, 20, 12, 23, 35}
  v.erase(v.begin() + 2,
          v.begin() + 4);  // {10, 20, 35} [Start:Deleted, End:!Deleted)

  // INSERTION

  vector<int> v(2, 100);           // {100, 100}
  v.insert(v.begin(), 300);        // {300, 100, 100}
  v.insert(v.begin() + 1, 2, 10);  // {300, 10, 10, 100, 100}
  // pos, no. of ele, val

  vector<int> copy(2, 50);
  v.insert(v.begin(), copy.begin(),
           copy.end());  // {50, 50, 300, 10, 10, 100, 100}

  cout << v.size();  // 2

  v.pop_back();

  // v1 -> {10, 20}
  // v2 -> {30, 40}
  v1.swap(v2);  // v1 -> {30, 40} v2 -> {10, 20}

  v.clear();  // erases the vector

  cout << v.empty();  // check if vector is empty or not
}