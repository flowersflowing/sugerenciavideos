class Video {
    constructor(videoMusica, videoPelicula, videoSerie) {
        this._videoMusica = videoMusica;
        this._videoPelicula = videoPelicula;
        this._videoSerie = videoSerie;
    }

    get videoMusica() {
        return this._videoMusica;
    }

    set videoMusica(newVideoMusica) {
        this._videoMusica = () => newVideoMusica;
    }

    get videoPelicula() {
        return this._videoPelicula;
    }

    set videoPelicula(newVideoPelicula) {
        this._videoPelicula = () => newVideoPelicula;
    }

    get videoSerie() {
        return this._videoSerie;
    }

    set videoSerie(newVideoSerie) {
        this._videoSerie = () => newVideoSerie;
    }   
}

class Musica extends Video {
    constructor(videoMusica, videoPelicula, videoSerie) {
        super(videoMusica, videoPelicula, videoSerie);
    }

    mostrarMusica() {
        document.getElementById("musica").innerHTML = `<iframe width="560" height="315" src=${this.videoMusica} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
}

class Pelicula extends Video {
    constructor(videoMusica, videoPelicula, videoSerie) {
        super(videoMusica, videoPelicula, videoSerie);
    }

    mostrarPelicula() {
        document.getElementById("pelicula").innerHTML = `<iframe width="560" height="315" src=${this.videoPelicula} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
}

class Serie extends Video {
    constructor(videoMusica, videoPelicula, videoSerie) {
        super(videoMusica, videoPelicula, videoSerie);
    }

    mostrarSerie() {
        document.getElementById("serie").innerHTML = `<iframe width="560" height="315" src=${this.videoSerie} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
}

let musica = "https://www.youtube.com/embed/5qap5aO4i9A";
let pelicula = "https://www.youtube.com/embed/4sYSyuuLk5g";
let serie = "https://www.youtube.com/embed/BGobPQC6tQk";

let videoMusic = new Musica(musica, "", "");
let videoMovie = new Pelicula("", pelicula, "");
let videoSerie = new Serie("", "", serie);

videoMusic.mostrarMusica();
videoMovie.mostrarPelicula();
videoSerie.mostrarSerie();