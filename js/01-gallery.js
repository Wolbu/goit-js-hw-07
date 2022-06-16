import {
    galleryItems
} from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
    .map(element => {
        return `<div class="gallery__item">
  <a class="gallery__link" href=${element.original}>
    <img
     class="gallery__image"
      src=${element.preview}
      data-source=${element.original}
      alt=${element.description}
    />
  </a>
</div>`;
    })
    .join('');

gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

gallery.addEventListener('click', onGalleryImageClick);

const instance = basicLightbox.create(
    `
    <img src="" width="800" height="600">
`, {
        onShow: () => {
            window.addEventListener('keydown', onEscButtonClick);
        },
        onClose: () => {
            window.removeEventListener('keydown', onEscButtonClick);
        },
    },
);

function onGalleryImageClick(event) {
    event.preventDefault();
    instance.element().querySelector('img').src = event.target.dataset.source;

    instance.show();
}
const close = document.querySelector('.close');

function onEscButtonClick(event) {
    if (event.key === 'Escape') {
        instance.close();
    }
}