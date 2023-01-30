#include<bits/stdc++.h>
using namespace std;

// int revN(int numm){
//     string s=to_string(numm);
//     int i=0, j=s.size()-1;
//     while(i<=j){
//         swap(s[i],s[j]);
//         i++;
//         j--;
//     }
//     int ans=stoi(s);


//     int ans=0;
//     while(numm>0){
//         int rem =numm%10;
//         ans+=rem*10;
//         numm=numm/2;
//     }
//     return ans;
// }


// int zeroSum(){
//    vector<int> arr={-4,4,3,5,6,2,-2};
//     vector<int> ans;

//     int n=arr.size();
//     for(int i=0;i<n;i++){
//         for(int j=i+1; j<n;j++){
//             if(arr[i]+arr[j]==0){
//                 ans.push_back(arr[i]);
//                 ans.push_back(arr[j]);
//                 break;
//             }
//         }
//     }

//     for(auto &it:ans){
//         cout<<it<<" ";
//     }

// return {};
// }



void countFreq(vector<int> &arr){
    unordered_map<int,int> m;
    for(auto it:arr){
        m[it]++;
    }
    int maxi=INT_MIN,ans=0;
    for(auto &it:m){
        // cout<<it.first<<"->"<<it.second<<endl;
        if(it.second>maxi){
            maxi=it.second;
            ans=it.first;
        }
    }
    // cout<<ans<<" has the highest freq with: "<<maxi<<endl;
    vector<pair<int,int>> sortA;
    for(auto it: m){
        sortA.push_back({it.second,it.first});
    }
    sort(sortA.begin(),sortA.end());
    vector<int> res;
    for(auto &it:sortA){
        res.push_back(it.second);
    }

    for(auto &it:res){
        cout<<it<<" ";
    }

}



int main(){
    // int numm=1234;
    // int ans =revN(numm);
    // cout<<ans<<endl;
    // cout<<numm;

    vector<int> arr={2,2,2,3,4,5,5,4,2,3,1};
    countFreq(arr);

}