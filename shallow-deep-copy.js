// concept -- hoisting
function display(){
    let name = "bilal";
    function show(){
        var age = 25;
        console.log(name);
    }
    console.log(age);
    return show();
}

display();


// shallow vs deep copy
const originalArray = [1, 2, [3, 4], { name: "John" }];

// Method 1: Spread operator
const shallowCopy1 = [...originalArray];

// Method 2: Array.from()
// const shallowCopy1 = Array.from(originalArray);

// Method 3: slice()
// const shallowCopy1 = originalArray.slice();

console.log("Original:", originalArray);
console.log("Shallow copy:", shallowCopy1);


// Modifying primitive values - independent
shallowCopy1[0] = 99;
console.log("After changing primitive:");
console.log("Original:", originalArray);    // [1, 2, [3, 4], { name: "John" }]
console.log("Copy:", shallowCopy1);         // [99, 2, [3, 4], { name: "John" }]

// Modifying nested array - affects both!
shallowCopy1[2][0] = 999;
console.log("After changing nested array:");
console.log("Original:", originalArray);    // [1, 2, [999, 4], { name: "John" }]
console.log("Copy:", shallowCopy1);         // [99, 2, [999, 4], { name: "John" }]

// Modifying nested object - affects both!
shallowCopy1[3].name = "Jane";
console.log("After changing nested object:");
console.log("Original:", originalArray);    // [1, 2, [999, 4], { name: "Jane" }]
console.log("Copy:", shallowCopy1);         // [99, 2, [999, 4], { name: "Jane" }]



console.log("\n=== JSON.stringify LIMITATIONS ===");

const objWithLimitations = {
  date: new Date(),
  func: function() { return "hello"; },
  undefined: undefined,
  symbol: Symbol("test"),
  nan: NaN,
  infinity: Infinity,
  regex: /test/g
};

console.log("Original with special values:", objWithLimitations);
const jsonCopy = JSON.parse(JSON.stringify(objWithLimitations));
console.log("JSON copy (notice what's missing!):", jsonCopy);
