import flags from './model/flags.js';

function CarregarFlags(flag) {
    return ` <div class="flag col-2 my-2 text-center">
        <img src="${flag.image}" alt="${flag.name}">
        <p>${flag.name}</p>
      </div> `
}

const Flags_Carregadas = flags.map((flag) => CarregarFlags(flag)).join('')

document.querySelector('.row').innerHTML = Flags_Carregadas