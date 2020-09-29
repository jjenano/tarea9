const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const loginButton = document.getElementById('loginb');
const textoUsuario = document.getElementById('ussinput');
const textoPass = document.getElementById('passinput');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

loginButton.addEventListener('click', () => {
	var txtuss = textoUsuario.value;
	var txtpass = textoPass.value;
	if ((txtpass == "" || txtuss == "")){
		alert("Hacen falta ingresas datos");
	} else {
		alert("El paquete LUP a enviar es: \n " + "[+LOGIN] [+USER]" + txtuss + "[-USER] [+PASS]" + txtpass + "[-PASS] [-LOGIN]" );
		funcionLogin("[+LOGIN] [+USER]" + txtuss + "[-USER] [+PASS]" + txtpass + "[-PASS] [-LOGIN]");	
	}
	
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
		  //var stringSalida = uri_dec.toString().replace(/\"/g, "");
		  var stringSalida = uri_dec.toString(); 
		  stringSalida = stringSalida.substring(1, stringSalida.length-1);
		  alert("Paquete LUP recibido: \n "+ stringSalida);
		  var salida = execPri(stringSalida);	
		  //alert(JSON.stringify(salida)); 
		  if (salida == "success"){
			sessionStorage.setItem("us", textoUsuario.value);
			sessionStorage.setItem("pass", textoPass.value);
			window.location.href = "nivel.html";
		  } else if (salida == "fail"){
			alert("Usuario/Constraseña incorrectos");
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