let str: string = "welcome to igap technology welcome igap";
console.log(str);
console.log(str.length);

console.log(str.indexOf("igap"));
console.log(str.lastIndexOf("igap"));
console.log(str.search("welcome"));

console.log(str.slice(5, 15));
console.log(str.substring(0, 25));
console.log(str.substr(2, 14));

console.log(str.toUpperCase());
let f = "welcome to kop";

console.log(str.concat(" ", f));
let x = "    sushantsing rajput    ";
console.log(x.trim());

let a = "5";
console.log(a.padStart(7, "8"));

console.log(str.charAt(5));

for (let i = 0; i < str.length; i++) {
    console.log(i + " " + str[i]);


}

console.log(str.charCodeAt(5));
console.log(str.split(" "));














