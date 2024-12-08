let arr = ["mom", "js", "malayalam", "html", "css", "dad"];
let a = [];
let i= 0;

while (i < arr.length) {
    let word = arr[i];
    if (word === word.split('').reverse().join('')) {
        a.push(word);
    }
    i++;
}

console.log(a); // Output: ["mom", "malayalam", "dad"]

//using do while loop
let arr1= ["mom", "js", "malayalam", "html", "css", "dad"];
let b= [];
let j= 0;

do {
    let word = arr1[j];
    if (word === word.split('').reverse().join('')) {
        b.push(word);
    }
    j++;
} while (j < arr1.length);

console.log(b); // Output: ["mom", "malayalam", "dad"]
