const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');
const exi = document.getElementById('exi');

f1.addEventListener('click', () => {	
	window.location.href = "noob.html";
});

f2.addEventListener('click', () => {
	window.location.href = "int.html";
});

f3.addEventListener('click', () => {
	window.location.href = "pro.html";
});

exi.addEventListener('click', () => {
	alert("El paquete LUP a enviar es: \n " +  "[+LOGOUT] [+USER]" + sessionStorage.getItem("us") + "[-USER] [-LOGOUT]");
	funcionLogin("[+LOGOUT] [+USER]" + sessionStorage.getItem("us") + "[-USER] [-LOGOUT]");
	
});

function execPri (input) {
    return GramaticaLup.parse(input);
}

function funcionLogin(entrada) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		  var uri_dec = decodeURIComponent(this.responseText);
		  //alert("texto uri_dec: " +uri_dec);
		  var stringSalida = uri_dec.toString(); 
		  stringSalida = stringSalida.substring(1, stringSalida.length-1);
		  alert("Paquete LUP recibido: \n "+ stringSalida);
		  var salida = execPri(stringSalida);	
		  //alert(JSON.stringify(salida)); 
		  if (salida == "success"){
			alert("adios " + sessionStorage.getItem("us"));
			sessionStorage.setItem("us", undefined);
			window.location.href = "index.html";
		  } else if (salida == "fail"){
			alert("fallo al desconectarse");
		  }
		  
	  }
	};
	/*var uri = "http://localhost:60602/api/lup?entrada="+entrada;
  	var res = encodeURI(uri); 
  	var res2 = res.replace(/\+/g, "%2B");*/
	  var jeje = "http://localhost:60602/api/lup";
	  xhttp.open("POST", jeje, true);
	  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	  xhttp.send(JSON.stringify({ "key": entrada}));
  }