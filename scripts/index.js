document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('.recording-section__form');
    
    let inputFullName = document.getElementById('recording-section__input-fullname');
    let inputEmail = document.getElementById('recording-section__input-email');
    let inputSelectDate = document.getElementById('select-date__form');
    let inputSelectTime = document.getElementById('select-time__form');
    let inputMessage = document.getElementById('recording-section__message-field');
    
    form.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();

        let formElements = [
        {
            element: inputFullName,
            properties: {
            value: inputFullName.value,
            successLabel: `Your fullname ${inputFullName.value} was added`,
            errorLabel: 'Please enter your full name, which must contain at least 3 letters',    
            condition: inputFullName.value.length > 2,
            },
        },
        {
            element: inputEmail,
            properties: {
            value: inputEmail.value,
            successLabel: `Your email ${inputEmail.value} was added`,
            errorLabel: 'Please enter your email',
            condition: !!inputEmail.value,
            },
        },
        {
            element: inputSelectDate,
            properties: {
            value: inputSelectDate.value,
            successLabel: 'The date was selected',
            errorLabel: 'Please select the date',
            condition: !!inputSelectDate.value,
            },
        },
        {
            element: inputSelectTime,
            properties: {
            value: inputSelectTime.value,
            successLabel: 'The time was selected',
            errorLabel: 'Please select the time',
            condition: !!inputSelectTime.value,
            },
        },
        {
            element: inputMessage,
            properties: {
            value: inputMessage.value.split(" "),
            successLabel: 'Your message was added',
            errorLabel:'The "Message" field cannot be empty and must contain a minimum of 3 words',
            condition: inputMessage.value.split(" ").length > 2,
            },
        },
        ];

        const resetClass = (element, input) => {
            let itemClasses = [...element.classList];
            let inputClasses = [...input.classList];
            for (let className of itemClasses) {
                if (className !== 'recording-section__grid-item') {
                    element.classList.remove(className);
                }
            }
            for (let className of inputClasses) {
                if (className !== 'forms') {
                    input.classList.remove(className);
                }
            }
        };
        const handleSuccess = (element, input, label = '') => {
            element.querySelector('.recording-section__form-text').textContent = label;
            element.classList.add('success');
            input.querySelector('.forms');
            input.classList.add('success');
        };
    
        const handleError = (element, input, label = '') => {
            element.querySelector('.recording-section__form-text').textContent = label;
            element.classList.add('error');
            input.querySelector('.forms');
            input.classList.add('error');
        };
       
        const validateElement = (item) => {
            const { element, properties } = item;

            let elementWrapper = element.parentElement;
            resetClass(elementWrapper, element);
             
            if (properties.condition) {
                handleSuccess(elementWrapper, properties.successLabel, element);
            } else {
                handleError(elementWrapper, properties.errorLabel, element);
            }
        };

        formElements.forEach((item) => validateElement(item));
    }
});