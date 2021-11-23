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
    let url = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=599a1fd3a6e93c77c41f6489c070ec8c`;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let elementosFavoritos = '';
            elementosFavoritos += `<article class="articulos">
                                        <h3>${data.title}</h3>
                                        <a href="./detail-movie.html?id=${data.id}">
                                            <img src="https://image.tmdb.org/t/p/w342${data.poster_path}" alt="IMAGEN NO DISPONIBLE-Portada">
                                         </a>
                                        <p>${data.release_date}</p>
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
    seriesFav.innerHTML = '<h2 class=mensajeFav>No seleccionaste series favoritas</h2>'
}
//necesito recorrer el array
for (let i = 0; i < favoritosSeries.length; i++) {
    //llamo a la api
    let urlS = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=599a1fd3a6e93c77c41f6489c070ec8c`;
    fetch(urlS)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let elementosFavoritosSeries = '';
            elementosFavoritosSeries += `<article class="articulos">
                                        <h3>${data.title}</h3>
                                        <a href="./detail-movie.html?id=${data.id}">
                                            <img src="https://image.tmdb.org/t/p/w342${data.poster_path}" alt="IMAGEN NO DISPONIBLE-Portada">
                                         </a>
                                        <p>${data.release_date}</p>
                                    </article>`
            favoritosSeries.innerHTML = elementosFavoritosSeries
        })
        .catch(function (error) {
            console.log(error);
        })
}
