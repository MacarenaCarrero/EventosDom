const titleElement = document.getElementById('title');

const changeText = event => {
  if (event.target) {
    titleElement.textContent = 'Quita de encima!!!';
    console.dir(event);
  }
};

const changeText2 = event => {
  if (event.target) {
    titleElement.textContent = 'Soy un título';
  }
};

document.addEventListener('mouseover', changeText);
document.addEventListener('mouseout', changeText2);
0;
