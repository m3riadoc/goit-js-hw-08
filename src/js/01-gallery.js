import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const { original, preview, description } = item;

  const li = document.createElement('li');
  li.classList.add('gallery__item');

  const a = document.createElement('a');
  a.classList.add('gallery__link');
  a.href = original;

  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = preview;
  img.alt = description;

  a.appendChild(img);
  li.appendChild(a);
  gallery.appendChild(li);
});


  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionsDataAlt: 'Image description',
  });

console.log(galleryItems);
