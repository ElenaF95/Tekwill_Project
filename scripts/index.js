document.addEventListener('DOMContentLoaded', function () {
    //-----------VIDEO-SECTION----------------------//
    const videoContainer = document.getElementById('video');
    const videoControls = document.querySelector('.video-control');
    const video = document.querySelector('#movie-file');
    
    videoControls.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            videoContainer.classList.add('video-is-playing');
        } else {
            video.pause();
            videoContainer.classList.remove('video-is-playing');
            video.load();
        }
    });

    //-----------RECORDING-SECTION----------------------//
    let form = document.querySelector('.recording-section__form');
    
    let inputFullName = form.querySelector('#recording-section__input-fullname');
    let inputEmail = form.querySelector('#recording-section__input-email');
    let inputSelectDate = form.querySelector('#select-date__form');
    let inputSelectTime = form.querySelector('#select-time__form');
    let inputMessage = form.querySelector('#recording-section__message-field');
    
    form.addEventListener('submit', handleValidate);

    function handleValidate(event) {
        event.preventDefault();

        let formElements = [
        {
            element: inputFullName,
            properties: {
            value: inputFullName.value,
            successLabel: `Your full name ${inputFullName.value} was added`,
            errorLabel: 'Please enter your full name, which must contain at least 3 letters',    
            condition: inputFullName.value.trim().length > 2,
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
            condition: inputMessage.value.trim().split(" ").length > 2,
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
                if (className !== 'recording-section__forms') {
                    input.classList.remove(className);
                }
            }
        };
        const handleSuccess = (element, label = '', input) => {
            element.querySelector('.recording-section__form-text').textContent = label;
            element.classList.add('success');
            input.querySelector('.recording-section__forms');
            input.classList.add('success');
        };

        const handleError = (element, label = '', input) => {
            element.querySelector('.recording-section__form-text').textContent = label;
            element.classList.add('error');
            input.querySelector('.recording-section__forms');
            input.classList.add('error');
        };

        const validateInput = (item) => {
            const { element, properties } = item;

            let elementWrapper = element.parentElement;
            resetClass(elementWrapper, element);

            if (properties.condition) {
                handleSuccess(elementWrapper, properties.successLabel, element);
            } else {
                handleError(elementWrapper, properties.errorLabel, element);
            }
        };
        
        formElements.forEach((item) => validateInput(item));
    }
});