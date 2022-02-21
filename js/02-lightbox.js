import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");

const lighthBoxMarkup = (item) => {
  const { description, original, preview } = item;

  return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
};

const lightBoxGalleryInsert = galleryItems.map(lighthBoxMarkup).join("");

// function createGalleryItem(element) {
//     return element
//         .map(({ preview, original, description }) => {
//             return `
//             <a class="gallery__item" href="${original}">
//             <img class="gallery__image" src="${preview}" alt="${description}" />
//             </a>`
//         })
//         .join('');
// };

const handler = (event) => {
  event.preventDefault();
  let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  return gallery;
};

// const galleryHandler = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay:250});
// galleryHandler.on('show.simplelightbox');

galleryEl.insertAdjacentHTML('beforeend', lightBoxGalleryInsert)
galleryEl.addEventListener('click', handler)