// 

function canPay(arr, num){

    let totalMoney = 0;

    for( i = 0; i <= arr.length-1; i++){
        let index = i;
        // console.log(index);
        totalMoney += arr[i];

        if(totalMoney >= num){
            return true
        }else{
            return false
        }
    }
    return totalMoney;

}

let takarArray = [ 5, 0]

 let canBuy = canPay(takarArray);
 console.log(canBuy);