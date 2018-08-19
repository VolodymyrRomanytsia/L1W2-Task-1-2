const button = document.querySelector('.button');
button.onclick = () => {
	const strnum = document.getElementById('arr').value.split(',');
	let number = [];
	for (let i = 0; i < strnum.length; i++) {
		number.push(parseInt(strnum[i]));	
	}
	const maxNum = Math.max(...number);
	const minNum = Math.min(...number);
	console.log ({min: minNum, max: maxNum});
	let result = '{min: ' + minNum + ', max: ' + maxNum +'}';
	document.getElementById("result").innerHTML = result;
}

