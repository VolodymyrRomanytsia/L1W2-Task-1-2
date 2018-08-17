
var button = document.querySelector('.button');
button.onclick = function() {
	var strnum = document.getElementById('arr').value.split(',');
	var number = [];
	for (var i = 0; i < strnum.length; i++) {
		number.push(parseInt(strnum[i]));
	}
	
	var maxMin = function(numbers) {
		var maxNum = Math.max.apply(null, numbers);
		var minNum = Math.min.apply(null, numbers);
		result = '{min: ' + minNum + ', max: ' + maxNum +'}';
	}
	var numbers = number;
	console.log (maxMin(numbers));
	document.getElementById("result").innerHTML = result;
}


