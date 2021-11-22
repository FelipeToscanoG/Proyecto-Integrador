let urlParams = new URLSearchParams(window.location.search);

let id_serie = urlParams.get('id');

let link = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=819b7c86c8607512f0fdebc52441505d&language=en-US`


fetch(link) 
.then(function(response){
    return response.json();
})
.then(function(response){

    console.log(response)

    let titulo = document.querySelector('#titulo');

    let estreno = document.querySelector('#estreno');
    
    let calificacion = document.querySelector('#calificacion');

    let genero = document.querySelector('#genero');

    let sinopsis = document.querySelector('#sinopsis');

    let portada = document.querySelector('#portada');

    titulo.innerText = response.name;
    
    estreno.innerText = `Fecha de estreno: ${response.release_date}`;

    calificacion.innerText = `Calificación: ${response.vote_average}/10`;
    if(response.genres.length>0){
        genero.innerText = `Género: ${response.genres[0].name}`;
        genero.href = `./details-genres.html?es=pelicula&genero=${response.genres[0].name}&id=${response.genres[0].id}`;
    }
    

   sinopsis.innerText = `Sinopsis: ${response.overview}`;

    portada.src = `https://image.tmdb.org/t/p/w342${response.backdrop_path}`;

    //favoritos
    let series = [];

    let storage = localStorage.getItem('series');

    let encontrada = false;
    
    if(storage != null) {
        series = JSON.parse(storage);
    }

    for(let i = 0; i < series.length; i++){
        if(id_serie == series[i].id) {
            encontrada = true;
        }
    }

    if(!encontrada) {
        //habilitar el boton para agregar y permitir guardar la pelicula

        let agregar = document.querySelector('#agregar');
        
        agregar.style.display = 'block';

        agregar.addEventListener('click', function() {
           
            series.push(response);

            localStorage.setItem('series', JSON.stringify(series));

        })
    }
    else{
        //habilitar el boton para quitar de favoritos y poder eliminar del storage

        let quitar = document.querySelector('#quitar');
        
        quitar.style.display = 'block';

        quitar.addEventListener('click', function() {
            for(let i = 0; i < series.length; i++){
                if(id_serie == series[i].id) {
                    series.splice(i, 1);

                    localStorage.setItem('series', JSON.stringify(series))
                }
            }
        })
    }

})
.catch(function(error){
    console.log(error)
    alert('Ocurrio un error. Recargue la pagina');
})