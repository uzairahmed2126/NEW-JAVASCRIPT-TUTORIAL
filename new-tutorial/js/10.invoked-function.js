let callFunc = function(){
    let i =setTimeout(callFunc,1000)
    // console.log(i)
}

callFunc();
// Immediately invoked function for one time work and access only one time from RAM
(function(){
    let i = setTimeout(callFunc,1000);
    // console.log(i)
})();



let sameVariable = 'same1';
function same(){
    console.log(sameVariable)
}
same();


(function () {
let sameVariable = 'same2';
function same(){
    console.log(sameVariable)
}
same();
})();