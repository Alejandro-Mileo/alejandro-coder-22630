// ===========================================================================================================================================================================================
//                                                                                                                                                                                         ===                                                                                                           
//                                                                                                                                                                                         ===
//                                                                                      Desafío 1                                                                                          ===
//                                                                                                                                                                                         ===
//                                                                                  @version: v1.1.0                                                                                       ===
//                                                                                                                                                                                         ===
//                                                                                  @author: Alejandro Mileo                                                                               ===
//                                                                                                                                                                                         ===
//                                                                                  @fecha: 17/11/2021                                                                                     ===
//                                                                                                                                                                                         ===                         
//                                                                                                                                                                                         ===      
//                                                                                                                                                                                         ===
//                                                                                                                                                                                         ===
// ===========================================================================================================================================================================================


// let user = prompt("¡Hola! ¿Cómo te llamas?");
// alert(`Qué bueno verte ${user}. Disfruta tu viaje :)`);     //alert usando Backticks



// let user = prompt("¡Hola! ¿Cómo te llamas?");
// alert ("Qué bueno verte " + user + ". Disfruta tu viaje :)");  //Alert sin uso de backticks.

// ===========================================================================================================================================================================================
//                                                                                                                                                                                         ===                                                                                                           
//                                                                                                                                                                                         ===
//                                                                                      Desafío 2                                                                                          ===
//                                                                                                                                                                                         ===
//                                                                                  @version: v1.2.0                                                                                       ===
//                                                                                                                                                                                         ===
//                                                                                  @author: Alejandro Mileo                                                                               ===
//                                                                                                                                                                                         ===
//                                                                                  @fecha: 20/11/2021                                                                                     ===
//                                                                                                                                                                                         ===                         
//                                                                                                                                                                                         ===      
//                                                                                                                                                                                         ===
//                                                                                                                                                                                         ===
// ===========================================================================================================================================================================================


//                                                                ************************************************************                                                                          
//                                                                *                                                        ===
//                                                                *                                                        === 
//                                                                *               CONDICIONAL IF, ELSE IF Y ELSE           ===
//                                                                *                                                        ===
//                                                                *                                                        ===
//                                                                ************************************************************  


// let numeroUno = parseInt(prompt("ingresa el primer numero"));
// let numeroDos = parseInt(prompt("ingresa el segundo numero"));

// if (numeroUno > numeroDos){
//     alert("el primer numero es mayor");
// } else if(numeroUno < numeroDos){
//     alert("el segundo numero es mayor");
// } 
// else{
//     alert("ambos numeros son iguales");
// }

//                                                                ************************************************************                                                                          
//                                                                *                                                        ===
//                                                                *                                                        === 
//                                                                *  RESULTADO NOTA PARCIAL + ALERT USANDO CONDICIONALES   ===
//                                                                *                                                        ===
//                                                                *                                                        ===
//                                                                ************************************************************  

// let numberOne = parseInt(prompt("ingresa tu primer nota parcial"));
// let numberTwo  = parseInt(prompt("ingresa tu segunda nota parcial"));
// let numberThree = parseInt(prompt("ingresa tu tercer nota parcial"));

// let result = parseInt(numberOne + numberTwo + numberThree) / 3;
// alert("Tu calificación final es: " + result.toFixed(2));

// if (result <= 6){
//     alert("No has aprobado");
// }
// else if (result >= 7){
//     alert("Has aprobado");
// }
// else{
//     alert("El sistema solo acepta letras. Intenta de nuevo.");
// }


//                                                                 ***********************************************************                                                                          
//                                                                 *                                                         *
//                                                                 *                                                         *
//                                                                 *               EJERCICIO CONDICIONAL + OPERADOR          *
//                                                                 *                                                         *
//                                                                 *                                                         *
//                                                                 ***********************************************************  


// let precioMilla = 0;
// let destino = prompt("selecciona tu destino").toUpperCase();
// let millasRecorridas = parseInt(prompt("¿Cuántas millas recorriste?"));
// let litrosConsumidos = parseInt(prompt("¿Cuántos litros consumiste?"));


// if (destino === "EUROPA" && destino != ""){
//     precioMilla = 20;
// }
// else if (destino === "ASIA" && destino != ""){
//     precioMilla = 30;
// }
// else if (destino === "AMERICA" && destino != ""){
//     precioMilla = 40;
// }

