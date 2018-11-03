/*var list = ["tiger", "cat", "bear", "bird"];

list.shift(); // Menghapus diawal index
list.pop(); // Menghapus di akhir index
list.push(); // Menambah di akhir index
list.concat();

var newList = list.concat(["bee", "deer"]);
console.log(newList);*/

var array = ["Banana", "Appples", "Oranges", "Blueberries"];

array.shift();
console.log(array);

array.sort();
console.log(array);

array.push("kiwi");
console.log(array);

array.pop();
console.log(array);

array.reverse();
console.log(array);

var array2 = ["Banana", 
				["Appples", 
					["Oranges"], "Blueberries"
				]
			 ];
console.log(array2[1][1][0]);
