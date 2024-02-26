const textTraduction = document.getElementById('inputText');
const textOutputInput = document.getElementById('outputText');
const btnEncription = document.getElementById('btn-encription');
const imgTextContainer = document.getElementById('imgContainer');
const btnDesencription = document.getElementById('btn-desencription');
const textTraductionContainer = document.getElementById('traductionContainer');

window.addEventListener ('DOMContentLoaded', () => {
  if(imgTextContainer.classList.contains('inactive')){
    imgTextContainer.classList.remove('inactive');
    textTraductionContainer.classList.add('inactive');
  }
}) 

btnEncription.addEventListener('click', () => {
  let takeValueTraduction = textTraduction.value;

  /* Changing classes */
  if(takeValueTraduction === ''){
    textTraductionContainer.classList.remove('conteiner__text');
    imgTextContainer.classList.remove('inactive');

    imgTextContainer. classList.add('conteiner__img');
    textTraductionContainer.classList.add('inactive');
  } else{
    if(imgTextContainer.classList.contains('conteiner__img') && textTraductionContainer.classList.contains('inactive')){
      imgTextContainer.classList.add('inactive');
      textTraductionContainer.classList.remove('inactive');
    }
  }

  /* Taking value from input text */ 
  textOutputInput.innerText = takeValueTraduction;
  console.log(takeValueTraduction);

  console.log('Hola Señor');
});

btnDesencription.addEventListener('click', () => {
  let takeValueTraduction = textTraduction.value;

  /* Changing classes */
  if(takeValueTraduction === ''){
    textTraductionContainer.classList.remove('conteiner__text');
    imgTextContainer.classList.remove('inactive');

    imgTextContainer. classList.add('conteiner__img');
    textTraductionContainer.classList.add('inactive');
  } else{
    if(imgTextContainer.classList.contains('conteiner__img') && textTraductionContainer.classList.contains('inactive')){
      imgTextContainer.classList.add('inactive');
      textTraductionContainer.classList.remove('inactive');
    }
  }

  /* Taking value from input text */
  textOutputInput.innerText = takeValueTraduction;
  console.log(takeValueTraduction);

  console.log('Hola Señora');
});