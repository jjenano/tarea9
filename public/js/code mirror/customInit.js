let marcas1 = [];
var editor = CodeMirror.fromTextArea(document.getElementById("code1"), {
    lineNumbers: true,
    mode: "text/x-java",
    gutters: ["CodeMirror-linenumbers", "breakpoints"],
    styleActiveLine: true,
    lineNumbers: true,
    lineWrapping: true,
    autofocus:false
  });
  
  editor.on("gutterClick", function(cm, n) {
    var info = cm.lineInfo(n);
    console.log(info);
    cm.setGutterMarker(n, "breakpoints", info.gutterMarkers ? null : makeMarker());
    let numerolineas = n +1;
    if (typeof marcas1[numerolineas]==='undefined') {
      marcas1[numerolineas] =numerolineas;
      console.log(marcas1[numerolineas] + " agregando");
    }else {
      delete marcas1[numerolineas];
      console.log(marcas1[numerolineas]+" elimina")
    }
  });

  function makeMarker() {
    var marker = document.createElement("div");
    marker.style.color = "#822";
    
    marker.innerHTML = "●";
    return marker;
  }