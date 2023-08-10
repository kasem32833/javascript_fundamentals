let color = 'blue';


if(color === 'red'){

    console.log('you are my red friend');

}else if(color === 'blue'){
    console.log('you are my blue friend');

}else if(color === 'green'){
    console.log('you are my green friend');


}


function add (num1, num2){
    sum = num1 + num2;
    return sum;
}

let total1 = add(12, 13);
let total2 = add( 25, 35);

let final = total1 + total2;


console.log(final);