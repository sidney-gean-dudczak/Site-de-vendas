
let zoomAtual = 100;
let contrasteAtual = 0;

function alterarZoom(valor) {

    zoomAtual += valor * 10;

    if (zoomAtual > 150) {
        zoomAtual = 150;
    }

    if (zoomAtual < 80) {
        zoomAtual = 80;
    }

    document.documentElement.style.fontSize = zoomAtual + "%";
}

function alterarContraste(valor) {

    contrasteAtual += valor;

    if (contrasteAtual > 1) {
        contrasteAtual = 1;
    }

    if (contrasteAtual < -1) {
        contrasteAtual = -1;
    }

    document.body.classList.toggle(
        "contraste-alto",
        contrasteAtual === 1
    );

    if (contrasteAtual === -1) {
        document.body.style.filter = "contrast(70%)";
    } else {
        document.body.style.filter = "";
    }
}

function restaurarAcessibilidade() {

    zoomAtual = 100;
    contrasteAtual = 0;

    document.documentElement.style.fontSize = "100%";
    document.body.style.filter = "";

    document.body.classList.remove("contraste-alto");
}