// let totalKms = millasRecorridas * precioMilla;


// if (litrosConsumidos > 0 && litrosConsumidos <= 10){
//     totalKms = totalKms + 100;
// }
// else{
//     totalKms = totalKms + 200;
// }

// alert("El precio final de tu vuelo es de: " + "$" + totalKms);
// console.log ("El precio final de tu vuelo es de: " + "$" + totalKms);

// ===========================================================================================================================================================================================
//                                                                                                                                                                                         ===                                                                                                           
//                                                                                                                                                                                         ===
//                                                                                      Desafío 3                                                                                          ===
//                                                                                                                                                                                         ===
//                                                                                  @version: v1.3.0                                                                                       ===
//                                                                                                                                                                                         ===
//                                                                                  @author: Alejandro Mileo                                                                               ===
//                                                                                                                                                                                         ===
//                                                                                  @fecha: 25/11/2021                                                                                     ===
//                                                                                                                                                                                         ===                         
//                                                                                                                                                                                         ===      
//                                                                                                                                                                                         ===
//                                                                                                                                                                                         ===
// ===========================================================================================================================================================================================




//                                                                 ***********************************************************                                                                          
//                                                                 *                                                         *
//                                                                 *                                                         *
//                                                                 *              EJERCICIO WHILE + DO WHILE                 *
//                                                                 *                                                         *
//                                                                 *                                                         *
//                                                                 ***********************************************************  

// let number = 0;

// while (number <= 10){                                //En while siempre pregunta y después dispara.
//     console.log("while " + number);
//     number++;
// }

// do{                                                 // en Do-while siempre dispara al menos una vez y después pregunta.
//     console.log("do-while " + number);
//     number++
// } while(number <= 13);

//                                                                 ***********************************************************                                                                          
//                                                                 *                                                         *
//                                                                 *                                                         *
//                                                                 *                      EJERCICIO FOR                      *
//                                                                 *                                                         *
//                                                                 *                                                         *
//                                                                 ***********************************************************  


// for (initialize = 0; initialize <= 10; initialize++){
//     console.log("\n"+ initialize);
// }

// for (initialize = 9; initialize >= 0; initialize--){
//     console.log("\n"+ initialize);
// }



//                                                                 ***********************************************************                                                                          
//                                                                 *                                                         *
//                                                                 *                                                         *
//                                                                 *                      EJERCICIO SWITCH                   *
//                                                                 *                                                         *
//                                                                 *                                                         *
//                                                                 ***********************************************************  


// El usuario elige una operación: suma, resta, multiplicación y división. Luego mediante prompts, el usuario ingresa dos números. Luego, elige una opción mediante Switch (case) 
// Y se muetra al resultado. Si ingresa algo distinto, "default" muestra que no es un caracter válido//



// let operation = prompt("Digita una operación a realizar: +, -, *, /");
// let numberOne = parseInt(prompt("Digita el primer numero"));
// let numberTwo = parseInt(prompt("Digita el segundo numero"));

//     switch (operation) {
//         case '+':
            
//             alert("El resultado es: " + (numberOne + numberTwo + "."));
            
//             break;
    
//         case "-":
            
//             alert("El resultado es: " + (numberOne - numberTwo + "."));
    
//             break;
    
//         case "*":
            
//             alert("El resultado es: " + (numberOne * numberTwo + "."));

//             break;

//         case "/":
    
//             alert("El resultado es: " + (numberOne / numberTwo + "."));
    
//             break;


//         default:

//             alert("Operación no válida. Ingresa un caracter válido :).");

//     }



// ===========================================================================================================================================================================================
//                                                                                                                                                                                         ===                                                                                                           
//                                                                                                                                                                                         ===
//                                                                                      Desafío 4                                                                                          ===
//                                                                                                                                                                                         ===
//                                                                                  @version: v1.4.0                                                                                       ===
//                                                                                                                                                                                         ===
//                                                                                  @author: Alejandro Mileo                                                                               ===
//                                                                                                                                                                                         ===
//                                                                                  @fecha: 23/11/2021                                                                                     ===
//                                                                                                                                                                                         ===                         
//                                                                                                                                                                                         ===      
//                                                                                                                                                                                         ===
//                                                                                                                                                                                         ===
// ===========================================================================================================================================================================================


