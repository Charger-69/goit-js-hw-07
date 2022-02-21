import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryElement = document.querySelector(".gallery");
const createImageMarkup = createGalleryItem(galleryItems);

function createGalleryItem(element) {
  return element
    .map(({ original, preview, description }) => {
      return `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src='${preview}'
          data-source='${original}'
          alt='${description}'
        />
      </a>
    </div>`;
    })
    .join("");
}

galleryElement.insertAdjacentHTML("afterbegin", createImageMarkup);
galleryElement.addEventListener("click", onGallaryClick);

function onGallaryClick(event) {
  event.preventDefault()
  const item = event.target.dataset.source
  const instanse = basicLightbox.create(`
  <img src ="${item}" width="800" height="650">
  `)
  instanse.show()
}