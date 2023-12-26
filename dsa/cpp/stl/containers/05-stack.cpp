#include <iostream>
#include <stack>

using namespace std;

void explainStack() {
  stack<int> st;
  st.push(1);  // {1}
  st.push(2);  // {2, 1}
  st.push(3);  // {3, 2, 1}
  st.push(4);  // {4, 3, 2, 1}

  st.emplace(5);  // {5, 4, 3, 2, 1}

  cout << st.top();  // prints 5 "st[2] is invalid"

  st.pop();  // {4, 3, 2, 1}

  cout << st.size();
  cout << st.empty();

  stack<int> st1, st2;
  st1.swap(st2);
}