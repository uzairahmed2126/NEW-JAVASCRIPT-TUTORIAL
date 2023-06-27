// concat
let a = 'first'
let b = 'second'
console.log(a + ' ' + b)

let ConCat = a.concat(' ', b)
console.log(ConCat)

let str = ' This is JavaScript tutorial. It is a good tutorial ....     . '
let substr = str.substring(0, 5)
// console.log("length of string is: ", str.length);
// let substr = str.split('dolor');
// let substr = str[0];
console.log(substr.length)

// find index
let index = str.indexOf('good');
console.log(index) 

let LASTindex =str.lastIndexOf('l')
console.log(LASTindex)

// trim
let trimstr = str.trimStart();
console.log(trimstr)


// uppercase
let upper = str.toUpperCase();
console.log(upper)

// lower
let lower = str.toLowerCase();
console.log(lower)

// replace
let replace = str.replace('good','best ');
console.log(replace)

// include
let include = str.includes('JavaScript');
console.log(include)