var myButton = document.querySelector('button');
var myHeading = document.querySelector('#rost');

function setUserName() {
	var myHight = prompt('Введите ваш рост');
	localStorage.setItem('name', myHight);
	myHeading.textContent = 'Ваш рост - ' + myHight + ' см!';
}

setUserName();