//                                                                        ***********************************************************                                                                          
//                                                                        *                                                         *
//                                                                        *                                                         *
//                                                                        *             EJERCICIO SIMULADOR DE COMPRA               *
//                                                                        *                                                         *
//                                                                        *                                                         *
//                                                                        ***********************************************************  





// let operation = prompt("¡Hola viajero! Nos encanta que hayas elegido viajar a Italia. El precio es de $140.000.- ¿Continuamos con la operación?").toLowerCase();

// if (operation == "si"){

//     alert("¡Genial! Comencemos.");

// }
// else if( operation != "no" && operation !="si" && operation != ""){

//     alert("Opción no válida. Intenta de nuevo.");
    
//     exit();
// }
// else{

//     alert("Parece que aún estás con dudas. No te preocupes, intentalo de nuevo más tarde :)");
    
//     exit();
    
// }

// let decition = prompt("Sabemos que viajar es un placer, así que queremos financiar tu viaje en 3 y 6 cuotas sin interés. Y 12 y 18 cuotas con un interés de tan sólo el 5%, ¿En cuántas cuotas te gustaría financiar tu viaje?").toLowerCase();

// let firstOption = parseFloat(140.000/3).toFixed(3); //la operación no agrega interés.

// let secondOption = parseFloat(140.000/6).toFixed(3); //la operación no agrega interés.

// let thirdOption = parseFloat(((140.000) + (140.000 * 5 / 100)) / 12).toFixed(3); // la operación agrega 5% de interés y se divide el total en 12 cuotas. 

// let fourthOption = parseFloat(((140.000) + (140.000 * 5 / 100)) / 18).toFixed(3);  // la operación agrega 5% de interés y se divide el total en 18 cuotas.

// switch (decition) {

//             case '3':
                
//             alert(`¡Excelente idea! El valor de tus cuotas es de: $${firstOption} sin interés. Que tengas un buen viaje :)`);
                
//             break;

//             case '6':
                
//                 alert(`¡Excelente idea! El valor de tus cuotas es de: $${secondOption} sin interés. Que tengas un buen viaje :)`);
                
//             break;

//             case '12':
                
//                 alert(`¡Excelente idea! El valor de tus cuotas es de: $${thirdOption} sin interés. Que tengas un buen viaje :)`);
                
//             break;
    
//             case '18':
                
//                 alert(`¡Excelente idea! El valor de tus cuotas es de: $${fourthOption} sin interés. Que tengas un buen viaje :)`);
                    
//             break;


//             default:
    
//                 alert("Parece que no contamos con esa opción de cuota. Recordá que podrás elegir entre 3, 6, 12 y 18 cuotas.");
    
// }

           //PD: los precios difieren de cualquier realidad. En Argentina es imposible viajar por ese precio :((       





// ===========================================================================================================================================================================================
//                                                                                                                                                                                         ===                                                                                                           
//                                                                                                                                                                                         ===
//                                                                           Desafío 4.5  (complementario)                                                                                 ===
//                                                                                                                                                                                         ===
//                                                                           @version: v1.4a.0                                                                                             ===
//                                                                                                                                                                                         ===
//                                                                           @author: Alejandro Mileo                                                                                      ===
//                                                                                                                                                                                         ===
//                                                                           @fecha: 28/11/2021                                                                                            ===
//                                                                                                                                                                                         ===                         
//                                                                                                                                                                                         ===      
//                                                                                                                                                                                         ===
//                                                                                                                                                                                         ===
// ===========================================================================================================================================================================================
    


//                                                              ***********************************************************                                                                          
//                                                              *                                                         *
//                                                              *                                                         *
//                                                              *                  EJERCICIO FUNCIONES                    *
//                                                              *                                                         *
//                                                              *                                                         *
//                                                              ***********************************************************  


//Función de saludo


// function mensajeBienvenida() {
//     console.log("¡Bienvenidos a World Travelers!")
// }
// mensajeBienvenida();


//función para calcular el interés en la compra. En este caso el valor es de 140k (Italia). Si quiero cambiar el destino e interés, modifico los valores en consola

// function calcularInteres (firstOperation, secondOperation, thirdOperation){

//     let taxes = (firstOperation * secondOperation / thirdOperation);   //Variable local

