const country = 'Bangladesh';
const age = 50;
const isIndependent = true;
const friends = ['sabu', 'pabel', 'rasel', 'raju', 'polash']
const student = {
    name: 'Kasem',
    roll : 334,
    department : 'CSE',

}

function add (a, b){
    return a + b;
}


console.log(typeof(country));
console.log(typeof(age));
console.log(typeof(isIndependent));
console.log(typeof(Array.isArray(student)));
console.log(typeof(student));
console.log(typeof(add));


console.log(friends.includes('sabu'));
console.log(friends.indexOf('polash'));

if((friends.indexOf('sabu')) >= 0){
    console.log('Hello sabu');
}