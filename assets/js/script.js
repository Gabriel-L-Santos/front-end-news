//* animação 'span' - título*//

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 110 * i);
    });
  }

  const titulo = document.querySelector('span');
  typeWriter(titulo);

//* animação 'p' - descrição *//

function typeWriter2(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 30 * i);
    });
  }

  const subtitulo = document.querySelector('p');
  typeWriter2(subtitulo);