let primerNum = prompt("Ingrese el primer número");
let segundoNum = prompt("Ingrese el segundo número");
resultado = primerNum % segundoNum
if((resultado) == 0){
    
    alert(`${primerNum} es múltiplo de ${segundoNum}`);
    
}else{

    alert(`${primerNum} no es múltiplo de ${segundoNum}`);

}