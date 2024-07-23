const longitudNúmeros = 3

const validarNum = (num)=>{
    if (num.length !== longitudNúmeros){return false}
    let numeroÚnicos = new Set(num)
    if (numeroÚnicos.size === num.length){
        return true;
    } else {
        return false
    }
}

const contarFijas = (numUser, numPc)=>{
    let contadorFijas = 0;
    for (let index = 0; index < 3; index++) {
        if (numUser[index] === numPc[index]){
            contadorFijas++;
        };
    };
    return contadorFijas;
}

const contarPicas = (numUser, numPc)=>{
    let contadorPicas = 0;
    for (const num of numUser) {
        if (numPc.includes(num) && numPc.indexOf(num) !== numUser.indexOf(num)){
            contadorPicas++;
        };
    };
    return contadorPicas;
}


const numPc = [5, 4, 1];
const numUser = [5, 1, 4];

console.log(validarNum(numPc))
console.log(validarNum(numUser))

console.log(contarFijas(numUser, numPc));
console.log(contarPicas(numUser, numPc));
