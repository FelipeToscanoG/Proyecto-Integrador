let urlPeliculas = 'https://api.themoviedb.org/3/movie/76341?api_key=79a65e98ba579efaab8bd7a94804c88f';
 fetch(urlPeliculas)
    .then (function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.results);//Para chequear que los datos de la api llegan bien
        let info =data.results //Me quedo con la info que quiero del array
        let populares = spotlight.querySelector('.populares')
        let elementosPopulares = ''; //Se actualiza con los datos del endpoint
        for(let i=0; i<info.length; i++) {
            elementosPopulares+= 

        }
    }
        )
    .catch
