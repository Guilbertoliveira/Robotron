const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]')

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

function atualizaEstatisticas(peca){
    estatisticas.forEach((elemento) => {
        let teste = elemento.dataset.estatistica;     
        elemento.textContent = parseInt(elemento.textContent) + (pecas[peca][teste]);

    });

}

function manipulaDados(operacao, teste, evento){
    const peca = teste.querySelector("[data-contador]");
   
  
    
    if(operacao === '-'){
                peca.value = peca.value = parseInt(peca.value) - 1;
                atualizaEstatisticas(evento);

    }
    if (operacao === '+')   {
            peca.value = peca.value = parseInt(peca.value) + 1;
            atualizaEstatisticas(evento);

    }    
    

}

controle.forEach((elemento)=>{
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode, evento.target.dataset.peca);

        if((evento.target.parentNode.querySelector('[data-contador]').value) <= '1'){
            if(evento.target.dataset.controle === '-') {
               evento.target.classList.add('esconde');

            }}
        
      
       
        
   
       
        
        



    });
});





