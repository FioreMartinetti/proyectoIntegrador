// window.addEventListener ("load, function()") permite que la página se cargue antes de que se ejecuta
// la funcion que queremos darle.
window.addEventListener("load", function(){
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
// Listado de géneros
  var url= "https://api.themoviedb.org/3/genre/movie/list?api_key="+ api_key
  fetch(url)
  .then(function(response) {
   return response.json()
  })
  .then(function(respuesta) {
   console.log(respuesta)
   ; //imprimo todo lo que me devuelve el servidor
   console.log(respuesta.genres); //imprimo el array data, que contiene 25 elementos
   var arrayDeGeneros = respuesta.genres;
   var genero
   var id
   var name
   for (var i = 0; i < arrayDeGeneros.length; i++) {
     genero = arrayDeGeneros[i]
     console.log(genero);
     id = genero.id
     console.log(id);
     name = genero.name
     console.log(name);
   }
   document.querySelector("p").innerHTML = name
   document.querySelector("h2").innerHTML = name
  })
  .catch(function(error) {
   console.log("Error: " + error);
  })

//Peliculas populares
fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + api_key + "&language=en-US&page=1")
.then(function(response) {
 return response.json();
 })
.then(function(respuesta) {
  var pelis = respuesta.results;
console.log(respuesta);

for (var i = 0; i < 4; i++) {
  respuesta.results.length
  console.log("respuesta" + pelis)
  var titulo = pelis[i].title
  var url = 'https://image.tmdb.org/t/p/w500/'
  var img = pelis[i].poster_path;
  var id = pelis[i].id
  .catch(function(error) {
    console.log("error" + error)
  })
}
 })
.catch(function(error) {
 console.log("Error: " + error);
})

//Películas mejor puntuadas
fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=" + api_key + "&language=en-US&page=1")
.then(function(response) {
 return response.json()
 })
.then(function(respuesta) {
console.log(respuesta);
var imagen = document.querySelector(".")
var srcImage = "https://image.tmdb.org/t/p/w500"
for (var i = 0; i < 10; i++) {
  imagen[i].setAttribute("src",(srcImage + respuesta.result[i].poster_path))
}
var titulo = document.querySelectorAll(".")
for (var i = 0; i < 10; i++) {
  titulo[i].innerHTML += respuesta.results[i].title
}
 })
.catch(function(error) {
 console.log("Error: " + error);
})

//Películas próximamente
fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=" + api_key + "&language=en-US&page=1")
.then(function(response) {
 return response.json()
 })
.then(function(respuesta) {
console.log(respuesta);

.catch(function(error) {
 console.log("Error: " + error);
})

//Carrousel
var slideIndex = [1,1];
var slideId = ["mySlides1"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}






















})
