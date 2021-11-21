let urlParams = new URLSearchParams(window.location.search);

let id_pelicula = urlParams.get('id');

let link = `https://api.themoviedb.org/3/movie/${ id_pelicula }?api_key=599a1fd3a6e93c77c41f6489c070ec8c`;


//ahora que tengo el link obtener los datos de la pelicula

fetch(link) 
.then(function(response){
    return response.json();
})
.then(function(response){

    let titulo = document.querySelector('#titulo');

    let estreno = document.querySelector('#estreno');
    
    let calificacion = document.querySelector('#calificacion');

    let genero = document.querySelector('#genero');

    let duracion = document.querySelector('#duracion');

    let sinopsis = document.querySelector('#sinopsis');

    let portada = document.querySelector('#portada');

    titulo.innerText = response.original_title;
    
    estreno.innerText = `Fecha de estreno: ${response.release_date}`;

    calificacion.innerText = `Calificación: ${response.vote_average}/10`;
    
    genero.innerText = `Género: ${response.genres[0].name}`;

    genero.href = `./details-genres.html?es=pelicula&genero=${response.genres[0].name}&id=${response.genres[0].id}`;

    duracion.innerText = `Duración: ${response.runtime} minutos`;

    sinopsis.innerText = `Sinopsis: ${response.overview}`;

    portada.src = `https://image.tmdb.org/t/p/w342${response.backdrop_path}`;

    //favoritos
    let peliculas = [];

    let storage = localStorage.getItem('peliculas');

    let encontrada = false;
    
    if(storage != null) {
        peliculas = JSON.parse(storage);
    }

    for(let i = 0; i < peliculas.length; i++){
        if(id_pelicula == peliculas[i].id) {
            encontrada = true;
        }
    }

    if(!encontrada) {
        //habilitar el boton para agregar y permitir guardar la pelicula

        let agregar = document.querySelector('#agregar');
        
        agregar.style.display = 'block';

        agregar.addEventListener('click', function() {
           
            peliculas.push(response);

            localStorage.setItem('peliculas', JSON.stringify(peliculas));

        })
    }
    else{
        //habilitar el boton para quitar de favoritos y poder eliminar del storage

        let quitar = document.querySelector('#quitar');
        
        quitar.style.display = 'block';

        quitar.addEventListener('click', function() {

            for(let i = 0; i < peliculas.length; i++){
                if(id_pelicula == peliculas[i].id) {
                    peliculas.splice(i, 1);

                    localStorage.setItem('peliculas', JSON.stringify(peliculas))

                }
            }
            
        })
    }

})
.catch(function(error){
    console.log(error)
    alert('Ocurrio un error. Recargue la pagina');
})
