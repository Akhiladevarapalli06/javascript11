//ternary operator example
// var ismale = true;
// var age = 19;
// ismale
//   ? age>=20
//         ? console.log("he is eligible for marriage")
//         : console.log("he is not eligible for marriage")
//   : age >= 18
//   ? console.log("She is eligible for marriage")
//   : console.log("she is not eligible for marriage");

//task for ternary operator

// //problem -1
// var score = 95;
// score >= 90
//   ? console.log("Excellent")
//   : (score <= 89 && score >= 60)
//   ? console.log("good"):console.log("Needs Improvement")
  

//   var score = 75;
// score >= 90
//   ? console.log("Excellent")
//   : (score <= 89 && score >= 60)
//   ? console.log("good"):console.log("Needs Improvement")

//   var score = 50;
// score >= 90
//   ? console.log("Excellent")
//   : (score <= 89 && score >= 60)
//   ? console.log("good"):console.log("Needs Improvement")

//problem-2

// var day="saturday";
//  (day=="saturday" ||day=="sunday")?console.log("Weekend"):console.log("weekday")

//  var day="monday";
//  (day=="saturday" ||day=="sunday")?console.log("Weekend"):console.log("weekday")

//  var day="sunday";
//  (day=="saturday" ||day=="sunday")?console.log("Weekend"):console.log("weekday")

// var a="akhila"
// for(i=a.length-1;i<=5;i=i--){
//     b=b+a[i];
// }
// console.log();

//problem-3
// var inputstring="madam";
// var str="";
// for(i =inputstring.length - 1;i>=0;i--) { 
//     str=str+inputstring[i];
// }
// console.log(str);
// inputstring==str ? console.log("palindrome"):console.log("Not a palindrome")

// var inputstring="hello";
// var str1="";
// for(i =inputstring.length - 1;i>=0;i--) { 
//     str1=str1+inputstring[i];
// }
// console.log(str1);
// inputstring==str1 ? console.log("palindrome"):console.log("Not a palindrome")
// var inputstring="racecar";
// var str2="";
// for(i =inputstring.length - 1;i>=0;i--) { 
//     str2=str2+inputstring[i];
// }
// console.log(str2);
// inputstring==str2 ? console.log("palindrome"):console.log("Not a palindrome")
// var inputstring="world";
// var str3="";
// for(i =inputstring.length - 1;i>=0;i--) { 
//     str3=str3+inputstring[i];
// }
// console.log(str3);
// inputstring==str3 ? console.log("palindrome"):console.log("Not a palindrome")

var str='HELLO'
var str1=""
for(i in str){
    str1=str1+str[i]
    
}
console.log(str1)