//     return `El interés agregado a la compra es de $${taxes} pesos.`;
// }
// console.log(calcularInteres(140000, 5, 100));
// console.log(calcularInteres(123547, 10, 100));



//función para saber el descuento que se aplica al viaje. A diferencia de la función anterior, con esta calculo el descuento en base al valor del viaje (italia), si quiero cambiar el vuelo, reemplazo valores en la consola.

// const discount = function(countryPrice, percentage){

//     const newPrice = countryPrice - (countryPrice * percentage / 100);

//     return `el precio final de tu viaje es de $${newPrice} pesos.`
// }
// console.log(discount(140000, 5));
// console.log(discount(1000, 10));



//función para saber si el usuario puede viajar a X destino o no.

// let currency = parseInt(prompt("digite su saldo en cuenta"));  //variable global

// function balance(){

// if (currency <= 1000){      

//     alert(`Lo sentimos, pero tu saldo es de $${currency} y no contamos con destinos a ese precio`);   

//     console.log(`Lo sentimos, pero tu saldo es de $${currency} y no contamos con destinos a ese precio`); 
// }
// else{
//     alert(`Su saldo actual es de: $${currency}. Puede viajar a Brasil, Estados Unidos, Canadá, Alemania, Rusia, Italia y España`);
//     console.log(`Su saldo actual es de: $${currency}. Puede viajar a Brasil, Estados Unidos, Canadá, Alemania, Rusia, Italia y España`);
// }
// }

// balance();






// ===========================================================================================================================================================================================
//                                                                                                                                                                                         ===                                                                                                           
//                                                                                                                                                                                         ===
//                                                                           Desafío    5                                                                                                  ===
//                                                                                                                                                                                         ===
//                                                                           @version: v1.5.0                                                                                              ===
//                                                                                                                                                                                         ===
//                                                                           @author: Alejandro Mileo                                                                                      ===
//                                                                                                                                                                                         ===
//                                                                           @fecha: 4/12/2021                                                                                             ===
//                                                                                                                                                                                         ===                         
//                                                                                                                                                                                         ===      
//                                                                                                                                                                                         ===
//                                                                                                                                                                                         ===
// ===========================================================================================================================================================================================


//                                                              ***********************************************************                                                                          
//                                                              *                                                         *
//                                                              *                                                         *
//                                                              *                  EJERCICIO OBJETO + FUNCIÓN             *
//                                                              *                                                         *
//                                                              *                                                         *
//                                                              ***********************************************************  




// class Europa {                                                     
//     constructor(destino, precio, fechaSalida, fechaRegreso) {     
//         this.destino = destino;
//         this.precio = precio;                                    
//         this.fechaSalida = fechaSalida;                        
//         this.fechaRegreso = fechaRegreso;                      
//     }
//     salida = () => {                                              
//         console.log(`Tu viaje con destino a ${this.destino} fue confirmado. Deberás abordar el avión el día ${this.fechaSalida} 12. El valor final es de $${this.precio}, buen viaje!`) // La función imprime el mensaje en consola. Tiene uso de backticks (Alt + 96) y mediante el "this" varian los atributos, x ej: ${this.destino}. destino = Alemnia o Italia, según prefiera. (Ver línea 152 o 154)
//     }
    
// }

// const destinoUno = new Europa("Italia", "130.000 pesos", "Lunes", "Sábado"); 

// const destinoDos = new Europa("Alemania", "150.000 pesos", "Martes", "domingo"); 

// console.log(destinoUno, destinoDos);

// destinoUno.salida();  

// destinoDos.salida(); 




// class Canciones {
//     constructor(nombre, artista, genero){
//         this.nombre = nombre;
//         this.artista = artista;
//         this.genero = genero;
//     }
//     cancion = () =>{
//         console.log(`reproduciendo: ${this.nombre} - ${this.artista} - ${this.genero}`)
//     }
// }

// const tema = new Canciones ("castle of glass", "linkin park", "nu-metal");
// const temaDos = new Canciones ("heavy", "linkin park", "nu-metal");


// tema.cancion();
// temaDos.cancion();




