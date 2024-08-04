const botaoVoltarAoTopo = document.querySelector('.botaoVoltarAoTopo')

const voltarAoTopoBotao = () => {
    if (window.scrollY >= 100) {
        botaoVoltarAoTopo.classList.add('show');
    } else {
        botaoVoltarAoTopo.classList.remove('show');
    }
}

window.addEventListener('scroll', function () {
    voltarAoTopoBotao();
})

const voltarAoTopo = () => {
    window.scrollTo ({
        top: 0,
        behavior: 'smooth'
    })
}

const mensagem = document.querySelector('.mensagem');

function mensagemAparece () {
    mensagem.style.display = "block"; 
}

function mensagemSome () {
    mensagem.style.display = "none"; 
}