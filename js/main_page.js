class Carousel {

    /**
     * constructor of the Carousel class
     * @param {HTMLElement} element 
     * @param {Object} options 
     * @param {Object} options.slidesToScroll number of slides to scroll
     * @param {Object} options.slidesVisible number of slides to show
     */
    constructor(element, options = {}) {
        this.element = element;
        this.currentSlide = 0;
        //console.log(element);
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1
        }, options);
        this.createNavigation();
    }

    /**
     * method that creates a div element with a className = "className"
     * @param {String} className
     * @returns {HTMLElement} 
     
     */
    createDivWithClass(className) {
        let div = document.createElement('div');
        div.setAttribute('class', className);
        return div;

    }

    /**
     * methode that creates navigation button
     */
    createNavigation() {
        let nextButton = document.createElement('div');
        nextButton.setAttribute('id', "carousel__next");
        nextButton.innerHTML = `<img src= "images/right.svg" 
        style="width:50px; height:50px; background-color:white;border-radius:50px; margin-top:-20px;" alt="carousel__next"></img>`;
        let prevButton = document.createElement('div');
        prevButton.setAttribute('id', "casourel__prev");
        // console.log(this.container);
        this.element.appendChild(nextButton);
        this.element.appendChild(prevButton);
        nextButton.addEventListener('click', this.next.bind(this));
        prevButton.addEventListener('click', this.prev.bind(this));
    }

    next() {
        this.gotoItem(this.currentSlide + this.options.slidesToScroll);
    }

    prev() {
        this.gotoItem(this.currentSlide - this.options.slidesToScroll);

    }

    /**
     * Move the casourel to the index number
     * @param {number} index 
     */
    gotoItem(index) {
        let translateX = index * -100 / (this.element.children.length - 2);
        this.element.style.transform = 'translate3d(' + translateX + '%,0,0)';
        this.currentSlide = index;
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    bestMovieRecorded();
    romanticMovies();
    twoThousandMovies();
    bradMovies();
    console.log("DOM entièrement chargé et analysé");
    new Carousel(document.querySelector("#carousel_romance"), {
        slidesToScroll: 2,
        slidesVisible: 8

    });


});


/**
 * 
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
                let elt = document.getElementById("casourel_best_movies");
                elt.appendChild(new_elt)
                    .innerHTML = `<div id=${name}>
                        <img src= ${movie} alt='casourel'></img></div>`;
            }
        });
}

/**
 * function that loads 10 first best romantic movies
 * @param {HTMLElement} nameElement
 */

function romanticMovies() {
    fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=romance&page_size=10&page=1')
        .then(res => res.json())
        .then(res => res.results)
        .then(function(value) {
            for (let i = 0; i < value.length; i++) {
                let movie = value[i].image_url;
                let name = value[i].id;
                let elt = document.getElementById("carousel_romance");
                let elt_item = document.createElement('div');
                elt_item.setAttribute('class', 'casourel_item');
                elt.appendChild(elt_item);
                let div = document.createElement('div');
                div.setAttribute('id', name);
                div.innerHTML = `<img src= ${movie} alt='casourel'></img>`;
                elt_item.appendChild(div);
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
                elt.appendChild(new_elt).innerHTML = `<div id=${name}>
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
                elt.appendChild(new_elt).innerHTML = `<div id=${name}>
                        <img src= ${movie} alt='cassourrel'></img></div>`;
            }
        });
}