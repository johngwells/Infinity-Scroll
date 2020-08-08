// Unsplash API
const count = 30;
const apiKey = 'Qwq8MQIcjcNXNBxrmOD9Nt0tHBssOB-xQb1zwtppvw0';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Create Elements Links/Photos
function displayPhotos() {
  photosArray.forEach((photo) => {
    // console.log(photo.links.html);
    // <a> to link unsplash
    const item = document.createElement('a');
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target', '_blank');
    // <img> for photo
    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description);
    // Img inside <a>, then inside image container
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photos
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // error
  }
}

// on Load
getPhotos();