// get all expandable image elements
const images = document.querySelectorAll('.expandable-image');
const darkOverlay = document.querySelector('.dark-overlay');
const closeIcon = document.querySelector('.close-overlay');

// add click event to images
images.forEach((element) => {
  element.addEventListener('click', expandImage);
})

// add click event for closing image
closeIcon.addEventListener('click', closeImage);

// the code to expand images with better resolution
function expandImage(e) {
  const src = e.target.src;
  darkOverlay.style.display = 'flex'
  darkOverlay.insertAdjacentHTML('afterbegin', `<img src="${src}" id="expanded-img"/>`);
}

// close image after overlay was clicked
function closeImage() {

  let expandedImg = document.getElementById('expanded-img');
  darkOverlay.removeChild(expandedImg);
  darkOverlay.style.display = 'none';
}