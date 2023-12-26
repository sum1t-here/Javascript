#include <algorithm>
#include <functional>
#include <iostream>

using namespace std;

void explainExtra() {
  sort(a, a + n);
  sort(v.begin(), v.end());

  sort(a + 2, a + 4);
  // only specific portion is sorted

  sort(a, a + n, greater<int>());  // sorts in descending order

  pair<int, int> a[] = {{1, 2}, {2, 1}, {4, 1}};
  // sort it according to second element
  // if second element is same then sort
  // it according to the first element but in ascending order

  sort(a, a + n, comp);
  // {4,1}, {2,1}, {1,2}

  bool comp(pair<int, int> p1, pair<int, int> p2) {
    if (p1.second < p2.second) return true;
    if (p1.second > p2.second) return false;
    // they are same;
    if (p1.first > p2.first) return true;
    return false;

    int num = 7;
    int cnt = __builtin_popcount();
    // returns the no of 1's in its binary

    long long num = 23786489729829083;
    int cnt = __builtin_popcountll();

    string s = "123";
    // sort before performing permutation

    sort(s.begin(), s.end());
    do {
      cout << s << endl;
    } while (next_permutation(s.begin(), s.end()));
  }

  int maxi = *max_element(a, a + n);
}