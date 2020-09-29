const exi = document.getElementById('exi');
const runcql = document.getElementById('runcql');
const runcqlp = document.getElementById('runcqlp');
const arbolStruct = document.getElementById('meterStruct');
const button = document.getElementById('bsave');
var contPestañas = 1;

exi.addEventListener('click', () => {
	alert("El paquete LUP a enviar es: \n " +  "[+LOGOUT] [+USER]" + sessionStorage.getItem("us") + "[-USER] [-LOGOUT]");
	funcionLogin("[+LOGOUT] [+USER]" + sessionStorage.getItem("us") + "[-USER] [-LOGOUT]");
});

runcql.addEventListener('click', () => {
	let entradaEnviar = showCode(); 
	alert("El paquete LUP a enviar es: \n " +  "[+QUERY] [+USER]" + sessionStorage.getItem("us") + "[-USER] [+DATA]"+entradaEnviar+"[-DATA] [-QUERY]");
	var paqueteLup = "[+QUERY] [+USER]" + sessionStorage.getItem("us") + "[-USER] [+DATA]"+entradaEnviar+"[-DATA] [-QUERY]";
	funcionQuery(paqueteLup);
});

button.addEventListener('click', () => {

	var textToWrite = editor.getValue();
	var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
	var fileNameToSaveAs = "archivoGuardado.html";
  
	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	//if (window.webkitURL != null) {
	  // Chrome allows the link to be clicked without actually adding it to the DOM.
	  //downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	//} else {
	  // Firefox requires the link to be added to the DOM before it can be clicked.
	  downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
	  downloadLink.onclick = destroyClickedElement;
	  downloadLink.style.display = "none";
	  document.body.appendChild(downloadLink);
	//}
  
	downloadLink.click();
});

runcqlp.addEventListener('click', () => {
	var txtEditor = editor.getSelection();
	let entradaEnviar;
	if (txtEditor != ""){
		entradaEnviar = txtEditor;
	} else {
		entradaEnviar = editor.getValue();
	}

	alert("El paquete LUP a enviar es: \n " +  "[+QUERY] [+USER]" + sessionStorage.getItem("us") + "[-USER] [+DATA]"+entradaEnviar+"[-DATA] [-QUERY]");
	var paqueteLup = "[+QUERY] [+USER]" + sessionStorage.getItem("us") + "[-USER] [+DATA]"+entradaEnviar+"[-DATA] [-QUERY]";
	funcionQuery(paqueteLup);
});


function execPri (input) {
    return GramaticaLup.parse(input);
}

function funcionQuery(entrada) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		  var uri_dec = decodeURIComponent(this.responseText);
		  //alert("texto uri_dec: " +uri_dec);
		  //var stringSalida = uri_dec.toString().replace(/\"/g, "");
		  var stringSalida = uri_dec.toString(); 
		  stringSalida = stringSalida.substring(1, stringSalida.length-1);
		  alert("Paquete LUP recibido: \n "+ stringSalida);
		  var salida = execPri(stringSalida);	
		  var total = ""
		  var cont = 1;
		  salida.forEach(element => {
			  
			  var codigo = "";
			  //¿Error o mensaje para consola?
			  if (element.column != undefined ){

				codigo += "<tr> <th>" + cont + "</th> <th>" + element.type + "</th> <th>" + element.desc+ "</th> <th>" + element.line + "</th> <th>" + element.column + "</th> </tr>";
                    cont+=1;
				  //var mensaje = "Error de tipo " + element.type +" en linea " + element.line + " columna " + element.column + " Descripcion: " + element.desc;
				//$('#consolaText').append("<p>"+mensaje+"</p>"); 
				total += codigo;

			  } else if (element.menssage != undefined) {
				$('#consolaText').append("<p>"+element.menssage+"</p>");
			  }
			  //es DATA, consulta nueva, pestaña nueva 
			  else {
				  var nombre = "Consulta " + contPestañas;
				  contPestañas = contPestañas +1;
				  addTab(nombre, element.data);
			  }
		  });	
		  total = escribirCadenaErrores(total);
		  saveTextAsFileErrores(total);
	  }
	};
	  /*var uri = "http://localhost:60602/api/lup?entrada="+entrada;
	  var res = encodeURI(uri); 
	  var res2 = res.replace(/\+/g, "%2B").replace(/\&/g, "%26");*/
	  var jeje = "http://localhost:60602/api/lup";
	  xhttp.open("POST", jeje, true);
	  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	  xhttp.send(JSON.stringify({ "key": entrada}));
  }

