let url_peliculas = 'https://api.themoviedb.org/3/genre/movie/list?api_key=599a1fd3a6e93c77c41f6489c070ec8c&language=es'
let url_series = 'https://api.themoviedb.org/3/genre/tv/list?api_key=599a1fd3a6e93c77c41f6489c070ec8c&language=es&page=1%27'

fetch(url_peliculas)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        
        let ul = document.querySelector('#generosPeliculas');

        for(let i = 0; i < response.genres.length; i++) {

            ul.innerHTML += `
                <li>
                    <a href="details-genres.html?id=${response.genres[i].id}">${ response.genres[i].name }</a>
                </li>
            `
        }

    })


fetch(url_series)
.then(function(response){
    return response.json();
})
.then(function(response){
    
    let ul = document.querySelector('#generosSeries');

    for(let i = 0; i < response.genres.length; i++) {

        ul.innerHTML += `
            <li>
                <a href="details-genres.html?id=${response.genres[i].id}">${ response.genres[i].name }</a>
            </li>
        `
    }

})