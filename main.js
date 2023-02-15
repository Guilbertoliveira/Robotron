
function manipulaDados(operacao, elemento){

    if(operacao === '-'){
        elemento.value = elemento.value = parseInt(elemento.value) - 1;

    }
    if (operacao === '+')
    {
        elemento.value = elemento.value = parseInt(elemento.value) + 1;
    }

}

const subtrair = document.getElementById('subtrair');
const somar = document.getElementById('somar');
const braco = document.getElementById('braco');
const controle = document.querySelectorAll('.controle-ajuste');


controle.forEach((elemento)=>{
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, );
    });
})



somar.addEventListener('click', ()=>{
     manipulaDados('+', braco);
})

subtrair.addEventListener('click', ()=> {
    manipulaDados('-', braco);
})


