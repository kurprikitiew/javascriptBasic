var nama=prompt("Masukan Nama");
var peran=prompt("Masukan Peran");
if (nama==="") {
	alert("nama harus diisi");
}else if(nama===nama && peran==="") {
		alert("Hallo " + nama + " Pilih peranmu untuk memulai game")
}else if (nama==="Nina" && peran==="Kesatria") {
		alert("Selamat datang di dunia Proxitya," +nama);
		alert("Halo" + peran + nama + ",kamu dapat menyerang dengan senjatamu!");
}else if(nama==="Danu" && peran==="Tabib"){
		alert("Selamat datang di dunia Proxitya," +nama);
		alert("Halo" + peran + nama + ",kamu dapat membantu temanmu yang terluka!");
}else if (nama==="Zero" && peran==="Penyihir") {
		alert("Selamat datang di dunia Proxitya," +nama);
		alert("Halo" + peran + nama + ",ciptakan keajaiban yang membantu kemenangan!");
}