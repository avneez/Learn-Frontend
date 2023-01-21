#include<bits/stdc++.h>
using namespace std;

vector<int> getResult(int n, vector<int>& arr){

    vector<int> result;
    unordered_set<int> s(arr.begin(),arr.end());
    vector<int> arr2;

    for(auto &it:s){
        arr2.push_back(it);
    }

    sort(arr2.begin(),arr2.end());

    n = arr2.size();
    result.push_back(arr2[n-2]);
    result.push_back(arr2[1]);

    return result;
}

int main(){
vector<int> arr={1,3,6,1,2};
int n=arr.size();

vector<int> result;
result = getResult(n,arr);

for(auto i:result){
    cout<<i<<" ";
}

return 0;
}