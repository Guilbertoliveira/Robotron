
function manipulaDados(operacao, elemento){

    if(operacao === 'subtrair'){
        elemento.value = elemento.value = parseInt(elemento.value) - 1;

    }
    if (operacao === 'somar')
    {
        elemento.value = elemento.value = parseInt(elemento.value) + 1;
    }

}

const subtrair = document.getElementById('subtrair');
const somar = document.getElementById('somar');
const braco = document.getElementById('braco');


somar.addEventListener('click', ()=>{
     manipulaDados('somar', braco);
})

subtrair.addEventListener('click', ()=> {
    manipulaDados('subtrair', braco);
})


