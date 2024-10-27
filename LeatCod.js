var isPalindrome = function(x) {
    if (x < 0) return false;
  const reversed = parseInt(x.toString().split('').reverse().join('')) * Math.sign(x);
  if(reversed==x){
      return true
  }else{
      return false
  }
  
};

const x = 121
console.log(isPalindrome(x))

// Roman numeral values
var romanToInt = function(s) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanValues[s[i]];
    const next = romanValues[s[i + 1]] || 0;

    // If the current value is smaller than the next value, subtract it
    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
};

// Test cases
console.log(romanToInt("IV"));      // Output: 3

//  prifix same spelled return
const st=['heaven','hearoone','heanlore',]
function str(st){
   let sortArr=st.sort((a,b)=>a.length - b.length)
   let prifix=st[0]
   for(let i=1;i< sortArr.length;i++){
       while(sortArr[i].indexOf(prifix) !==0){
           prifix=prifix.slice(0,prifix.length-1)
       }
   }
   return prifix
}
 const result=str(st);
 console.log(result)

 //2705. Compact Object

 var compactObject = function(obj) {
  if(obj===null){
      return obj
  }
  if(typeof obj!== "object"){
      return obj
  }
  if(Array.isArray(obj)){
    return  obj.filter(Boolean).map(compactObject)
  }
  let compact={}
  

};

const obj = [null, 0, false, 1]

const resulte=compactObject (obj)
console.log(resulte)



///////////////

//2722. Join Two Arrays by ID

var join = function(arr1, arr2) {
    
  const result={}
  for(let i=0;i<arr1.length;i++){
      result[arr1[i].id]=arr1[i]
  }
  for (let i=0;i<arr2.length;i++){
    if(result[arr2[i].id]){
        for(const key in arr2[i]){
            result[arr2[i].id[key]=arr2[i][key]]
        }
        }else{
             result[arr2[i].id]=arr2[i]
        
    }
  }
  
  return Object.values(result)
 }; 
 
 const arr1 = [
     {"id": 1, "x": 2, "y": 3},
     {"id": 2, "x": 3, "y": 6}
 ], 
 arr2 = [
     {"id": 2, "x": 10, "y": 20},
     {"id": 3, "x": 0, "y": 0}
 ]
 const resulty =join(arr1,arr2)
 console.log(resulty)

 //58. Length of Last Word
 var lengthOfLastWord = function(s) {
  const result=s.trim().split(' ')
  const lastitem=result.at(-1)
  return lastitem.length
};

const s = "Hello World   "

const res=lengthOfLastWord(s)
console.log(res)

//66. Plus One
function ab(arr){
  for (let i=arr.length-1;1>=0;i--){
      if(arr[i]===9){
          arr[i]=0
      }else{
          arr[i]++
          return arr
      }
  }
   arr.unshift(1)
  return arr
}
const arr=[1,2,9]
const ans=ab(arr)
console.log(ans)