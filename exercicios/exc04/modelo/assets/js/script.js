function clock(){


function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');

let seconds = 0;
let timer;

function startClock() {
    timer = setInterval(function () {
        seconds++;
        relogio.innerHTML = getTimeFromSeconds(seconds);
    }, 1000)
}

 document.addEventListener('click', function(e){
    const el = e.target;
    
    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        startClock()
    }

    if(el.classList.contains('zerar')){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        relogio.innerHTML = '00:00:00';
        seconds = 0;
    }
    
    if (el.classList.contains('pausar')){
        clearInterval(timer)
        relogio.classList.add('pausado')
    }

})
}
clock()
