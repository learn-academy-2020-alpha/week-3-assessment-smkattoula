// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
var i; 
var fib = [];

fib [0] = 0;
fib [1] = 1;
for (i = 2; i <= 10; i++) {
    fib [i] = fib [i - 2] + fib[i-1];
    console.log(fib[i]);
}
// Googled this one but I sort of understand the logic!





// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


const onlyOdd = (array) => {
   let newArr = array.filter(value => typeof value === "number").filter(value => value % 2).sort((a,b) => a - b)
   return newArr
}  
console.log(onlyOdd(fullArr1))
console.log(onlyOdd(fullArr2))





// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

 const extractMiddle = (str) => {

        var position;
        var length;

        if(str.length % 2 == 1) {
            position = str.length / 2;
            length = 1;
        } else {
            position = str.length / 2 - 1;
            length = 2;
        }

        return str.substring(position, position + length)
    }

    console.log(extractMiddle(middleLetters1))
    console.log(extractMiddle(middleLetters2))
    // To be completely honest, I don't quite understand the logic behind this one. I had to google it. I know it works, but I don't know how it works.







// --------------------4) Create a class to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class SphereArea {
    constructor(radi) {
        this.radi=radi
        this.area= Math.pow(radi,2) * Math.PI * 4
    }
}
var sphere1 = new SphereArea(5)
var sphere2 = new SphereArea(10)
var sphere3 = new SphereArea(15)









// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9];
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12];
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = [];
// Expected output: []


const accumulatingSum = (myarray) => {
let new_array = [];
myarray.reduce(function(a,b,i) { 
return new_array[i] = a+b; },0);
return new_array
}

console.log(accumulatingSum(numbersToAdd1))
console.log(accumulatingSum(numbersToAdd2))
console.log(accumulatingSum(numbersToAdd3))

// Had to google this one too :\.. sort of get it, but not quite. 