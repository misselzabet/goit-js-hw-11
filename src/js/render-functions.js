export function renderImages(images) {
    const gallery = document.getElementById('gallery');
    const markup = images.map(image => {
        return `
            <li>
                <a href="${image.largeImageURL}">
                    <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
                    <div class="info">
                        <p>Likes: ${image.likes}</p>
                        <p>Views: ${image.views}</p>
                        <p>Comments: ${image.comments}</p>
                        <p>Downloads: ${image.downloads}</p>
                    </div>
                </a>
            </li>
        `;
    }).join('');
    gallery.innerHTML = markup;
}

export function clearGallery() {
    document.getElementById('gallery').innerHTML = '';
}