// class Pasajes {
//     constructor (precio, destino, descuento){
//         this.precio = precio;
//         this.destino = destino;
//         this.descuento = descuento;
//     }
//     resultado = () =>{
//         console.log(`Detalles de compra:\nDestino: ${this.destino}. Precio: ${this.precio}. Descuento ${this.descuento}`);
//     }
// }

// resultadoPasajes = new Pasajes ("5000", "Italia", "0");
// resultadoPasajes.resultado();






// ===========================================================================================================================================================================================
//                                                                                                                                                                                         ===                                                                                                           
//                                                                                                                                                                                         ===
//                                                                           Desafío    6                                                                                                  ===
//                                                                                                                                                                                         ===
//                                                                           @version: v1.6.0                                                                                              ===
//                                                                                                                                                                                         ===
//                                                                           @author: Alejandro Mileo                                                                                      ===
//                                                                                                                                                                                         ===
//                                                                           @fecha: 7/12/2021                                                                                             ===
//                                                                                                                                                                                         ===                         
//                                                                                                                                                                                         ===      
//                                                                                                                                                                                         ===
//                                                                                                                                                                                         ===
// ===========================================================================================================================================================================================





//                                                              ***********************************************************                                                                          
//                                                              *                                                         *
//                                                              *                                                         *
//                                                              *                     EJERCICIO ARRAY                     *
//                                                              *                                                         *
//                                                              *                                                         *
//                                                              *********************************************************** 


// const europa = ["Alemania", "Rusia", "Italia", "Grecia", "España"];
// const europaNuevo = ["Suiza", "Noruega"]
// let europaTotal;
// let europaRecorte;

// //

// console.log(europa.length);
// console.log(europa.join(" - "));

// //

// europa.forEach (pais => {
//     console.log(`El destino: ${pais}. Está incluído en el paquete.`)
// })

// //

// europa.push("portugal");
// console.log(europa);

// //

// europaTotal = europa.concat(europaNuevo);
// console.log(europaTotal);

// //

// europaRecorte = europa.slice(0, 2);
// console.log (europaRecorte);

// //

// const europaDestino = ["Grecia", "Italia", "Suecia"];
// const europaPrecio = [10, 30, 50];
// const resultadoEuropa = [...europaDestino, ...europaPrecio];

// console.log(resultadoEuropa)



// ARRAY DE OBJETOS:


// const destinos = [
//     { destino: "suiza", precio: "150k", fechaSalida: "17/12", fechaVuelta: "5/1"},
//     { destino: "irlanda", precio: "130k", fechaSalida: "26/12", fechaVuelta: "15/1"},
//     { destino: "alemania", precio: "1550k", fechaSalida: "30/12", fechaVuelta: "25/1", cantidad: "1000"},
//     { destino: "españa", precio: "132k", fechaSalida: "14/1", fechaVuelta: "6/2"},
// ]

// for (const destino of destinos){
//     console.log(destino.precio);
// }

// FIND

// console.log(destinos.find(destino => destino.precio === "132k"));    // find muestra un único objeto. Si hay 2 iguales, va a mostrar al primero que encuentre

// FILTER

// console.log(destinos.filter(destino => destino.precio === "132k")); // filter muestra al array entero

// console.log(destinos
// .filter(destino => destino.destino === "alemania")
// .filter(destino => destino.cantidad === 1000)
// .filter(destino => destino.fechaSalida === "30/12")); // Más de un filtro.


// destinoYprecio = destinos.map(vuelos =>{
//     return{destino: vuelos.destino, precio: vuelos.precio, fechaSalida: vuelos.fechaSalida}
// });
// console.log(destinoYprecio);


// ===========================================================================================================================================================================================
//                                                                                                                                                                                         ===                                                                                                           
//                                                                                                                                                                                         ===
//                                                                           Desafío   6a  complementario.                                                                                 ===
//                                                                                                                                                                                         ===
//                                                                           @version: v1.6a.0                                                                                             ===
//                                                                                                                                                                                         ===
//                                                                           @author: Alejandro Mileo                                                                                      ===
//                                                                                                                                                                                         ===
//                                                                           @fecha: 7/12/2021                                                                                             ===
//                                                                                                                                                                                         ===                         
//                                                                                                                                                                                         ===      
//                                                                                                                                                                                         ===
//                                                                                                                                                                                         ===
// ===========================================================================================================================================================================================


