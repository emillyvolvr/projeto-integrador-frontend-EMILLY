const video = document.querySelector("video");
const suporte = document.querySelector("#suporte-video");

if (video && suporte) {
    const mp4 = video.canPlayType("video/mp4");
    const webm = video.canPlayType("video/webm");

    if (mp4 === "probably") {
        suporte.textContent =
            "O navegador suporta o formato MP4.";
    } else if (webm === "probably") {
        suporte.textContent =
            "O navegador suporta o formato WebM.";
    } else if (mp4 === "maybe" || webm === "maybe") {
        suporte.textContent =
            "O navegador pode suportar um dos formatos de vídeo disponíveis.";
    } else {
        suporte.textContent =
            "O navegador não suporta os formatos de vídeo disponíveis.";
    }
}


const formulario = document.querySelector("form");

if (formulario) {
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Mensagem enviada com sucesso!");

        formulario.reset();
    });
}