window.addEventListener("DOMContentLoaded", (event) => {

    bestMovieRecorded();
    romanticMovies();
    twoThousandMovies();
    bradMovies();

});


/**
 * function that load the 10 first best movies (avec imbd)
 */

function bestMovieRecorded() {
    fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=10&page=1')
        .then(res => res.json())
        .then(res => res.results)
        .then(function(value) {
            let bestMovie = value[0].image_url;
            document
                .getElementById("video_centrale")
                .innerHTML = `<img src= ${bestMovie} alt='video centrale'></img>`;
            for (let i = 0; i < value.length; i++) {
                let movie = value[i].image_url;
                let name = value[i].id;
                //console.log(movie);
                new_elt = document.createElement('div');
                let elt = document.getElementById("conteneur");
                elt.appendChild(new_elt)
                    .innerHTML = `<div id=${name}>
                        <img src= ${movie} alt='casourel'></img></div>`;
            }
        });
}

/**
 * function that loads 10 first best romantic movies
 */

function romanticMovies() {
    fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=romance&page_size=10&page=1')
        .then(res => res.json())
        .then(res => res.results)
        .then(function(value) {
            for (let i = 0; i < value.length; i++) {
                let movie = value[i].image_url;
                let name = value[i].id;
                //console.log(movie);
                new_elt = document.createElement('div');
                let elt = document.getElementById("container_romance");
                elt.appendChild(new_elt)
                    .innerHTML = `<div id=${name}>
                        <img src= ${movie} alt='casourel'></img></div>`;
            }
        });
}

/**
 * function that loads  the 10 first movies of 2000
 */

function twoThousandMovies() {
    fetch('http://localhost:8000/api/v1/titles/?year=2000&sort_by=-imdb_score&page_size=10&page=1')
        .then(res => res.json())
        .then(res => res.results)
        .then(function(value) {
            for (let i = 0; i < value.length; i++) {
                let movie = value[i].image_url;
                let name = value[i].id;
                //console.log(movie);
                new_elt = document.createElement('div');
                let elt = document.getElementById("container_two_thousand");
                elt.appendChild(new_elt)
                    .innerHTML = `<div id=${name}>
                        <img src= ${movie} alt='casourel'></img></div>`;
            }
        });
}

/**
 * function that loads the 10 first  movies with Brad Pitt 
 */

function bradMovies() {
    fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&actor_contains=Brad+Pitt&&page_size=10&page=1')
        .then(res => res.json())
        .then(res => res.results)
        .then(function(value) {
            for (let i = 0; i < value.length; i++) {
                let movie = value[i].image_url;
                let name = value[i].id;
                //console.log(movie);
                new_elt = document.createElement('div');
                let elt = document.getElementById("container_brad");
                elt.appendChild(new_elt)
                    .innerHTML = `<div id=${name}>
                        <img src= ${movie} alt='cassourrel'></img></div>`;
            }
        });
}