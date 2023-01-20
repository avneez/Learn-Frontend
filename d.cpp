#include<bits/stdc++.h>
using namespace std;


int main(){
  int x=4;
  if(x>=0){
    x!=x;
    cout<<(x>>1);
    x&=x;
    cout<<(x>>1);
  }
return 0;
}