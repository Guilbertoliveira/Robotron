
function subtrairElemento(elemento) {
    return elemento.value = parseInt(elemento.value) - 1;
}

function somarElemento(elemento) {
    return elemento.value = parseInt(elemento.value) + 1;
}

const subtrair = document.getElementById('subtrair');
const somar = document.getElementById('somar');
const braco = document.getElementById('braco');


somar.addEventListener('click', ()=>{
    braco.value = somarElemento(braco);
})

subtrair.addEventListener('click', ()=> {
    braco.value = subtrairElemento(braco);
})
