/* IDs from input HTML */
const textTraduction = document.getElementById('inputText');
const textOutputInput = document.getElementById('outputText');

/* IDs from button HTML */
const getEncript = document.getElementById('btnEncription');
const getTraductor = document.getElementById('btnTraduction');
const btnEncription = document.getElementById('btn-encription');
const btnDesencription = document.getElementById('btn-desencription');

/* IDs from father container */
const containerAdvice = document.getElementById('sectionAdviceUser');
const containerTraduction = document.getElementById('sectionPlaceTraduction');

/* IDs from others labels */
const imgTextContainer = document.getElementById('imgContainer');
const textTraductionContainer = document.getElementById('traductionContainer');

const changeVocals = [
  ['a', 'e', 'i', 'o', 'u'],
  ['ai', 'enter', 'imes', 'ober', 'ufat']
]

/* Adding event listener to reset classes */
window.addEventListener ('DOMContentLoaded', () => {
  if(getTraductor.classList.contains('unselected') && getEncript.classList.contains('unselected')){
    containerAdvice.classList.remove('inactive');
    containerTraduction.classList.remove('container__text');
  }

  if(getTraductor.classList.contains('select')){
    getTraductor.classList.remove('select');
    getEncript.classList.remove('select');
  }

  if(imgTextContainer.classList.contains('inactive')){
    imgTextContainer.classList.remove('inactive');
    textTraductionContainer.classList.add('inactive');
  }
});

getEncript.addEventListener('click', () => {
  if(getEncript.classList.contains('unselected')){
    getTraductor.classList.remove('select');
    getTraductor.classList.add('unselected');

    getEncript.classList.add('select');
    getEncript.classList.remove('unselected');

    containerAdvice.classList.add('inactive');
    containerTraduction.classList.add('container__text');
    containerAdvice.classList.remove('advice__container');
  }

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
})

getTraductor.addEventListener('click', ()=> {
  if(getTraductor.classList.contains('unselected')){
    getTraductor.classList.add('select');
    getTraductor.classList.remove('unselected');
    
    getEncript.classList.add('unselected');
    getEncript.classList.remove('selected');

    containerAdvice.classList.add('inactive');
    containerTraduction.classList.add('container__text');
    containerAdvice.classList.remove('advice__container');
  }
})