'use strict';

console.log('funguju');
/*

const vysledek = document.querySelector('.vysledek');

const checkBirthID = () => {
const rodne = document.querySelector('#rodne-id').value;

  if (
    rodne.length === 10 &&
    Number.isInteger(Number(rodne)) &&
    Number(rodne) % 11 === 0
  ) {
    vysledek.textContent = 'Heslo je validní';
   
  } else {
    vysledek.textContent = 'Heslo musí mít přesně 10 čísel';
    
  }
};

const tlacidlo = document.querySelector('.tlacidlo');
tlacidlo.addEventListener('click', checkBirthID);
*/

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const isDigit = (digit) => {
  if (digits.includes(digit)) {
    return true;
  } else {
    return false;
  }
};
const Digit = (props) => {
  return `
  <div class=${props.digit}>${props.char}</div>
  `;
};

const checkBirthID = (event) => {
  event.preventDefault();

  const rodne = document.querySelector('#rodne-id').value;
  const vysledek = document.querySelector('.vysledek');
  if (
    rodne.length === 10 &&
    Number.isInteger(Number(rodne)) &&
    Number(rodne) % 11 === 0
  ) {
    vysledek.textContent = 'Vše ok';
  } else {
    /*
    for (let i = 0; i < rodne.length; i++) {
      if (isDigit(rodne[i]) === false) {
        console.log(rodne[i]);
      } 
    }
    */
    const cifry = Array.from(rodne); // vytvořím si pole cifer
    console.log(cifry);

    const poleNeCifer = cifry.filter((cifra) => {
      //projdu si pole cifer a vytvořím si pole znaků, co cifry nejsou
      return !isDigit(cifra);
    });
    if (poleNeCifer.length === 0) {
      vysledek.textContent = 'Všechno to jsou čísla, ale je jich málo nebo moc';
    } else {
      vysledek.textContent = `Tohle: ${poleNeCifer} nejsou čísla`;
    }
    //console.log(poleNeCifer); //vypíšu si pole cifer co nejsou cifry

    const poleObjektu = cifry.map((cifra) => {
      //projdu si pole cifer a vytvořím si pole objektů s údaji o cifrách
      return { char: cifra, digit: isDigit(cifra) };
    });
    //console.log(poleObjektu);
    const cifryVeFormulari = document.querySelector('.cifry');
    cifryVeFormulari.innerHTML = '';

    for (let j = 0; j < poleObjektu.length; j++) {
      cifryVeFormulari.innerHTML += Digit(poleObjektu[j]);
    }
  }
};

const formular = document.querySelector('#formular');
formular.addEventListener('submit', checkBirthID);
