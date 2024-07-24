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
    let numArray = numStr.split("")
    let numeroÚnicos = new Set(numArray)
    if (numeroÚnicos.size === numArray.length){
        return true;
    } else {
        return false
    }
}

const contarFijas = (numUser, numPc)=>{
    let numStr = numUser.toString();
    let numArray = numStr.split("")
    console.log(numArray)
    let contadorFijas = 0;
    let intNumUser = numArray.map((e)=>parseInt(e))
    for (let index = 0; index < 3; index++) {
        if (intNumUser[index] === numPc[index]){
            contadorFijas++;
        };
    };
    return contadorFijas;
}

const contarPicas = (numUser, numPc)=>{
    let numStr = numUser.toString();
    let numArray = numStr.split("");
    let contadorPicas = 0;
    for (const num of numArray) {
        let intNumUser = numArray.map((e)=>parseInt(e))
        let numEnEsaPosicion = parseInt(num);
        if (numPc.includes(numEnEsaPosicion) && numPc.indexOf(numEnEsaPosicion) !== intNumUser.indexOf(numEnEsaPosicion)){
            contadorPicas++;
        };
    };
    return contadorPicas;
}

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario y el campo de entrada por su ID
    let form = document.getElementById("myForm");
    let input = document.getElementById("myInput");
    const numPc = [2, 3, 4];
    const tablaIntentos = document.getElementById('tablaIntentos');
    tablaIntentos.innerHTML += '<tr><th>Numero</th><th>Picas</th><th>Fijas</th></tr>';
    // Agregar un evento de escucha para el envío del formulario
    form.addEventListener("submit", function(event) {
        // Prevenir el comportamiento predeterminado del formulario (enviar y recargar la página)
        event.preventDefault();
        // Obtener el valor del campo de entrada
        let inputValue = input.value;
        inputValue = parseInt(inputValue);
        console.log(inputValue);
        console.log(validarNum(inputValue));
        if (validarNum(inputValue)){
            document.close()
            let picas = contarPicas(inputValue, numPc)
            let fijas = contarFijas(inputValue, numPc)
            let numUser = new intento(inputValue, picas, fijas)
            tablaIntentos.innerHTML += `${numUser.writeTd()}`
            // Supongamos que tienes un elemento <div> con id="contenido"
        };
    });
});


/* const numPc = [5, 4, 1];
const numUser = [5, 1, 4];

console.log(validarNum(numPc))
console.log(validarNum(numUser))

console.log(contarFijas(numUser, numPc));
console.log(contarPicas(numUser, numPc)); */
