const video = document.querySelector("video");
const suporte = document.querySelector("#suporte-video");

if (video && suporte) {

    const mp4 = video.canPlayType(
        'video/mp4; codecs="avc1.42E01E"'
    );

    const webm = video.canPlayType(
        'video/webm; codecs="vp8, vorbis"'
    );

    if (mp4 === "probably") {

        suporte.textContent =
            "O navegador provavelmente reproduzirá o formato MP4.";

    } else if (webm === "probably") {

        suporte.textContent =
            "O navegador provavelmente reproduzirá o formato WebM.";

    } else {

        suporte.textContent =
            "O navegador não confirmou suporte provável aos formatos.";

    }
}


const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Mensagem enviada com sucesso!");

        formulario.reset();

    });

}
