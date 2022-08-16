import { toggleTheme } from './toggleTheme.js';
import './felinesCard.js';

const toggle = document.querySelector('input');
toggle.addEventListener('click', toggleTheme);

const item = document.querySelectorAll('.item');
const animal = prompt('Escolha o animal:');
const newImg = prompt('Insira a nova URL da imagem:');

item.forEach(e => {
    if (e.children[1].textContent == animal) {
        e.children[0].setAttribute('src', newImg);
    };
});