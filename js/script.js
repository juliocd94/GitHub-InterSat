botonTweets.addEventListener('click', ()=> {
    let botonTweets = document.querySelector('#botonTweets');
    let tweets = document.querySelector('#tweets');
    let contenedorBoton = document.querySelector('#contenedorBoton');
    let botonMenos = document.createElement('button');

    tweets.classList.remove('tweets');
    botonTweets.classList.add('quitarDiv');
    botonMenos.textContent = 'Mostrar menos';
    botonMenos.classList.add('botonTweets');
    contenedorBoton.appendChild(botonMenos);

    botonMenos.addEventListener('click', ()=>{
        tweets.classList.add('tweets');
        botonMenos.classList.add('quitarDiv');
        botonTweets.classList.remove('quitarDiv');
    })
});

