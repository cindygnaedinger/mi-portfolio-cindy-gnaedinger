window.addEventListener("load", () => {

    const form = document.getElementById("form");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const affair = document.getElementById("affair");
    const message = document.getElementById("message");
 
form.addEventListener("submit", (e) => {
e.preventDefault();
validaCampos();
});
const validaCampos = () => {
    const nombreValor = nombre.value.trim();
    const emailValor = email.value.trim();
    const affairValor = affair.value.trim();
    const messageValor = message.value.trim();

if(nombreValor === ""){
    validaFalla(nombre, "El campo nombre no puede estar vacío. Máximo 50 caracteres.");
}else{
    validaOk(nombre);
}
if(!emailValor){
    validaFalla(email, "El campo email no puede estar vacío");
}else if(!validaEmail(emailValor)){
    validaFalla("El email no es válido");
} else {
    validaOk(email);
}
if(affairValor === ""){
    validaFalla(affair, "El campo asunto no puede estar vacío. Máximo 50 caracteres.");
}else{
    validaOk(affair);
}
if(messageValor === ""){
    validaFalla(message, "El campo mensaje no puede estar vacío. Máximo 300 caracteres.");
}else{
    validaOk(message);
}
}
const validaFalla = (input, msje) => {
const formControl = input.parentElement;
const aviso = formControl.querySelector("small");
aviso.innerText = msje;

formControl.className = "formulario__grupo falla";
}
const validaOk = (input, msje) => {
    const formControl = input.parentElement;
formControl.className = "formulario__grupo ok"
}
const validaEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }

})
