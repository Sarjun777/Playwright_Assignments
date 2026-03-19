let String= "Hello World"
let splitWords=String.split(" ")

console.log(splitWords);

let splenth=splitWords[splitWords.length-1]

console.log(splenth);

console.log("length of last word is :" ,splenth.length);

//2

let string1="   fly me   to   the moon  "
console.log(string1);

let trimedwords=string1.trim()
console.log(trimedwords);

let splitt=trimedwords.split(" ")
console.log(splitt);

let len=splitt[splitt.length-1]
console.log(len);

let lenn=len.length
console.log(lenn);

//3

function anagram(name1,name2){

let string1=name1.split("").sort().join("")
let string2=name2.split("").sort().join("")
console.log(string1);
console.log(string2);

return string1===string2








}
let a="listen"
let b="silent"

let c="Hello"
let d="world"


console.log(anagram(c,d));
console.log(anagram(a,b));

anagram(c,d)








//string1.trim()





