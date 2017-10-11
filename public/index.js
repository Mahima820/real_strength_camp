function changeImage() {
  var imageSrc = document.getElementById('image').getAttribute('src');
  var imageNum = imageSrc.substring(imageSrc.lastIndexOf('/') + 1, imageSrc.lastIndexOf('/') + 2);
  if (imageNum == 8) {
    imageNum == 0
  }
  var newImage = '/media/' + (parseInt(imageNum) + 1) + '.jpg';
  document.getElementById('image').setAttribute('src', newImage);
}

setInterval(changeImage, 1000)
