

$(document).ready(function () {

$("#carousel #boton-der").on("click", function () {

	var imagenActual = $("#carousel .selected");
	imagenActual.fadeOut(500);
	imagenActual.removeClass("selected");

	//consigo el número de esa imagen
	var idImagenActual = imagenActual.attr("id");
	idImagenActual = parseInt(idImagenActual)+1;
	
	var cantelem = $(".pro-item");
	cantelem = cantelem.length;
	cantelem = parseInt(cantelem);

  
  if(idImagenActual > cantelem)
	{
		idImagenActual = 1;
	}

var idProximaImagen = "#" + idImagenActual;
$(idProximaImagen).fadeIn(500);
$(idProximaImagen).addClass("selected");

});


$("#carousel #boton-izq").on("click", function () {

	var imagenActual = $("#carousel .selected");
	imagenActual.fadeOut(500);
	imagenActual.removeClass("selected");

	//consigo el número de esa imagen
	var idImagenActual = imagenActual.attr("id");
	idImagenActual = parseInt(idImagenActual)-1;

	var cantelem = $(".pro-item");
	cantelem = cantelem.length;
	cantelem = parseInt(cantelem);
	
	if(idImagenActual == 0)
	{
		idImagenActual = cantelem;
	}


var idProximaImagen = "#" + idImagenActual;
$(idProximaImagen).fadeIn(500);
$(idProximaImagen).addClass("selected");

});
});
