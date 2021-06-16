window.addEventListener("DOMContentLoaded", async(event) => {
    console.log("DOM entièrement chargé et analysé");
    await filmMieuxNote();
});

async function filmMieuxNote() {
    // fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=10&page=1')
    //     .then(res => res.json())
    //     .then(res => res.results)
    //     .then(function(value) {
    //         console.log(value);

    //         //let urlImg = value.results[0].image_url;
    //         // console.log(urlImg);
    //         // document
    //         //     .getElementById("video_centrale")
    //         //     .innerHTML = `<img src=${urlImg} alt='Exemple'></img>`;

    //     })
    //     .catch(function(err) {
    //         // Une erreur est survenue
    //     });
    const response = await fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=10&page=1')
    const data = await response.json();
    const bestMovies = data.results;
    console.table(bestMovies);


}