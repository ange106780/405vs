var alto=document.getElementById("alto");
var ancho=document.getElementById("ancho");
var color=document.getElementById("color");
var figura=document.getElementById("figura");
var radius=document.getElementById("radius");
var anchoborde=document.getElementById("anchoborde");
var colorborde=document.getElementById("colorborde");
var tipoborde=document.getElementById("tipoborde");

/* NUEVOS */
var sombra=document.getElementById("sombra");
var ejex=document.getElementById("ejex");
var ejey=document.getElementById("ejey");

/* FUNCION SOMBRA */
function actualizarSombra(){

    figura.style.boxShadow=
    ejex.value+"px "+
    ejey.value+"px "+
    sombra.value+"px rgba(0,0,0,0.6)";

    document.getElementById("vsombra").textContent=sombra.value;
    document.getElementById("vejex").textContent=ejex.value;
    document.getElementById("vejey").textContent=ejey.value;
}

alto.oninput=()=>{
    figura.style.height=alto.value+"px";
    document.getElementById("valto").textContent=alto.value;
}

ancho.oninput=()=>{
    figura.style.width=ancho.value+"px";
    document.getElementById("vancho").textContent=ancho.value;
}

color.onchange=()=>{
    figura.style.background=color.value;
}

radius.oninput=()=>{
    figura.style.borderRadius=radius.value+"%";
    document.getElementById("vradio").textContent=radius.value;
}

anchoborde.oninput=()=>{
    figura.style.borderWidth=anchoborde.value+"px";
    document.getElementById("vanchoborde").textContent=anchoborde.value;
}

colorborde.onchange=()=>{
    figura.style.borderColor=colorborde.value;
}

tipoborde.onchange=()=>{
    figura.style.borderStyle=tipoborde.value;
}

/* SOMBRA */
sombra.oninput=actualizarSombra;

/* EJE X */
ejex.oninput=actualizarSombra;

/* EJE Y */
ejey.oninput=actualizarSombra;