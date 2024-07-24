const longitudNúmeros = 3

class intento{
    constructor(num, picas, fijas){
        this.num = num
        this.picas = picas
        this.fijas = fijas
    }
    writeTd(){
        return `<tr><td>${this.num}</td><td>${this.picas}</td><td>${this.fijas}</td></tr>`
    }
}

const validarNum = (num)=>{
    let numStr = num.toString();
    if (numStr.length !== longitudNúmeros){return false}
    let numArray = numStr.split()
    let numeroÚnicos = new Set(numArray)
    if (numeroÚnicos.size === numArray.length){
        return true;
    } else {
        return false
    }
}

const contarFijas = (numUser, numPc)=>{
    let numStr = numUser.toString();
    let numArray = numStr.split()
    let contadorFijas = 0;
    for (let index = 0; index < 3; index++) {
        if (numArray[index] === numPc[index]){
            contadorFijas++;
        };
    };
    return contadorFijas;
}

const contarPicas = (numUser, numPc)=>{
    let numStr = numUser.toString();
    let numArray = numStr.split()
    let contadorPicas = 0;
    for (const num of numArray) {
        let numEnEsaPocision = parseInt(num)
        if (numPc.includes(numEnEsaPocision) && numPc.indexOf(numEnEsaPocision) !== numUser.indexOf(numEnEsaPocision)){
            contadorPicas++;
        };
    };
    return contadorPicas;
}

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario y el campo de entrada por su ID
    let form = document.getElementById("myForm");
    let input = document.getElementById("myInput");
    const numPc = [5, 4, 1];
    // Agregar un evento de escucha para el envío del formulario
    form.addEventListener("submit", function(event) {
        // Prevenir el comportamiento predeterminado del formulario (enviar y recargar la página)
        event.preventDefault();
        // Obtener el valor del campo de entrada
        let inputValue = input.value;
        inputValue = parseInt(inputValue)
        console.log(inputValue)
        console.log(validarNum(inputValue))
        if (validarNum(inputValue)){
            let picas = contarPicas(inputValue, numPc)
            let fijas = contarFijas(inputValue, numPc)
            let numUser = new intento(inputValue, picas, fijas)
            console.log(numUser)
        }
    });
});


const numPc = [5, 4, 1];
const numUser = [5, 1, 4];

console.log(validarNum(numPc))
console.log(validarNum(numUser))

console.log(contarFijas(numUser, numPc));
console.log(contarPicas(numUser, numPc));
