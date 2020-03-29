// let options = {
//     widht: 1024,
//     height: 1024,
//     name: "test"
// };
// console.log(options);

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };
// console.log(options);
// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log("Property " + key + ' has value ' + options[key]);

// }

// console.log(Object.keys(options).length);

// let arr = ["first",2,3,"four",5];

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + " (mass: " + mass + ')');
// });
// console.log(arr);

// let mass = [1,3,4,6,7];
// for (let key of mass) {
//     console.log(key);
// }

// let ans = prompt("", ''),
// arr = [];


// arr = ans.split(',');
// console.log(arr);
// let arr = ['dggdh', 'hdgh', 'fghrth', "fgrgrh"];
// i = arr.join(', ');

// console.log(i);

let arr = [12, 9, 1, 3],
i = arr.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}

console.log(arr);




