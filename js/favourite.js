//Para recuperaar los ids del webstorage
let recuperarStorage = localStorage.getItem('peliculas');
let favoritos = JSON.parse(recuperarStorage); //el array esta en json entonces lo pasp a cadena de texto
let peliculasFav = document.querySelector('.favoritosPeliculas');

let peliculas = [];

//si no guardo nada en favoritos
if (recuperarStorage == null || favoritos.length == 0) {
    peliculasFav.innerHTML = '<h2 class=mensajeFav>No seleccionaste peliculas favoritas</h2>'
    //necesito recorrer el array
}
for (let i = 0; i < favoritos.length; i++) {
    //llamo a la api
    let url = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=79a65e98ba579efaab8bd7a94804c88f `;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let elementosFavoritos = '';
            let info = data.results;
            elementosFavoritos += `<article class="articulos">
                                    <h3>${info[i].title}</h3>
                                    <a href="./detail-movie.html?id=${info[i].id}">
                                        <img src="https://image.tmdb.org/t/p/w342${info[i].poster_path}" alt="IMAGEN NO DISPONIBLE-Portada">
                                     </a>
                                    <p>${info[i].release_date}</p>
                                </article>`
            peliculasFav.innerHTML = elementosFavoritos
        })
        .catch(function (error) {
            console.log(error);
        })
}


//Hago lo msimo con series
let recuperarStorageSeries = localStorage.getItem('series');
let favoritosSeries = JSON.parse(recuperarStorageSeries); //el array esta en json entonces lo pasp a cadena de texto
let seriesFav = document.querySelector('.favoritosSeries');

let series = [];
//si no guardo nada en favoritos
if (recuperarStorageSeries == null || favoritosSeries.length == 0) {
    seriesFav.innerText = 'No seleccionaste series favoritas'
}
//necesito recorrer el array
for (let i = 0; i < favoritosSeries.length; i++) {
    //llamo a la api
    let url = `https://api.themoviedb.org/3/tv/${favoritosSeries[i]}?api_key=79a65e98ba579efaab8bd7a94804c88f `;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let seccionFavoritosSeries = document.querySelector('.favoritosSeries');
            let elementosFavoritosSeries = '';
            let info = data.results;
            elementosFavoritosSeries += `<article class="articulos">
                                        <h3>${info[i].title}</h3>
                                        <a href="./detail-movie.html?id=${info[i].id}">
                                            <img src="https://image.tmdb.org/t/p/w342${info[i].poster_path}" alt="IMAGEN NO DISPONIBLE-Portada">
                                         </a>
                                        <p>${info[i].release_date}</p>
                                    </article>`
            favoritosSeries.innerHTML = elementosFavoritosSeries
        })
        .catch(function (error) {
            console.log(error);
        })
}
