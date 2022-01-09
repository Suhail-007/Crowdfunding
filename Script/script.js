let hamburgerMenu = document.
querySelector('[data-hamburger-menu]');

let overlayWindow = document.
querySelector('.overlay');

let thankYouModal = document.
querySelector('[data-thankYou-Modal]');

let radioInputs = document.
querySelectorAll('.modal-items-div .radio-selection-div > input');

let pledgeInputs = document.
querySelectorAll('[data-pledge-input]');
		 
//HAMBURGER MENU
function openHamburgerMenu(x) {
let navLinks = document.
querySelector('[data-nav-links]');
		x.classList.toggle('change');
		navLinks.classList.toggle('acitve');
		navLinks.style.transition = "opacity 100ms ease-in-out, transform 100ms ease-in-out, visibility 100ms ease-in-out";
};

hamburgerMenu.addEventListener('click', function() {
		openHamburgerMenu(this);
});

//SELECTION MODAL POP UP

let backerBtn = document.
querySelector('[data-backer-btn]');

backerBtn.addEventListener('click', () => {
		overlayWindow.style.display = 'block';
}); 

let pledgemodalPopUp = document.
querySelector('.modal-about-this-project');

let continueBtns = document.
querySelectorAll('[data-continue-btn]');

//when user enter his pledge($≠0) and click on continue button Thank you modal will pop up 
continueBtns.forEach(button => {
		button.addEventListener('click', () => {
	for (let i = 0; i < radioInputs.length; i++) {
			if (radioInputs[i].checked && pledgeInputs[i].value == '') alert('Enter Pledge Amount');
			else if (radioInputs[i].checked && pledgeInputs[i].value == 0) {
			alert('Amount can\'t be zero');
			pledgeInputs[i].value = '';	
		} else if (radioInputs[i].checked && pledgeInputs[i].value !== '') {
 		pledgemodalPopUp.style.display = 'none';
		thankYouModal.style.display = 'block';	
		pledgeInputs[i].value = '';	 				 	 
	 }
	 }
	});
});


let modalItems = document.
querySelectorAll('.modal-items-div .modal-items');

//IF RADIO BUTTON IS CHECKED BORDER COLOR WILL GET CHANGE

radioInputs.forEach(radio => {
		radio.addEventListener('click', isRadioChecked);
});

function isRadioChecked () {
		for (let i = 0; i < radioInputs.length; i++) {
				if (radioInputs[i].checked) {
						modalItems[i].style.border = '2px solid mediumaquamarine';
				} else {
						modalItems[i].style.border = '';
				}
		}
};

//THANK YOU POP UP modal
let gotItBtn = document.
querySelector('[data-gotIt-btn]');

gotItBtn.addEventListener('click', () => {
		overlayWindow.style.display = 'none';
		thankYouModal.style.display = 'none';
 //this will reset the pledgemodalPopUp value to default
pledgemodalPopUp.style.display = 'block';
});

//TO CLOSE THE WINDOW
window.onclick = function() {
		if (event.target === document.querySelector('.overlay')) {
		overlayWindow.style.display = 'none';
		}
};
