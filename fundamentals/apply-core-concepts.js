// const numbers = [10, 20, 30,40];

// function addNumbers (numbers){
    
//     for(i = 0; i < numbers.length; i++){
//         let index = i;
//         // console.log(index);

//         let element = numbers[i];
//         // console.log(index, element);
//     }

// }

// addNumbers(numbers);


function addSerialNumbers (number){
    
    let sum =0;
    for(i = 1; i <= number; i++){
        let index = i;
        // console.log(index);
        sum = sum + index;
    }
    return sum;
}

let result = addSerialNumbers(7);
console.log(result );


