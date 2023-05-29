function cargar(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState==4 && this.status == 200){
        document.getElementById("datos").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "datos.php", false); //asincronico 
    xhttp.send();
}
function mensaje(){
    alert("Mensaje enviado");
}
let btnCarga = document.getElementById("cargar");
btnCarga.addEventListener("click", cargar);
btnCarga.addEventListener("click", mensaje);