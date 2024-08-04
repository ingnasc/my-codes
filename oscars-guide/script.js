const voltarAoTopo = document.querySelector(".botaoVoltarAoTopo")

const voltarAoTopo = () => {
    if (window.scrollY >= 100) {
        botaoVoltarAoTopo.classList.add("show");
    } else {
        botaoVoltarAoTopo.classList.remove("show");
    }
}

window.addEventListener("scroll", function () {
    voltarAoTopo();
})