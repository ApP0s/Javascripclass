console.log("hello World")

for(var x = 0; x < 5; x++) {
    console.log(x)
}

console.log("this value is  ",x)

x = 20

for(let x = 0; x < 5; x++) {
    console.log(x)
}

console.log("this value is  ",x)


L = [1,2,3,4,5,6,7,8,9,10]

// let sum = 0
// for (let i = 0; i<L.length; i++) {
//     sum += L[i]
// }

// console.log(sum)


// Normal function
function add(acc,curr) {
    return acc+curr
}

sum = L.reduce(add)
console.log("reduce =",sum)

// Arrow
sum = L.reduce((acc,cur) => acc+cur)
console.log("Arrow",sum)

let mul = L.reduce((acc,cur) => acc*cur)
console.log("multi",mul)

Ll = [6,7,4,10,3,8,1,9,5,2]
Ll.sort(function(a,b){
    return a - b;
});
console.log("sort accend is",Ll)

Ll.sort(function(a,b){
    return b - a;
});
console.log("sort decend is ",Ll)


// arrow accend
ar = Ll.sort((a,b) => a - b)
console.log("arrow accend is ",ar)

// arrow decend
ar = Ll.sort((a,b) => b - a)
console.log("arrow decend is",ar)



