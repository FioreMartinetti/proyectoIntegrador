window.addEventListener("load",  function(){

  var api_key = "73382cd9c327a899caf9d76fe965edc2"

  //Validación campo de busqueda al hacer enter
  document.querySelector(".buscador").onkeypress = function(evento) {

    if (evento.code == "Enter") {
      var busqueda = document.querySelector(".buscador");
      if (busqueda.value.length >= 3) {
        location.href = "resultados.html?buscar=" + busqueda.value
      }
      else {
        alert("El campo de búsqueda debe tener al menos 3 caracteres.")
      }
    }
  }

// API DE LA PELICULAS POPULARES
fetch("https://api.themoviedb.org/3/trending/all/day?api_key=" + api_key)
    .then(function(respuesta) {
     return respuesta.json()
   })
    .then(function(informacion) {
     var peliculas = informacion.results
     console.log(informacion)

     for (var i = 0; i < 18 ; i++) { //informacion.results.length
       console.log('esto es informacion' + peliculas);
       var titulo = peliculas[i].title
       var url = 'https://image.tmdb.org/t/p/w500/'
       var img =  peliculas[i].poster_path;
       var id = peliculas[i].id

      var li;
      li = '<li>'
      li += "<button class='estrellita'> &#9733; </button>"
      li += "<a href='detallePeli.html?idDePeli="+id+"'>"
      li += '<img src=' + url + img + '>'
      li += '<div class="uk-position-center uk-panel divPelis"><h1 class="headersHome">' + titulo + '</h1></div>'
      li += "</a>"
      li += '</li>'

      console.log(li);

      document.querySelector("#listaPopulares").innerHTML += li
     }
    })

 .catch(function(error) {
   console.log("error "+ error)
 })




// TOP RATED MOVIES
fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=" + api_key + "&language=en-US&page=1")
    .then(function(respuesta) {
     return respuesta.json()
   })
    .then(function(informacion) {
     var peliculas = informacion.results
     console.log(informacion)

     for (var i = 0; i < 10 ; i++) { //informacion.results.length
       console.log('esto es informacion' + peliculas);
       var titulo = peliculas[i].title
       var url = 'https://image.tmdb.org/t/p/w500/'
       var img =  peliculas[i].poster_path;
       var id = peliculas[i].id

      var li;
      li = '<li>'
      li += "<button class='estrellita'> &#9733; </button>"
      li += "<a href='../5-Detalle de una pelicula/detallePeli.html?idDePeli="+id+"'>"
      li += '<img src=' + url + img + '>'
      li += ' <div class="uk-position-center uk-panel divPelis"><h1 class="headersHome">' + titulo + '</h1></div>'
      li += '</li>'

      console.log(li);

      document.querySelector("#topRated").innerHTML += li
     }
    })

 .catch(function(error) {
   console.log("error "+ error)
 })


// COMING SOON
 fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=" + api_key + "&language=en-US&page=1")
     .then(function(respuesta) {
      return respuesta.json()
    })
     .then(function(informacion) {
      var peliculas = informacion.results
      console.log(informacion)

      for (var i = 0; i < 10 ; i++) { //informacion.results.length
        console.log('esto es informacion' + peliculas);
        var titulo = peliculas[i].title
        var url = 'https://image.tmdb.org/t/p/w500/'
        var img =  peliculas[i].poster_path;
        var id = peliculas[i].id

       var li;
       li = '<li>'
       li += "<button onclick='agregarFavoritos("+id+")' class='estrellita'> &#9733; </button>"
       li += "<a href='../5-Detalle de una pelicula/detallePeli.html?idDePeli="+id+"'>"
       li += '<img src=' + url + img + '>'
       li += '<div class="uk-position-center uk-panel divPelis"><h1 class= "headersHome">' + titulo + '</h1></div>'
       li += '</li>'

       console.log(li);

       document.querySelector("#comingSoon").innerHTML += li
      }


     })

  .catch(function(error) {
    console.log("error "+ error)
  })
})




// CUANDO INGRESO; DEBO INICIALIZAR EL ARRAY DONDE VOY A GUARDAR LAS PELIS FAVORITAS
var arrayDePelisFavoritas = []


function agregarFavoritos(id) {
  alert("The selected movie has been saved in your favorite movies")
  // PRIMERO, reviso si hay alguna peli FAVORITA (en el array)
  if (arrayDePelisFavoritas.indexOf(id)===-1) {
      // EN ESTE CASO NO ES FAVORITA
      // pusheo el id dentro del array
      arrayDePelisFavoritas.push(id)
      // guardo en session el array, como es un objeto debo transformarlo a STRING
      window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
  } else {
    // ESTA PELI YA ES FAVORITA
    console.log(arrayDePelisFavoritas.indexOf(id));
    // la saco del array
    arrayDePelisFavoritas.splice(arrayDePelisFavoritas.indexOf(id),1)
    console.log(arrayDePelisFavoritas);
    // reemplazo el array que tenia la peli como favorita, por el array que ya no la tiene
    window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
  }

  console.log(id);
  console.log(JSON.parse(window.sessionStorage.getItem("favorita")));
}
