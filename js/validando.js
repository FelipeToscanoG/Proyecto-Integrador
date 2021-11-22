    let form = document.querySelector('form');
    let inputField = document.querySelector('.buscador');
    let mensaje = document.querySelector('.mensaje');
    //Capturo los elementos del dom
form.addEventListener('submit',function(evento){
    evento.preventDefault();

    if(inputField.value == ""){
        mensaje.innerText = "El campo es obligatorio"
    }//Chequeo que el campo no este vacio
    else if (inputField.value.length < 3) {
        mensaje.innerText = "Ingresar al menos 3 caracteres"
    }//Chequeo que ingrso mas de 3 caracteres
    else {
        form.submit()
    }
})
//Limpiar el mensaje cuando el usuario ingrese el campo
inputField,addEventListener('focus', function(evento){
    mensaje.innerText = "";
    this.value = "";//Limpiar el valor del campo
}
)