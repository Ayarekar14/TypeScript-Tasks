var str = "welcome to igap technology welcome igap";
console.log(str);
console.log(str.length);
console.log(str.indexOf("igap"));
console.log(str.lastIndexOf("igap"));
console.log(str.search("welcome"));
console.log(str.slice(5, 15));
console.log(str.substring(0, 25));
console.log(str.substr(2, 14));
console.log(str.toUpperCase());
var f = "welcome to kop";
console.log(str.concat(" ", f));
var x = "    sushantsing rajput    ";
console.log(x.trim());
var a = "5";
console.log(a.padStart(7, "8"));
console.log(str.charAt(5));
for (var i = 0; i < str.length; i++) {
    console.log(i + " " + str[i]);
}
console.log(str.charCodeAt(5));
console.log(str.split(" "));
