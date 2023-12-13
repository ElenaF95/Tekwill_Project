import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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

    //--------------REVIEWS-SECTION-----------------------//
    new Swiper(".swiper", {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            320: {
              slidesPerView: 1
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 30
            }
        },
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
    });

    //--------------TEAMS-SECTION-----------------------//
    const initMySlider = () => {
        const width = 305;
        const slidesPerView = 3;
        let position = 0;
        const slidesList = document.querySelector('.teams-carousel__list');
        const slides = document.querySelectorAll('.teams-carousel__item');
        const nextButton = document.querySelector('.arrow--next');
        const prevButton = document.querySelector('.arrow--prev');
        
        nextButton.addEventListener('click', nextClicked);
        prevButton.addEventListener('click', prevClicked);

        function nextClicked() {
            position -= width * slidesPerView;
        
            position = Math.max(position, -width * (slides.length - slidesPerView));
            console.log('next:', position);
            slidesList.style.marginLeft = position + 'px';
        }
        function prevClicked() {
            position += width * slidesPerView;
            
            position = Math.min(position, 0);
            console.log('prev:',position);
            slidesList.style.marginLeft = position + 'px';
        }
    }
    initMySlider();

    const mediaQuery = window.matchMedia('(max-width: 480px)')
    
    function handleTabletChange(e) {
        if (e.matches) {
            console.log('Media Query Matched!')
            const itemWidth = 210;
            const itemsPerView = 1;
            let initPosition = 0;
            const itemsList = document.querySelector('.teams-carousel__list');
            const items = document.querySelectorAll('.teams-carousel__item');
            const nextBtn = document.querySelector('.arrow--next');
            const prevBtn = document.querySelector('.arrow--prev');
            
            nextBtn.addEventListener('click', nextClicked);
            prevBtn.addEventListener('click', prevClicked);

            function nextClicked() {
                initPosition -= itemWidth * itemsPerView;
            
                initPosition = Math.max(initPosition, -itemWidth * (items.length - itemsPerView));
                console.log('next:', initPosition);
                itemsList.style.marginLeft = initPosition + 'px';
            }
            function prevClicked() {
                initPosition += itemWidth * itemsPerView;
                
                initPosition = Math.min(initPosition, 0);
                console.log('prev:',initPosition);
                itemsList.style.marginLeft = initPosition + 'px';
            }
        }
    }
    handleTabletChange(mediaQuery)

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