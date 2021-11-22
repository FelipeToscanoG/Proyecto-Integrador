//peliculas populares
let urlPeliculas = 'https://api.themoviedb.org/3/movie/popular?api_key=79a65e98ba579efaab8bd7a94804c88f';
 fetch(urlPeliculas)
    .then (function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.results);//Para chequear que los datos de la api llegan bien
        let populares = document.querySelector('.populares')
        let elementosPopulares = ''; //Se actualiza con los datos del endpoint
        let info = data.results;
        for(let i=0; i<5; i++) {
            elementosPopulares+= `<article class="articulos">
                                        <h3>${info[i].title}</h3>
                                        <a href="./detail-movie.html?id=${info[i].id}">
                                            <img src="https://image.tmdb.org/t/p/w342${info[i].poster_path}" alt="IMAGEN NO DISPONIBLE-Portada">
                                        </a>
                                        <p>${info[i].release_date}</p>
                                </article>`// modifico el article de la seccion con los datos de la api
        };
        populares.innerHTML=elementosPopulares

    })
    .catch(function(error){
        console.log (error);
    })

 //Series Populares
  let urlSeries = 'https://api.themoviedb.org/3/tv/popular?api_key=79a65e98ba579efaab8bd7a94804c88f'
  fetch(urlSeries)
  .then (function(response){
      return response.json()
  })
  .then(function(data){
      console.log(data.results);//Para chequear que los datos de la api llegan bien
      let seriesPopulares = document.querySelector('.seriesPopulares')
      let elementosPopularesSeries = ''; //Se actualiza con los datos del endpoint
      for(let i=0; i<5; i++) {
          elementosPopularesSeries+= `<article class="articulos">
                                      <h3>${data.results[i].name}</h3>
                                      <a href="./detail-serie.html?id=${data.results[i].id}">
                                          <img src="https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt="IMAGEN NO DISPONIBLE-Portada">
                                      </a>
                                      <p>${data.results[i].first_air_date}</p>
                              </article>`
      };
      seriesPopulares.innerHTML=elementosPopularesSeries

  })
  .catch(function(error){
      console.log (error);
  })

  //Peliculas mas vistas
  let urlMasVistas = 'https://api.themoviedb.org/3/movie/top_rated?api_key=79a65e98ba579efaab8bd7a94804c88f'
  fetch(urlMasVistas)
    .then (function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data.results);//Para chequear que los datos de la api llegan bien
      let masVistas = document.querySelector('.masVistas')
      let elementosMasVistas = ''; //Se actualiza con los datos del endpoint
      for(let i=0; i<5; i++) {
          elementosMasVistas+= `<article class="articulos">
                                      <h3>${data.results[i].title}</h3>
                                      <a href="./detail-serie.html?id=${data.results[i].id}">
                                          <img src="https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt="IMAGEN NO DISPONIBLE-Portada">
                                      </a>
                                      <p>${data.results[i].release_date}</p>
                              </article>`
      };
      masVistas.innerHTML=elementosMasVistas

  })
    .catch(function(error){
      console.log (error);
     })
