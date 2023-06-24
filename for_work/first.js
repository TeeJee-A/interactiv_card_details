var gChecker;

function usernumber() {
	const numberofcard = document.getElementById('number');
	const num = /^\(?([0-9]{4})\)?[ . ]?([0-9]{4})[ . ]?([0-9]{4})[ . ]?([0-9]{4})$/g;
	
	if (!num.test(numberofcard.value)) {
		numberofcard.style.borderColor = 'red';gChecker = false;}
	else {
		numberofcard.style.borderColor = '';gChecker = true;}
}

function username() {
	const username = document.getElementById('name');
	const name = /^[a-zA-Z][a-zA-Z ]*$/;
	if (!name.test(username.value)) {
		username.style.borderColor = 'red';gChecker = false;}
	else {
		username.style.borderColor = '';gChecker = true;}
}

function usermounth() {
	const mounth = document.getElementById('mounth');
	const remounth = /\b\d{2}\b/;
	if (!remounth.test(mounth.value)) {
		mounth.style.borderColor = 'red';gChecker = false;}
	else {
		mounth.style.borderColor = '';gChecker = true;}
}

function useryear() {
	const year = document.getElementById('year');
	const reyear = /\b\d{2}\b/;
	if (!reyear.test(year.value)) {
		year.style.borderColor = 'red';gChecker = false;}
	else {
		year.style.borderColor = '';gChecker = true;}
}

function usercvc() {
	const cvc = document.getElementById('cvc');
	const recvc = /\b\d{3}\b/;
	if (!recvc.test(cvc.value)) {
		cvc.style.borderColor = 'red';gChecker = false;}
	else {
		cvc.style.borderColor = '';gChecker = true;}
}

var form = document.getElementById('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (gChecker == true) {
  	Toastify({
		text: "success",
		backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
		position: "right",
		duration: 3000
  	}).showToast();
	}
	if (gChecker == false) {
		Toastify({
			text: "unsuccess",
			backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
			position: "right",
			duration: 3000
		}).showToast();
	}
	if (cvc.value.length == 0 || year.value.length == 0 || mounth.value.length == 0 || username.value.length == 0 || numberofcard.value.length == 0) {
		Toastify({
		  text: "The input is empty",
		  backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
		  position: "right",
		  duration: 3000
		}).showToast();
	}
});
