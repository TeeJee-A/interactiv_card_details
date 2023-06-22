// function confirm() {
//     const numberofcard = document.getElementById('number');
//     // const year = document.getElementById('year').value;
//     // const cvc = document.getElementById('cvc').value;
//     const num = /^\(?([0-9]{4})\)?[ . ]?([0-9]{4})[ . ]?([0-9]{4})[ . ]?([0-9]{4})$/g;
    
//     if (!num.test(numberofcard.value))
//         numberofcard.style.borderColor = 'red';
//     else
//         numberofcard.style.borderColor = '';
// }

// function username() {
//     const username = document.getElementById('name');
//     const name = /^[a-zA-Z][a-zA-Z ]*$/;
//     // /^[a-zA-Z][a-zA-Z\\s]+$/
//     if (!name.test(username.value))
//         username.style.borderColor = 'red';
//     else
//         username.style.borderColor = '';
// }

// function mounth() {
//     const mounth = document.getElementById('mounth');
//     const remounth = /\b\d{2}\b/;
//     if (!remounth.test(mounth.value))
//         mounth.style.borderColor = 'red';
//     else
//         mounth.style.borderColor = '';
// }

// function year() {
//     const year = document.getElementById('year');
//     const reyear = /\b\d{2}\b/;
//     if (!reyear.test(year.value))
//         year.style.borderColor = 'red';
//     else
//         year.style.borderColor = '';
// }

// function cvc() {
//     const cvc = document.getElementById('cvc') || document.getElementById('year');
//     const recvc = /\b\d{3}\b/;
//     if (!recvc.test(cvc.value))
//         cvc.style.borderColor = 'red';
//     else
//         cvc.style.borderColor = '';
// }

const form = document.querySelector('.form')

form.onsubmit = function batata(e) {
    e.preventDefault()
    
    const newForm = new FormData(form)
    
    const formDataObj = {};
    newForm.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);
}