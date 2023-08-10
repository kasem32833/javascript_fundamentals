var numbers = [25, 35, 40, 47, 22, 28, 67, 87, 45, 96];

for(i = 0; i < numbers.length; i++ ){
    var number = numbers[i];

    if(number > 50){
        continue;
    }
    console.log(number);
}