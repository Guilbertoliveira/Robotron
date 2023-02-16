const controle = document.querySelectorAll('.controle-ajuste');


function manipulaDados(operacao, controle){
    const peca = controle.querySelector(".controle-contador");

    if(operacao === '-'){
        peca.value = peca.value = parseInt(peca.value) - 1;

    }
    if (operacao === '+')
    {
        peca.value = peca.value = parseInt(peca.value) + 1;
    }

}

controle.forEach((elemento)=>{
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode);
        console.log(evento.target.textContent, evento.target.parentNode);
        
    });
});





