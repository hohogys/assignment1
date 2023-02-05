"use strict";

function changeColor() {
	let color = document.body.style.color;
	if (color === 'red') {
		document.body.style.color = 'purple';
	} else {
		document.body.style.color = 'red';
	}
}