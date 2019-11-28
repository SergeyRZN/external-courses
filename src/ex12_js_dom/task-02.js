"use strict"

document.querySelector('.user_menu').addEventListener("click", hideOrShowProfile);

function hideOrShowProfile() {
	let pointer = document.querySelector('.user_pointer');
	let profileList = document.getElementById('profile');
	
	if (profileList.style.display === 'none') {
		profileList.style.display = 'block';
		pointer.style.transform = 'rotateZ(180deg)';
	} else if (profileList.style.display === 'block') {	
		profileList.style.display = 'none';	
		pointer.style.transform = 'rotateZ(0deg)';
	};
};