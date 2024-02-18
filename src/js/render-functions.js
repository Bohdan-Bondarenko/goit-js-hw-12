import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryContainer, loadMoreBtn } from '../main.js';

export function appendImages(images) {
  const galleryItem = images
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
              <a class="gallery-link" href="${largeImageURL}">
                <img
                  class="gallery-image"
                  src="${webformatURL}"
                  alt="${tags}"
                />
              </a>
              <div class="image-details">
                <p><b>Likes</b> ${likes}</p>
                <p><b>Views</b> ${views}</p>
                <p><b>Comments</b> ${comments}</p>
                <p><b>Downloads</b> ${downloads}</p>
              </div>
           </li>`;
      }
    )
    .join('');
  galleryContainer.insertAdjacentHTML('beforeend', galleryItem);

  let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
  });
  gallery.refresh();

  loadMoreBtn.style.display = images.length > 0 ? 'block' : 'none';
}