// desafio complementario 1

let nombre =prompt("ingresa tu nombre")
if(nombre == ""){
    alert("hola desconocido")
}else{
    alert("hola " + nombre)
}


let ingreso=parseInt (prompt("ingrese un numero"));

for (let i=  0; i < 10; i++){
    let result= ingreso * i 
    console.log(ingreso + "x" + i + "=" + result)
}

let Ingreso= prompt("ingrese un producto. Para salir escriba ESC")
while (Ingreso != "ESC"){
    console.log("el producto ingresado es" + Ingreso)

    // Condicion de salida
Ingreso= prompt("ingrese un producto. Para salir escriba ESC")
}
