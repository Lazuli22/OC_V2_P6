class Carousel {

    /**
     * constructor of the Carousel class
     * @param {HTMLElement} element 
     * @param {Object} options 
     * @param {Object} options.slidesToScroll number of slides to scroll
     * @param {Object} options.slidesVisible number of slides to show
     */
    constructor(element, options = {}) {
        console.log("Hello")
    }
}


window.addEventListener("DOMContentloaded",
    function() {
        console.log("DOM entièrement chargé et analysé");
        new Carousel(document.querySelector("conteneur"), {
            slidesToScroll: 2,
            slidesVisible: 5

        });
    }
);