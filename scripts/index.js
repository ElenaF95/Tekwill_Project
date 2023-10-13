document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.recording-section__content');
     
    const inputFullname = document.getElementById('recording-section__input-fullname');
    const textFullname = document.getElementById('input-fullname__form-text');
    
    const inputEmail = document.getElementById('recording-section__input-email');
    const textEmail = document.getElementById('input-email__form-text');

    const inputSelectDay = document.getElementById('select-day__form');
    const textSelectDay = document.getElementById('select-day__form-text');

    const inputSelectTime = document.getElementById('select-time__form');
    const textSelectTime = document.getElementById('select-time__form-text');

    const inputMessage = document.getElementById('recording-section__message-field');
    const textMessage = document.getElementById('message-field__form-text');

    form.addEventListener("submit", handleSubmit);
    
    function handleSubmit(event) {
        event.preventDefault();

        const successColor = '#004D40'
        const succesBorderColor = '#BDBDBD'
        const errorColor = '#B71C1C';

        const fullname = inputFullname.value;
        if (fullname === '' || fullname.length <= 2) {
            textFullname.textContent = 'The "Full Name" field cannot be empty and must contain a minimum of 3 letters';
            textFullname.style.color = errorColor;
            inputFullname.style.borderColor = errorColor;
        } else {
            textFullname.textContent = `Your fullname ${fullname} was added`;
            textFullname.style.color = successColor;
            inputFullname.style.borderColor = succesBorderColor;
        }

        const email = inputEmail.value;
        if (email === '') {
            textEmail.textContent = 'Please enter your email';
            textEmail.style.color = errorColor;
            inputEmail.style.borderColor = errorColor;
        } else {
            textEmail.textContent = `Your email ${email} was added`;
            textEmail.style.color = successColor;
            inputEmail.style.borderColor = succesBorderColor;
        }

        const selectedItemColor = '#000000';

        const selectDay = inputSelectDay.value;
        if (selectDay === '') {
            textSelectDay.textContent = 'Please select day';
            textSelectDay.style.color = errorColor;
            inputSelectDay.style.borderColor = errorColor; 
        } else {
            textSelectDay.textContent = 'The day was selected';
            textSelectDay.style.color = successColor;
            inputSelectDay.style.borderColor = succesBorderColor;
            inputSelectDay.style.color = selectedItemColor;
        }

        const selectTime = inputSelectTime.value;
        if (selectTime === '') {
            textSelectTime.textContent = 'Please select time';
            textSelectTime.style.color = errorColor;
            inputSelectTime.style.borderColor = errorColor;
        } else {
            textSelectTime.textContent = 'The time was selected';
            textSelectTime.style.color = successColor;
            inputSelectTime.style.borderColor = succesBorderColor;
            inputSelectTime.style.color = selectedItemColor;
        }

        const message = inputMessage.value;
        const wordsList = message.split(" ");
        const wordsCount = wordsList.length;
        if (message === '' || wordsCount <= 2) {
            textMessage.textContent = 'The "Message" field cannot be empty and must contain a minimum of 3 words';
            textMessage.style.color = errorColor;
            inputMessage.style.borderColor = errorColor;
        } else {
            textMessage.textContent = 'Your message was added';
            textMessage.style.color = successColor;
            inputMessage.style.borderColor = succesBorderColor;
        }
    }
});