// nombre_del_alumno
//JAVIER RAMOS DEL RIO
// Completar JS aqui

function addClient(){
    document.getElementById("container").style.display="none"
    document.getElementById("cliente").style.display="block"
}

function volverAtras(){
    document.getElementById("cliente").style.display="none"
    document.getElementById("container").style.display="block"
}

window.onload = function hide(){
    document.getElementById("cliente").style.display="none"
}