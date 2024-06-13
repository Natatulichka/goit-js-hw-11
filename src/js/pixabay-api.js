// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import imageUrl from '../img/alert-icon.svg';
import 'modern-normalize/modern-normalize.css';
// const refs = {
//   timeInput: document.querySelector('#datetime-picker'),
//   startBtn: document.querySelector('[data-start]'),
//   dayData: document.querySelector('[data-days]'),
//   hoursData: document.querySelector('[data-hours]'),
//   minutesData: document.querySelector('[data-minutes]'),
//   secondsData: document.querySelector('[data-seconds]'),
// };

// let intervalId;
// let userSelectedDate;
// flatpickr(refs.timeInput, {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,

//   onClose(selectedDates) {
//     userSelectedDate = selectedDates[0];
//     const currentDate = new Date();
//     if (userSelectedDate < currentDate) {
//       iziToast.error({
//         message: 'Please choose a date in the future',
//         backgroundColor: '#ef4040',
//         messageColor: '#fff',
//         messageSize: '16',
//         imageWidth: 302,
//         close: true,
//         closeOnEscape: true,
//         closeOnClick: true,
//         progressBar: true,
//         progressBarColor: '#b51b1b',
//         transitionIn: 'flipInX',
//         transitionOut: 'flipOutX',
//         position: 'topRight',
//         iconUrl: imageUrl,
//         iconColor: '#FAFAFB',
//         theme: 'dark',
//       });
//       refs.startBtn.disabled = true;
//       refs.startBtn.classList.remove('active');
//     } else {
//       refs.startBtn.disabled = false;
//       refs.startBtn.classList.add('active');
//     }
//   },
// });

// refs.startBtn.addEventListener('click', function () {
//   intervalId = setInterval(function () {
//     const currentDate = new Date();
//     const timeDiff = userSelectedDate - currentDate;

//     if (timeDiff <= 0) {
//       clearInterval(intervalId);
//       iziToast.success({
//         title: 'Success',
//         message: 'Countdown timer has ended',
//       });
//       refs.startBtn.disabled = false;
//       refs.timeInput.disabled = false;
//     } else {
//       const { days, hours, minutes, seconds } = convertMs(timeDiff);
//       refs.dayData.textContent = addLeadingZero(days);
//       refs.hoursData.textContent = addLeadingZero(hours);
//       refs.minutesData.textContent = addLeadingZero(minutes);
//       refs.secondsData.textContent = addLeadingZero(seconds);
//     }
//   }, 1000);
//   refs.startBtn.disabled = true;
//   refs.timeInput.disabled = true;
// });

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;
//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);
//   return { days, hours, minutes, seconds };
// }
// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }
// =================================
const options = {
  API_KEY: '44351431-da99bbc5aa576d6c36cc46a59',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};
fetch(
  'https://pixabay.com/api/?key=44351431-da99bbc5aa576d6c36cc46a59&q=jelow+flowers'
)
  .then(res => res.json())
  .then(({ hits }) => {
    galleryItems(hits);
  })
  .catch(error => {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: '#ef4040',
      messageColor: '#fff',
      messageSize: '16',
      imageWidth: 302,
      close: true,
      closeOnEscape: true,
      closeOnClick: true,
      progressBar: true,
      progressBarColor: '#b51b1b',
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
      position: 'topRight',
      iconUrl: imageUrl,
      iconColor: '#FAFAFB',
      theme: 'dark',
    });
  });
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Визначити спільного предка групи елементів для відстеження подій.
const gallery = document.querySelector('.gallery');

function galleryItems(hits) {
  const markup = hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
      <a class="gallery-link" href=${largeImageURL} onclick="event.preventDefault()">
        <img
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"width = "360" height = "200"
        />
      </a> <div><p>likes:${likes}</p></div>
     </li>`;
      }
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}

// // Додаємо створену розмітку в DOM

const lightbox = new simpleLightbox('.gallery-item a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
