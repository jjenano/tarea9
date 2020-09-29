function addTab(titulo, contenido){
    var tabs = $("#tabs-1").tabs();	
    var ul = tabs.find( "ul" );
    var current_idx = ul.find("li").length + 1;
    //se agrega la cabezera
    $("<li><a href='#fragment-" + current_idx + "'>" + titulo + "</a></li>" ).appendTo( ul );
    //se agrega el contenido
    tabs.append("<center><div id='fragment-" + current_idx + "'>" + contenido + "</div></center>");
    tabs.tabs("refresh");
    //tabs.tabs("select", 1);
}