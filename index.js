'use strict'
//funcao que adiciona um som a cada "tecla"
const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}
// 1 cria uma const com a funcao de cria div,2 cria o elemento div, 3 cria uma classe, 4 cria um texto que vida do elemento "texto"
//5 cria um id que vira do elemento "texto"
const criarDiv = (texto) => {
    const div = document.createElement("div");
    div.classList.add("key");
    div.textContent = texto;
    div.id = texto;

    //busca por id no html o id container,e adiciona como filho a const div
    document.getElementById("container").appendChild(div);
}

// cria uma const "exibir" que vai receber a const "sons",e cria uma funcao que
// vai em sons e retorna um "array" com todas as keys,e em seguida pega cada um dos arrays e cria uma div 
const exibir = (sons) => {
    Object.keys(sons).forEach(criarDiv);
}
exibir(sons)

// const tocar som recebe ums "letra"(a qal letra foi clicada na funcao ativar div)
const tocarSom = (letra) => {
// funcao que cria um novo audio busca na pasta sounds ,busca na funcao sons qual o som correspondente a lera e busca qual letra foi tocada 
    const audio = new Audio (`./sounds/${sons[letra]}`);
    audio.play();

}
// pega o elemento pelo id e adiciona a classe que vai ser chamada no css
const adicionaEfeito = (letra) => {
    document.getElementById(letra).classList.add("active");
            
} 

const removerEfeito = (letra) => {
// cria a const div e busca por id     
    const div =document.getElementById(letra);
//remove a classe "active" da div  
    const removeActive = () => {
        div.classList.remove("active");
    }
// espera a transisao acabar para executar a funcao removeActive
    div.addEventListener("transitionend", removeActive);
            
}             
// funcao que busca o evento que o "eventListener" trouxe 
const ativarDiv = (evento) => {
// primeiro verifica se o tipode evento é click,se sim envia o evento target id se nao mando o evento key
    const letra = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();

    // funcas que verifica se a "letra" é falca ou verdadeira (true or false)
    const letraPermitida = sons.hasOwnProperty(letra)
//se a letra(letraPermitida) for true ele executa a funcao tocar som
    if (letraPermitida){
//chama a funcao adicionarEfeito apos tocar a letra
        adicionaEfeito (letra) 
// chama a funcao tocarSom e executa ela com a const letra        
        tocarSom(letra); 

        removerEfeito(letra)
    }
    
}

// busca o elemento no html com o id container e adiciona um evento de click,em seguida chama a funca ativarDiv
document.getElementById("container").addEventListener("click", ativarDiv);

window.addEventListener("keydown",ativarDiv)




















