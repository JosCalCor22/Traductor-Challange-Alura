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
});

const changeVocals = [
  ['a', 'e', 'i', 'o', 'u'],
  ['ai', 'enter', 'imes', 'ober', 'ufat']
]

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
  /* These replaceAll are from the same variable */
  let valueTraduction = 
  takeValueTraduction.replaceAll(changeVocals[0][0], changeVocals[1][0])
  .replaceAll(changeVocals[0][1], changeVocals[1][1])
  .replaceAll(changeVocals[0][2], changeVocals[1][2])
  .replaceAll(changeVocals[0][3], changeVocals[1][3])
  .replaceAll(changeVocals[0][4], changeVocals[1][4]);  

  textOutputInput.innerText = valueTraduction;
  
  console.log(valueTraduction);
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
  let valueTraduction = 
  takeValueTraduction.replaceAll(changeVocals[1][0], changeVocals[0][0])
  .replaceAll(changeVocals[1][1], changeVocals[0][1])
  .replaceAll(changeVocals[1][2], changeVocals[0][2])
  .replaceAll(changeVocals[1][3], changeVocals[0][3])
  .replaceAll(changeVocals[1][4], changeVocals[0][4]);  

  textOutputInput.innerText = valueTraduction;
  
  console.log(valueTraduction);
  console.log('Hola Señora');
});