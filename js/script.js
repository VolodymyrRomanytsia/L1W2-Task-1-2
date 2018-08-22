const start = () => {
	const number = [];
	const strnum = document.getElementById('arr').value.split(',');
	for (let i = 0; i < strnum.length; i++) {
		number.push(parseInt(strnum[i]));
	}
	const maxMin = number => {
		const maxNum = Math.max(...number);
		const minNum = Math.min(...number);
		return {
			min: minNum, 
			max: maxNum
		};	
	}
	const {min, max} = maxMin(number);
	const result = `{min: ${min}, max: ${max}}`;
	document.getElementById("result").innerText = result;
}

const button = document.querySelector('.button');
button.addEventListener('click', start); 

