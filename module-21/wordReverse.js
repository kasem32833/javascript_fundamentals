
function wordReverse(str){

    words = str.split(' ');

    const result = [];

    for(let i = words.length - 1; i >= 0; i--){
        let element = words[i];
        result.push(element); 
    }

    const reversed = result.join(' ');

    console.log(reversed);
}







let mystring = 'I am from Banglades';

wordReverse(mystring);