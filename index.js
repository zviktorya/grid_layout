const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
const userName = document.getElementById('userName');
const nameError = document.getElementById('nameError');
const selectCountry = document.getElementById('selectCountry');
const checkbox = document.getElementById('form_checkbox');
const modalWindow = document.getElementById('modal');

const emailReg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const nameReg =  /[^a-zа-яё-\s]/i;

const validValueColor = '#4488BB';


function validateEmail(value) {
    return emailReg.test(value);
};

function validateUserName(value) {
    return nameReg.test(value);
};

function validateForm (){
    if ((email.value == "") || (userName.value == "") || (selectCountry.selectedIndex == 0) || (checkbox.checked == false)) {
        alert ( "Пожалуйста заполните все поля формы." );
        return false;
    }
    return true;
}

function toggleWindow(isOpen) {
    if (isOpen) {
        modalWindow.style.display = 'block';
    } else {
        modalWindow.style.display = 'none';
    }
}

email.addEventListener('keyup', function updateEmail(event) {
    if (validateEmail(event.target.value)) {
        email.classList.remove('form_input--invalid');
        emailError.classList.add('hidden');
        email.style.borderColor = email.style.color = validValueColor;        
    } else {
        email.classList.add('form_input--invalid');
        emailError.classList.remove('hidden');   
        email.style.borderColor = email.style.color = '';         
    }
});

userName.addEventListener('keyup', function updateUserName(event) {
    if (!validateUserName(event.target.value)) {
        userName.classList.remove('form_input--invalid');
        nameError.classList.add('hidden');
        userName.style.borderColor = userName.style.color = validValueColor;        
    } else {
        userName.classList.add('form_input--invalid');
        nameError.classList.remove('hidden');   
        userName.style.borderColor = userName.style.color = '';         
    }
});