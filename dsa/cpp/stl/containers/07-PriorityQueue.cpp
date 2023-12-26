#include <iostream>
#include <queue>

using namespace std;
void explainPriorityQueue() {
  priority_queue<int> pq;

  // Maximum Heap
  // maximum element will stay at the top
  // if string the largerst lexicographic order remains at the top
  pq.push(5);      // { 5 }
  pq.push(2);      // { 5, 2 }
  pq.push(8);      // { 8, 5, 2 }
  pq.emplace(10);  // { 10, 8, 5, 2 }

  cout << pq.top();  // 10
  pq.pop();          // { 8, 5, 2 }
  cout << pq.top();  // 8

  // size, swap, empty function same as others

  // Minimum heap
  priority_queue<int, vector<int>, greater<int>> pq;
  pq.push(5);      // { 5 }
  pq.push(2);      // { 2, 5 }
  pq.push(8);      // { 2, 5, 8 }
  pq.emplace(10);  // { 2, 5, 8, 10 }

  cout << pq.top();  // 2
}