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

        const fullname = inputFullname.value;
        if (fullname === '' || fullname.length <= 2) {
            textFullname.textContent = 'The "Full Name" field cannot be empty and must contain a minimum of 3 letters';
            textFullname.style.color = '#B71C1C';
            inputFullname.style.borderColor = '#B71C1C';
        } else {
            textFullname.textContent = `Your fullname ${fullname} was added`;
            textFullname.style.color = '#004D40';
            inputFullname.style.borderColor = '#BDBDBD';
        }

        const email = inputEmail.value;
        if (email === '') {
            textEmail.textContent = 'Please enter your email';
            textEmail.style.color = '#B71C1C';
            inputEmail.style.borderColor = '#B71C1C';
        } else {
            textEmail.textContent = `Your email ${email} was added`;
            textEmail.style.color = '#004D40';
            inputEmail.style.borderColor = '#BDBDBD';
        }

        const selectDay = inputSelectDay.value;
        if (selectDay === "select") {
            textSelectDay.textContent = 'Please select day';
            textSelectDay.style.color = '#B71C1C';
            inputSelectDay.style.borderColor = '#B71C1C';
        } else {
            textSelectDay.textContent = 'The day was selected';
            textSelectDay.style.color = '#004D40';
            inputSelectDay.style.borderColor = '#BDBDBD';
            inputSelectDay.style.textColor = '#BDBDBD'
        }

        const selectTime = inputSelectTime.value;
        if (selectTime === "select") {
            textSelectTime.textContent = 'Please select time';
            textSelectTime.style.color = '#B71C1C';
            inputSelectTime.style.borderColor = '#B71C1C';
        } else {
            textSelectTime.textContent = 'The time was selected';
            textSelectTime.style.color = '#004D40';
            inputSelectTime.style.borderColor = '#BDBDBD';
        }

        const message = inputMessage.value;
        const wordsList = message.split(" ");
        const wordsCount = wordsList.length;
        if (message === '' || wordsCount <= 2) {
            textMessage.textContent = 'The "Message" field cannot be empty and must contain a minimum of 3 words';
            textMessage.style.color = '#B71C1C';
            inputMessage.style.borderColor = '#B71C1C';
        } else {
            textMessage.textContent = 'Your message was added';
            textMessage.style.color = '#004D40';
            inputMessage.style.borderColor = '#BDBDBD';
        }
    }
});