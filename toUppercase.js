var firstName = "abdul";
var lastName = "syukur";

var myName= [firstName, lastName];
var nama = myName.join(" ");
console.log(nama.toUpperCase());

vvar firstName= "abdul";
var lastName= "syukur";
var nama1 = firstName.concat(" "+lastName);
var nama= nama1.split(" ");
var up = nama[0].charAt(0).toUpperCase() + nama[0].substr(1);
var up2 = nama[1].charAt(0).toUpperCase() + nama[1].substr(1);
console.log(up +" "+ up2);
console.log(nama);