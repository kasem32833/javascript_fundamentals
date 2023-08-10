
function isInteger(num){
    
    if(typeof(num)!== 'number'){
        return 'Please provide a number';
    }
    if(num % 1 === 0){
        return true;
    }else{
        return false;
    }



}
// let num = 22.02

//  console.log(isInteger(100));

// Problem: -2

 function isJavascript(file){
    if(typeof file !== 'string'){
        console.log('Please provide a string');
    }else{
        if(file.endsWith('.js')){
            return true;
        }else{
            return false;
        }

    }
    
    
 }
 console.log(isJavascript(hello.js));