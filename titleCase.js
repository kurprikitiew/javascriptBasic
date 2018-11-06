var str = "Abdul syukur ganteng banget dah ah";
function titleCase(str) {
str1 = str.toLowerCase().split(" ");
for (var i=0; i < str1.length; i++){
	str1[i]=str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
	}

	return str1.join(' ');
}
console.log(titleCase(str));

var firstName= "abdul";
var lastName= "syukur";
var nama = firstName.concat(" "+lastName);
function titleCase(nama) {
    return nama.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
console.log(titleCase(nama))