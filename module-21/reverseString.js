 function reverseString (string){
    // console.log(string);
    for(let i = string.length-1; i >= 0; i--){
        let element = string[i];
        console.log(element)
    }

 }

 let str = 'I am a good boy'

let reversedText =  reverseString(str);
console.log(reversedText);

