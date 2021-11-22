let formulario = document.querySelector('form');
let input = document.querySelector('.buscador');
let message = document.querySelector('.mensaje');

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if (input.value == "") {
        message.innerHTML = `Completar con su busqueda`
    } else if (input.value.length < 3) {
        message.innerHTML = `Ingresar un minimo de 3 caracteres`
    } else {
        formulario.submit();
    }
})

input.addEventListener('focus', function () {
    message.innerText = ""; //Borrar el mensaje de error cuando se empiece a escribir
    this.value = ""
})

let qs = location.search;
let qsToObject = new URLSearchParams(qs);
let busqueda = qsToObject.get('buscador')
let url = `https://api.themoviedb.org/3/search/multi?api_key=276f9f3d3746e8cf8485bca19d3e5150&language=es&query=${busqueda}`;

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.results);
        let info = data.results;
        let resultados = document.querySelector(".buscados")
        let elementosResultados = '';
        if (info.length == 0) {
            resultados.innerHTML += `<p class=sinResultados>No hay coincidencias con su busqueda</p>`
        } else {
            for (let i = 0; i < info.length; i++) {
                if (info[i].poster_path == null) {
                    elementosResultados += '';

                } else if (info[i].name == undefined) {
                    elementosResultados += `<article class="articulos">
                                             <h3>${info[i].title}</h3>
                                            <a href="./detail-movie.html?id=${info[i].id}">
                                                <img src="https://image.tmdb.org/t/p/w342${info[i].poster_path}" alt="IMAGEN NO DISPONIBLE-Portada">
                                             </a>
                                             <p>${info[i].release_date}</p>
                                        </article>`

                } else {
                    elementosResultados += `<article class="articulos">
                                                <h3>${info[i].title}</h3>
                                                <a href="./detail-movie.html?id=${info[i].id}">
                                                     <img src="https://image.tmdb.org/t/p/w342${info[i].poster_path}" alt="IMAGEN NO DISPONIBLE-Portada">
                                                 </a>
                                                 <p>${info[i].release_date}</p>
                                        </article>`
                }
                resultados.innerHTML = elementosResultados;
            }
        }


    })
    .catch(function (error) {
        console.log(error);
    })
