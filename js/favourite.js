//Para recuperaar los ids del webstorage
let recuperarStorage = localStorage.getItem('peliculas'); 
let favoritos = JSON.parse(recuperarStorage); //el array esta en json entonces lo pasp a cadena de texto

let seccionFavoritos = document.querySelector('.favoritos');
let elementosFavoritos = '';

//si no guardo nada en favoritos
//necesito recorrer el array
for (let i=0; i<favoritos.length; i++){
    //llamo a la api

    //let url = ;
    fetch (url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log (data);
            elementosFavoritos += `<article class="articulos">
                                        <h3>${data.results[i].title}</h3>
                                        <a href="./detail-movie.html">
                                            <img src="https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt="IMAGEN NO DISPONIBLE-Portada">
                                         </a>
                                        <p>${data.results[i].release_date}</p>
                                    </article>`
            favoritos.innerHTML=elementosFavoritos
        })
        .catch (function(error){
            console.log(error);
        })
}