//                                                              ***********************************************************                                                                          
//                                                              *                                                         *
//                                                              *                                                         *
//                                                              *                     EJERCICIO SORT                      *
//                                                              *                                                         *
//                                                              *                                                         *
//                                                              *********************************************************** 


// const destinosEuropa = ["Grecia", "Italia", "Noruega", "Alemania", "Francia"];

// destinosEuropa.sort();
// console.log(destinosEuropa);

// destinosEuropa.reverse();
// console.log(destinosEuropa);

// const preciosEuropa = ["100", "10", "3000", "55"];

// preciosEuropa.sort(function(a,b)
//     {return a - b}
// )
// console.log(preciosEuropa);

// preciosEuropa.sort(function(a,b)
//     {return b - a}
// )
// console.log(preciosEuropa);


// ===========================================================================================================================================================================================
//                                                                                                                                                                                         ===                                                                                                           
//                                                                                                                                                                                         ===
//                                                                           Desafío   Primera Entrega                                                                                     ===
//                                                                                                                                                                                         ===
//                                                                           @version: v1.6a.0                                                                                             ===
//                                                                                                                                                                                         ===
//                                                                           @author: Alejandro Mileo                                                                                      ===
//                                                                                                                                                                                         ===
//                                                                           @fecha: 8/12/2021                                                                                             ===
//                                                                                                                                                                                         ===                         
//                                                                                                                                                                                         ===      
//                                                                                                                                                                                         ===
//                                                                                                                                                                                         ===
// ===========================================================================================================================================================================================


//                                                              ***********************************************************                                                                          
//                                                              *                                                         *
//                                                              *                                                         *
//                                                              *                Primer interacción html + js             *
//                                                              *                                                         *
//                                                              *                                                         *
//                                                              *********************************************************** 


const listaPrecios = [1, 2, 3, 4 ,5];

function sortMajor() {
    listaPrecios.sort(function(a,b)
    {return a - b});
    document.getElementById("show").innerHTML = listaPrecios;
}

function sortMinor (){
    listaPrecios.sort(function(a,b)
    {return b - a});
    document.getElementById("show").innerHTML = listaPrecios;
}


// ===========================================================================================================================================================================================
//                                                                                                                                                                                         ===                                                                                                           
//                                                                                                                                                                                         ===
//                                                                               Desafío DOM                                                                                               ===
//                                                                                                                                                                                         ===
//                                                                           @version: v1.7.0                                                                                              ===
//                                                                                                                                                                                         ===
//                                                                           @author: Alejandro Mileo                                                                                      ===
//                                                                                                                                                                                         ===
//                                                                           @fecha: 17/12/2021                                                                                            ===
//                                                                                                                                                                                         ===                         
//                                                                                                                                                                                         ===      
//                                                                                                                                                                                         ===
//                                                                                                                                                                                         ===
// ===========================================================================================================================================================================================






// ejercicio usando backticks.

let comunicado = "";
const precios = [
    "100",
    "200",
    "300",
    "400"
]

precios.forEach(listadoPrecios);
document.getElementById("listaPaises").innerHTML = comunicado;

function listadoPrecios (index, item){
    comunicado += `${item}: ${index}. <br>`
}

// ejercicio concatenado sin backticks.

let paises = "";
const listaPaises = ["Suiza", "Suecia", "Portugal"];

listaPaises.forEach(cadaPais);
document.getElementById("listaPais").innerHTML = paises;

function cadaPais (item, index){
    paises += index + ":" + item +"<br>";
}


// ejercicio de suma de valores dentro de un array.

let sumar = 0;
const valores = [100, 200, 300, 500, 1];
valores.forEach(totalValores)

document.getElementById("resultado").innerHTML = sumar;

function totalValores (valor){
    sumar += valor;
}

// ejercicio de multiplicación de valores dentro de un array.

const numero = [1, 5, 10, 20, 50];

numero.forEach(numerosRecorridos);
document.getElementById("numeros").innerHTML = numero;

function numerosRecorridos (item, posicion, multiplica){
    multiplica[posicion] = item * 10;
}


// añadir html + css con JS.

function textoColor() {

    let texto = document.createElement("h1");

    texto.innerHTML ="Vo so loco viteh";
    texto.classList.add("textoVerde");

    document.getElementById("customDiv").appendChild(texto);
    
}
