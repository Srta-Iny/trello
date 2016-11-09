//crear funcion para añadir lista
var cajaPrincipal = document.getElementById('caja-principal');

function mostrar(){
	var formulario = document.getElementById('caja-uno');
	var span = document.getElementById('mos');
	formulario.classList.toggle('text-hide');
	span.classList.toggle('text-hide');
	var input =  document.getElementById('nueva-lista').focus();

}

function anadirLista(){
// nombre lista
	var textoBox = document.getElementById('nueva-lista').value;
//nodo texto
	var nombreLista = document.createTextNode(textoBox);
//var elementos de las tareas
	var contenedorLista = document.createElement('div');
	var contenedorTitulo = document.createElement('div');
	var titulo = document.createElement('h4');
	var	contenedor = document.createElement('div');
	var spanTarjeta = document.createElement('span');
	var contenedorBoton = document.createElement('div');
	var inputTarjeta = document.createElement('textarea');
	var botonTarjeta = document.createElement('button');
//añadir atributos
	contenedorLista.setAttribute('class', 'well well-sm caja');
	titulo.setAttribute('class', 'titulo');
	contenedor.setAttribute('class', 'click');
	contenedorBoton.setAttribute('class', 'text-hide');
	spanTarjeta.setAttribute('class', 'spanTarjeta');
	inputTarjeta.setAttribute('rows', '2');
	inputTarjeta.setAttribute('class', 'form-control');
	inputTarjeta.setAttribute('placeholder', 'Añadir una tarjeta...')
	botonTarjeta.setAttribute('type', 'submit');
	botonTarjeta.setAttribute("class", "btn btn-default btn-sm enviar");
//toggle
	contenedor.addEventListener("click", function(event){
		ocultar(spanTarjeta, contenedorBoton);
		inputTarjeta.focus();
	});	
//texto boton
	spanTarjeta.innerHTML='Añadir una tarjeta...';
	botonTarjeta.innerHTML='Añadir';
//agregar tarjeta 
	
	botonTarjeta.addEventListener("click", function(event){
		anadirTarjeta(this);
	});
	//comprobar texto
	if(textoBox === ""){
		return false;
	}else{
	//agregando tareas
		titulo.appendChild(nombreLista);
		contenedorTitulo.appendChild(titulo);
		contenedorBoton.appendChild(inputTarjeta);
		contenedorBoton.appendChild(botonTarjeta);
		contenedor.appendChild(spanTarjeta);
		contenedor.appendChild(contenedorBoton);
		contenedorLista.appendChild(contenedorTitulo);
		contenedorLista.appendChild(contenedor);
		cajaPrincipal.appendChild(contenedorLista);
	}
// dejando espacio en blanco
	textoBox = document.getElementById('nueva-lista').value = "";

}
function ocultar(a,b) {
		a.classList.toggle('text-hide');
		b.classList.toggle('text-hide');
}
function anadirTarjeta(boton){
	var contenedor = boton.parentNode;
	var texto = contenedor.getElementsByTagName('textarea');
	var contenedorLista = contenedor.parentNode;

	console.log(texto);
//nodo texto
	var nodoTarjeta = document.createTextNode(texto[0].value);
//var elementos de las tareas
	var contenedorTarjeta = document.createElement('div');
	var tarjeta= document.createElement('textarea');
// añadir atributos
	contenedorTarjeta.setAttribute('class', 'contenedorTarjeta');
	tarjeta.setAttribute('class', 'form-control');
	tarjeta.setAttribute('rows', '3')
	//comprobar texto
	if(texto[0].value === ""){
		return false;
	}else{
	//agregando tareas
		tarjeta.appendChild(nodoTarjeta);
		contenedorTarjeta.appendChild(tarjeta);
		contenedorLista.insertBefore(contenedorTarjeta, contenedorLista.firstChild);
		
	}
// dejando espacio en blanco
	texto[0].value = "";

	
}