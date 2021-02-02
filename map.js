var arr = [1,2,3,4,5,6,7];
//item*2

var newarr = arr.map(function(ele){
    return ele * 2;
})


var newarr = arr.map(ele=>ele * 2)

console.log(newarr);


//reduce()
var x = arr.reduce(function(a,b){
    return a+b;
});
console.log(x);