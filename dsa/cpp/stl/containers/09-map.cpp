#include <iostream>
#include <map>
#include <unordered_map>

using namespace std;

// unique key : value pairs
// key can be of any data type
// keys are stored in sorted order

void explainMap() {
  map<int, int> mp;
  map<int, pair<int, int>> mp1;
  map<pair<int, int>, int> mp2;

  mp[1] = 2;
  // internally it is stored as {1,2}
  mp.insert({3, 1});
  // {3, 1} is added next

  mp2[{2, 3}] = 10;

  for (auto it : mp) {
    cout << it.first << " " << it.second << endl;
  }

  cout << mp[1];
  cout << mp[5];  // 0

  auto it = mp.find(3);
  cout << it->second;

  auto it = mp.find(5);  // displays mp.end()

  auto it = mp.lower_bound(2);
  auto it = mp.upper_bound(3);

  // erase, empty, swap, size are same as above
}

void explainMultiMap() {
  // everything is same as map
  // only difference is that it can store multiple keys
  // map[key] cannot be used here
}

void explainUnorderdMap() {
  // it will have unique keys
  //  not sorted
}