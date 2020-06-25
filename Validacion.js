function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }

  
function validar(){
  var nombre,correo,confirmcorreo,numero,website,expresion,ocupacion, clave,repitclave,telefono,tarea;
  nombre= document.getElementById("nombre").value;
  correo= document.getElementById("correo").value;
  confirmcorreo= document.getElementById("confirmcorreo").value;
  numero= document.getElementById("numero").value;
  website= document.getElementById("website").value;
  ocupacion= document.getElementById("ocupacion").value;
  clave= document.getElementById("clave").value;
  repitclave= document.getElementById("repitclave").value;
  telefono= document.getElementById("telefono").value;
  tarea= document.getElementById("tarea").value;
  var error=document.getElementById('error');

  var mensajesError=[];
  expresion = /\w+@\w+\.+[a-z]/;
  if (nombre==="" || correo ==="" || confirmcorreo=== ""|| numero===""||website===""||ocupacion==="" || clave==="" || repitclave===""||telefono===""|| tarea==="" ) {
   alert("Todos los campos son obligatorios");
   mensajesError.push('Todos los campos son obligatorios');
   
   return false
  }
  
  else if(nombre.length>30 || nombre.length<4){
      alert("Nombre demasiado largo o demiado corto");
      error
      
      return false;
  }
  else if(correo.length>100){
   alert("Correo electronico demasiado largo");
   return false;
   }
   else if(correo != confirmcorreo){
       alert("Los correos deben coincidir");
       return false;
   }
   else if(!expresion.test(correo)){
       alert("El Correo electronico ingresado no es valido")  ;
       return false;
   }

   else if(numero.length>100){
       alert("Numero demasiado largo")  ;
       return false;
   }
   else if(clave.length<7){
       alert("La clave debe de tener al menos 8 caracteres")  ;
       
       return false;
   }
   else if(clave !== repitclave){
       alert("Las claves deben de coincidir")  ;
       return false;
   }
   
   else if(telefono.length>15){
       alert("El numero telefonico es demasiado largo")  ;
       return false;
   }
   else if(isNaN(telefono)){
       alert("El numero telefonico ingresado no valido")  ;
       return false;
   }
  
   error.innerHTML=mensajesError.join(', ');
}

function accion(){  
   console.log('FF');
   var enlace =document.getElementsByClassName('nav-enlace');
   for (var i= 0; i < enlace.length; i++) {
       enlace[i].classList.toggle('desaparece');
       
   }



}
