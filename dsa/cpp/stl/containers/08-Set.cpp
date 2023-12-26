#include <iostream>
#include <set>
#include <unordered_set>

using namespace std;

void explainSet() {
  // sorted and unique
  set<int> st;
  st.insert(1);   // { 1 }
  st.emplace(2);  // {1, 2}
  st.insert(2);   // {1, 2}
  st.insert(4);   // {1, 2, 4}
  st.insert(3);   // {1, 2, 3, 4}

  // begin, end, rend, rbegin, size, swap functions are same as the above

  // {1, 2, 3, 4}
  auto it = st.find(3);
  // returns an iterator

  auto it = st.find(6);
  // return st.end(), iterator after the last element

  st.erase(4);  // {1, 2, 3}
                // takes logarithmic time

  int cnt = st.count(1);  // 1
  // either 0 or 1

  auto it = st.find(3);
  st.erase(it);  // it takes constant time

  // { 1, 2, 3, 4, 5 }
  auto it1 = st.find(2);
  auto it2 = st.find(4);
  st.erase(it1, it2);  // { 1, 4, 5 }

  // lower_bound() and upper_bound() works in the same way
  // as it does on vector

  auto it = st.lower_bound(2);
  auto it = st.upper_bound(3);
}

void explainMultiSet() {
  // sorted but not unique
  // rest everything is same as set

  multiset<int> ms;
  ms.insert(1);  // { 1 }
  ms.insert(1);  // { 1, 1 }
  ms.insert(1);  // { 1, 1, 1}

  ms.erase(1);  // erases all 1's

  int cnt = ms.count(1);

  // only a single 1 is deleted
  ms.erase(ms.find(1));
  // only the iterator is deleted

  ms.erase(ms.find(1), next(ms.find(1), 2));
  // start from iterator and go till 2
  // therefore it deletes two 1's

  // rest all functions are same as set
}

// Unordered set

void explainUset() {
  // unique and not sorted
  unordered_set<int> st;
  // lower_bound and upper_bound function does not works
  // rest all are same as above
  // it doesn't store in any particular order
  // it has a better complexity than set in most cases,
  // except some when collisionn happens
}