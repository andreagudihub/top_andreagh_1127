/*var mensajeValidar= document.createElement("span");
var contenido= document.createTextNode("ingresa tu nombre");
mensajeValidar.appendChild(contenido);
mensajeValidar.setAttribute("align", "center");
document.getElementById("validarNombre").appendChild(mensajeValidar);*/

(function () {
	
	document.addEventListener("DOMContentLoaded", function() {
		document.getElementById("formulario").addEventListener('submit', validarFormulario); 
	  });


	  function validarFormulario(evento) {
		evento.preventDefault();


		var nombre = document.getElementById("nombre").value;
		var apellido= document.getElementById("apellido").value;
		var marca= document.getElementById("marca").value;
		var usuarioInstagram= document.getElementById("usuarioInstagram").value;
		if(nombre.length == 0 || apellido.length==0 || marca.length==0 || usuarioInstagram.length==0) {
		
			alert("Llena todos los campos");
		  return ;
		}

		this.submit();
	}

}());