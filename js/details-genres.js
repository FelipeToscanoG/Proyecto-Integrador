let queryString = location.search;
console.log(queryString)

let qsToObject = new URLSearchParams(queryString);
console.log(qsToObject)

let id = qsToObject.get('id');
console.log(id);

let urlGenero = ``;

let urlPeliculasEnGeneros = `https://api.themoviedb.org/3/discover/movie?api_key=276f9f3d3746e8cf8485bca19d3e5150&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`;

let urlSeriesEnGeneros = `https://api.themoviedb.org/3/discover/tv?api_key=276f9f3d3746e8cf8485bca19d3e5150&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&&with_genres=${id}&with_watch_monetization_types=flatrate`;


fetch(urlGenero)
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        console.log(data)

        let tituloParaGenero = document.querySelector('.tituloGenero');

        tituloParaGenero.innerText = data.name;
    })
    .catch(function (error) {
        console.log(error)
    })


//Peliculas en Generos

fetch(urlPeliculasEnGeneros)

    .then(function (response) {
        return response.json() //saca los datos y los convierte en objetos literales
    })

    .then(function (data) {
        console.log(data); //Para chequear que los datos de la api llegan bien

        let peliculasSeleccionadas = document.querySelector('.detalleGeneroPeliculas')
        let elementosPeliculas = ''; //Se actualiza con los datos del endpoint 
        for (let i = 0; i < 8; i++) {
            elementosPeliculas += `<article class="articulos">
                                    <a href="./detail-movie.html"><img src="https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt="IMAGEN NO DISPONIBLE"></a>
                                    <h3>${data.results[i].title}</h3>
                                    </article>`

        };
        peliculasSeleccionadas.innerHTML = elementosPeliculas

    })
    .catch(function (error) {
        console.log(error);
    })




//Series en Generos

fetch(urlSeriesEnGeneros)

    .then(function (response) {
        return response.json() //saca los datos y los convierte en objetos literales
    })

    .then(function (data) {
        console.log(data); //Para chequear que los datos de la api llegan bien

        //Capturo el DOM

        let seriesSeleccionadas = document.querySelector('.detalleGeneroSeries')
        let elementosSeries = ''; //Se actualiza con los datos del endpoint 
        for (let i = 0; i < 8; i++) {
            elementosSeries += `<article class="articulos">
                                <a href="./detail-serie.html"><img src="https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt="IMAGEN NO DISPONIBLE"></a>
                                <h3>${data.results[i].original_name}</h3>
                                </article>`

        };
        seriesSeleccionadas.innerHTML = elementosSeries

    })
    .catch(function (error) {
        console.log(error);
    })

