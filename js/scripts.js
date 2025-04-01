//Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

const titleElement = document.getElementById('title');

const printTitle = () => {
  titleElement.textContent = 'Quitate de encima';
};
const returnTitle = () => {
  titleElement.textContent = 'Soy un titulo';
};

titleElement.addEventListener('mouseover', printTitle);
titleElement.addEventListener('mouseout', returnTitle);

//Crea un botón con la etiqueta <button> en tu página HTML con el texto "Click me" y añadele un evento de click. Al hacer click tendrá que poner "clicked x times" donde x será el número de veces que hiciste click en él.

const buttonElement = document.getElementById('button');

const printName = () => {
  console.log(buttonElement.textContent);
};

buttonElement.addEventListener('click', printName);

//Crea un p con el texto "esperando entrada de teclado..." al pulsar cualquier tecla deberá poner "has pulsado la tecla tal" y al soltarla el <p> volverá a tener el texto "esperando entrada de teclado...". Como reto extra puedes intentar añadir si se ha usado una combinación de teclas con alt, shift o control

const textElement = document.getElementById('text');

const receiveText = event => {
  console.log(event);
  textElement.textContent = 'Has pulsado la tecla ' + event.key;
};
const text2 = () => {
  textElement.textContent = 'Esperando entrada de teclado';
};

document.addEventListener('keydown', receiveText);
document.addEventListener('keyup', text2);

//Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.

const subtitleElement = document.getElementById('subtitle');
const button2Element = document.getElementById('button2');
const button1Element = document.getElementById('button1');
const words = ['gato', 'burro', 'perro', 'caballo', 'pajaro'];
let counter = 0;

const changeWords = () => {
  subtitleElement.textContent = words[counter];
  counter++;
  if (counter === words.length - 1) {
    counter = 0;
  }
};

const changeWords2 = () => {
  subtitleElement.textContent = words[counter];
  counter--;
  if (counter <= 0) {
    counter = words.length - 1;
  }
};

button2Element.addEventListener('click', changeWords);
button1Element.addEventListener('click', changeWords2);
