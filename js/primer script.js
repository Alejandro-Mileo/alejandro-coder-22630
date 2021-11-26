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


// let user_name = prompt("¡Hola! Nos encanta que nos visites. ¿Cómo te llamas?");
// const msg = "Gracias por visitarnos, " + user_name;
// const company_name = "Somos turismo, somos World Travelers :)"
// const reminder_msg =". No olvides que estamos de 8 am a 18 pm. " + company_name;

// alert(msg + reminder_msg);


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




//                                                              ***********************************************************                                                                          
//                                                              *                                                         *
//                                                              *                                                         *
//                                                              *              EJERCICIO WHILE + DO WHILE                 *
//                                                              *                                                         *
//                                                              *                                                         *
//                                                              ***********************************************************  

// let number = 0;

// while (number <= 10){                                //En while siempre pregunta y después dispara.
//     console.log("while " + number);
//     number++;
// }

// do{                                                 // en Do-while siempre dispara al menos una vez y después pregunta.
//     console.log("do-while " + number);
//     number++
// } while(number <= 13);

//                                                              ***********************************************************                                                                          
//                                                              *                                                         *
//                                                              *                                                         *
//                                                              *                      EJERCICIO FOR                      *
//                                                              *                                                         *
//                                                              *                                                         *
//                                                              ***********************************************************  


// for (initialize = 0; initialize <= 10; initialize++){
//     console.log("\n"+ initialize);
// }

// for (initialize = 9; initialize >= 0; initialize--){
//     console.log("\n"+ initialize);
// }



//                                                              ***********************************************************                                                                          
//                                                              *                                                         *
//                                                              *                                                         *
//                                                              *                      EJERCICIO SWITCH                   *
//                                                              *                                                         *
//                                                              *                                                         *
//                                                              ***********************************************************  


// El usuario elige una operación: suma, resta, multiplicación y división. Luego mediante prompts, el usuario ingresa dos números. Luego, elige una opción mediante Switch (case) 
// Y se muetra al resultado. Si ingresa algo distinto, "default" muestra que no es un caracter válido//



let operation = prompt("Digita una operación a realizar: +, -, *, /");
let numberOne = parseInt(prompt("Digita el primer numero"));
let numberTwo = parseInt(prompt("Digita el segundo numero"));

    switch (operation) {
        case '+':
            
            alert("El resultado es: " + (numberOne + numberTwo + "."));
            
            break;
    
        case "-":
            
            alert("El resultado es: " + (numberOne - numberTwo + "."));
    
            break;
    
        case "*":
            
            alert("El resultado es: " + (numberOne * numberTwo + "."));

            break;

        case "/":
    
            alert("El resultado es: " + (numberOne / numberTwo + "."));
    
            break;


        default:

            alert("Operación no válida. Ingresa un caracter válido :).");

    }
