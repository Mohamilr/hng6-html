// 
const icon = document.querySelector('#icon');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const title = document.querySelector('#title');
const textArea = document.querySelector('#textarea');
const submitBtn = document.querySelector('#submit');


// 
const nameMsg = document.querySelector('#name-message');
const emailMsg = document.querySelector('#email-message');
const titleMsg = document.querySelector('#title-message');
const textMsg = document.querySelector('#text-message');

nameMsg,emailMsg,titleMsg,textMsg.style.color = 'red';
// 
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // name
    if(name.value.length <= 4){
        nameMsg.style.display = 'block';

        setTimeout(() => {
            nameMsg.style.display = 'none';
        }, 2000)
    }
    
    // email
    if(email.value.length === 0){
        emailMsg.style.display = 'block';

        setTimeout(() => {
            emailMsg.style.display = 'none';
        }, 2000)
    }

    // title
    if(title.value.length < 5){
        titleMsg.style.display = 'block';

        setTimeout(() => {
            titleMsg.style.display = 'none';
        }, 2000)
    }

    // message
    if(textArea.value.length <= 20){
        textMsg.style.display = 'block';

        setTimeout(() => {
            textMsg.style.display = 'none';
        }, 2000)
    }

    else {
        icon.style.display = 'block';

        setTimeout(() => {
            icon.style.display = 'none';
        }, 2000)
    
        name.value = '';
        email.value = '';
        title.value = '';
        textArea.value = '';
    }
})
