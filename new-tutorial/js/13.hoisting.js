// hoisting = lift and pull
'use strict'

hello()
function hello(){
    console.log('This called hoisting')
}
console.log() //can't access const vairiable before initilization
const a = 'hey';
console.log(a)

let hey;

hey = 0 
console.log(hey)

x = 3;
console.log(x)