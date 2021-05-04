/*const platino = document.querySelector('#platino');

platino.addEventListener('mouseover', ()=>{
    platino.classList.remove('shadow');
    platino.classList.add('text-white');
    platino.classList.add('pricing-featured');

    platino.addEventListener('onmouseover', ()=>{
        platino.classList.remove('text-white');
        platino.classList.remove('pricing-featured');
        platino.classList.add('shadow');
    })
});*/

const bronceBoton = document.querySelector('#bronceBoton');

bronceBoton.addEventListener('click', ()=>{
    alert(
        'Plan: Bronce | Costo mensual: 10 dolares | Velocidad: 1.5 megas' 
    );
});