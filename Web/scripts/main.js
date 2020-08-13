var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Ram.jpg') {
    	myImage.setAttribute ('src','images/Rem.jpg');
    } else {
    	myImage.setAttribute ('src','images/Ram.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('#my_name');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = storedName;
}

myButton.onclick = function() {
	setUserName();
}