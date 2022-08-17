const form = document.getElementById('form');
const username = document.getElementById('name');
const cardN = document.getElementById('card-number');
const monthV = document.getElementById('monthc');
const date = document.getElementById('datec');
const erroMessage = document.querySelector('.small');

const sucess = document.querySelector('.card_container-success');
const cardF = document.querySelector('.card_container-form');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

    if(monthV.value === '' || date.value === '') {
        erroMessage.innerText = "C'ant be blank";
        document.querySelector('.inp').classList.add('input');
    }else{
        erroMessage.innerText = "";
        document.querySelector('.inp').classList.remove('input');
    }
});

function checkInputs() {
    const usernameValue = username.value; 
    const cardNumberValue = cardN.value;
    const monthValue = monthV.value;

    if(usernameValue === ''){
        setError(username, 'Please enter a valid username');
    }else{
        setSuccess(username);
    }

    if(isNaN(cardNumberValue) || cardNumberValue === ''){
        setError(cardN, 'Wrong format number only');
    }else{
        setSuccess(cardN);
    }

    if(usernameValue !== '' && !isNaN(cardNumberValue) && monthValue !== ''){ 
        sucess.style.display = 'flex';
        cardF.style.display = 'none';
    }
}

function setError(input, message) {
    const formControl = input.parentElement;
    console.log(formControl);

    const small = formControl.querySelector('small');

    input.className = 'input';
    
    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    input.className = '';
}

