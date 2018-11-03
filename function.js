// function declaration
function checkDriveAge(){
	var umur= prompt("masukan umur anda!");
		var age=Number(umur);
		if (umur < 18 ) {
			alert("Sorry umur anda belum mencukupi");
		}else if (umur <= age) {
			alert("umur anda telah mencukupi");
		} else {
			alert("umur anda lebih dari 18");
	}

}
checkDriveAge();

//function expression
var checkDriveAge2 = function() {
	var umur= prompt("masukan umur anda!");
		var age=Number(umur);
		if (age < 18 ) {
			alert("Sorry umur anda belum mencukupi");
		}else if (umur <= age) {
			alert("umur anda telah mencukupi");
		} else {
			alert("umur anda lebih dari 18");
	}

}
checkDriveAge2();