function funcionLogin(entrada) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		  var uri_dec = decodeURIComponent(this.responseText);
		  //alert("texto uri_dec: " +uri_dec);
		  //var stringSalida = uri_dec.toString().replace(/\"/g, "");
		  var stringSalida = uri_dec.toString(); 
		  stringSalida = stringSalida.substring(1, stringSalida.length-1);
		  alert("Paquete LUP recibido: \n "+ stringSalida);
		  var salida = execPri(stringSalida);	
		  //alert(JSON.stringify(salida)); 
		  if (salida == "success"){
			alert("adios " + sessionStorage.getItem("us"));
			window.location.href = "index.html";
		  } else if (salida == "fail"){
			alert("fallo al desconectarse");
		  }
		  
	  }
	};
	  /*var uri = "http://localhost:60602/api/lup?entrada="+entrada;
	  var res = encodeURI(uri); 
	  var res2 = res.replace(/\+/g, "%2B").replace(/\&/g, "%26");*/
	  
	  var jeje = "http://localhost:60602/api/lup";
	  xhttp.open("POST", jeje, true);
	  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	  xhttp.send(JSON.stringify({ "key": entrada}));
  }

function cargarStruct(){ 
	alert("El paquete LUP a enviar es:\n" +  "[+STRUC] [+USER]" + sessionStorage.getItem("us") + "[-USER] [-STRUC]");
	funcionStruct("[+STRUC] [+USER]" + sessionStorage.getItem("us") + "[-USER] [-STRUC]");
}

function funcionStruct(entrada) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		  var uri_dec = decodeURIComponent(this.responseText);
		  //alert("texto uri_dec: " +uri_dec);
		  //var stringSalida = uri_dec.toString().replace(/\"/g, "");
		  var stringSalida = uri_dec.toString(); 
		  stringSalida = stringSalida.substring(1, stringSalida.length-1);
		  alert("Paquete LUP recibido: \n "+ stringSalida);
		  var salida = execPri(stringSalida);	
		  //alert("salida "+ JSON.stringify(salida));   
		  let CadenaArbol = "";
		  salida.forEach(listado => {		
				let listaBases = listado.listadb;
				listaBases.forEach(Base_Datos => 
				{
						CadenaArbol += "<li>" + Base_Datos.name + "\n <ul>";
						CadenaArbol += "<li> Tablas <ul>";						
						if (Base_Datos.tables != undefined)
						{
							Base_Datos.tables.forEach(Tabla => {
								if (Tabla != null)
								{
									let columnas = Tabla.columns;
									CadenaArbol += "<li>" + Tabla.name + "\n <ul>";
									if (columnas != undefined){
										columnas.forEach(col => {
											CadenaArbol += "<li>" + col + "\n </il>";
										});
										CadenaArbol += "</ul>";
									}
								}
							});
						}	
						CadenaArbol += "</ul> \n </li>"; //cierre de la tabla

						CadenaArbol += "<li> User Types <ul>";						
						if (Base_Datos.types != undefined)
						{
							Base_Datos.types.forEach(ust => {
								if (ust != null)
								{
									let columnas = ust.attributes;
									CadenaArbol += "<li>" + ust.name + "\n <ul>";
									if (columnas != undefined){
										columnas.forEach(col => {
											CadenaArbol += "<li>" + col + "\n </il>";
										});
										CadenaArbol += "</ul>";
									}
								}
							});
						}	
						CadenaArbol += "</ul> \n </li>"; //cierre de types

						CadenaArbol += "<li> Procedures <ul>";						
						if (Base_Datos.procedures != undefined)
						{
							Base_Datos.procedures.forEach(ust => {
								if (ust != null)
								{
									CadenaArbol += "<li>" + ust + "\n </il>";
								}
							});
						}	
						CadenaArbol += "</ul> \n </li>"; //cierre de procedures


						CadenaArbol += "</ul> \n </li>"; //cierra de la base de datos
				});
		  });	
		  //alert("Cadena arbol: \n " + CadenaArbol);	
		  arbolStruct.innerHTML = CadenaArbol;
	  }
	};
	  //var uri = "http://localhost:60602/api/lup?entrada="+entrada;
	  //var res = encodeURI(uri); 
	  //var res2 = res.replace(/\+/g, "%2B").replace(/\&/g, "%26");
	  
	  var jeje = "http://localhost:60602/api/lup";
	  xhttp.open("POST", jeje, true);
	  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	  xhttp.send(JSON.stringify({ "key": entrada}));
  }

  function saveTextAsFileErrores(textToWrite) {
	var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/html' });
	var fileNameToSaveAs = "errores.html";
  
	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	//if (window.webkitURL != null) {
	  // Chrome allows the link to be clicked without actually adding it to the DOM.
	  //downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	//} else {
	  // Firefox requires the link to be added to the DOM before it can be clicked.
	  downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
	  downloadLink.onclick = destroyClickedElement;
	  downloadLink.style.display = "none";
	  document.body.appendChild(downloadLink);
	//}
  
	downloadLink.click();
  }

  function destroyClickedElement(event) {
	// remove the link from the DOM
	document.body.removeChild(event.target);
  }

  function escribirCadenaErrores(ers){
	var codigo = "<html> <body background=\"bigen.jpg\"><center><font color =\"orange\"><h1><b>Errores</b></h1><table border = \"5\" bgcolor = \"white\" bordercolor =\"blue\">";

	codigo += "<tr bgcolor =\"grey\"> <th> Numero </th> <th> Error </th> <th> Descripcion </th> <th> Fila </th> <th> Columna </th> </tr>";
	codigo += ers;
	codigo += "</table></font></center> </body> </html>";
	return codigo;
  }