let arr=[7,1,5,3,7 ,4]

function Buystock(arr){
  let min=arr[0];
  let maxProfit=0;
  for(let i=1;i<arr.length;i++){
     if(arr[i]<min){
      min=arr[i];
    }
    if(arr[i]-min>maxProfit){
      maxProfit=arr[i]-min;
    }
   
  }return maxProfit;
}


let result=Buystock(arr);
console.log(result);
