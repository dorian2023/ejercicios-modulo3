document.getElementById('btn-calcular').addEventListener('click', function() {
    const input1 = document.getElementById('input-1').value;
    const input2 = document.getElementById('input-2').value;

    //Hallar el valor mayor de dos números
    let a1 = Number(input1);
    let b1 = Number(input2);

    function esMayor(a, b) {
        if (a1 > b1) {
            return 'a es mayor que b';
        } else if (b1 > a1) {
            return `${b1} es mayor que ${a1}`;
        } else {
            return `${a1} y ${b1} son iguales`;
        }
    }

    alert(esMayor(a1, b1));
});
    /* En este código, la función esMayor toma dos números como 
    entrada y compara si a es mayor que b, b es mayor que a, o si son iguales. 
    Luego, imprime el resultado de la comparación. La última línea de código 
    llama a la función esMayor con los números 4 y 5.*/

//---------------------------------------------------------------------------------------------------------------------------------------

//Sumar, restar, multiplicar y dividir los números
document.getElementById('btn-calcular2').addEventListener('click', function () {
    const input3 = document.getElementById('input-3').value;
    const input4 = document.getElementById('input-4').value;
    const operation = document.getElementById('operation').value;

    let a2 = Number(input3);
    let b2 = Number(input4);

    function sumar(a2, b2) {
        let suma = a2 + b2;
        alert('La suma de ' + a2 + ' y ' + b2 + ' es: ' + suma);
    }

    function restar(a2, b2) {
        let resta = a2 - b2;
        alert('La resta de ' + a2 + ' y ' + b2 + ' es: ' + resta);
    }

    function multiplicar(a2, b2) {
        let multiplicacion = a2 * b2;
        alert('La multiplicación de ' + a2 + ' y ' + b2 + ' es: ' + multiplicacion);
    }

    function dividir(a2, b2) {
        if (b2 != 0) {
            let division = a2 / b2;
            alert('La división de ' + a2 + ' y ' + b2 + ' es: ' + division);
        } else {
            alert('Error: División por cero no está definida');
        }
    }

    switch (operation) {
        case 'sumar':
            sumar(a2, b2);
            break;
        case 'restar':
            restar(a2, b2);
            break;
        case 'multiplicar':
            multiplicar(a2, b2);
            break;
        case 'dividir':
            dividir(a2, b2);
            break;
        default:
            alert('Operación no reconocida');
    }
});
/*En este código, cada función toma dos números como entrada y realiza la operación 
correspondiente. Luego, imprime el resultado de la operación. Las últimas líneas de código
llaman a cada una de las funciones con los números 4 y 5.*/

//---------------------------------------------------------------------------------------------------------------------------------------

//Calcular la raíz cuadrada de un número
document.getElementById('btn-calcular3').addEventListener('click', function() {
    const input5 = document.getElementById('input-5').value;
    
    let a3 = Number(input5);
    
    function raiz(a3) {
        let raizCuadrada = Math.sqrt(a3);
        alert('La raíz cuadrada de ' + a3 + ' es: ' + raizCuadrada);
    }
    
    raiz(a3); // 4
});
    /*
En este código, la función raiz toma un número como entrada y calcula su raíz cuadrada con 
la función Math.sqrt(). Luego, imprime el número original y su raíz cuadrada. La última 
línea de código llama a la función raiz con el número 16.
*/

//---------------------------------------------------------------------------------------------------------------------------------------

//Identificar la longitud de la cadena de texto
document.getElementById('btn-calcular4').addEventListener('click', function() {
    const input6 = document.getElementById('input-6').value;
    
    let texto1 = String(input6);
    
    function longitudTexto(texto1){
        let longitud = texto1.length;
        alert('La longitud del texto "' + texto1 + '" es: ' + longitud);
    };
    longitudTexto(texto1);
})
// Llamamos a la función con el texto
/* En este código, la función longitudTexto toma una cadena de
texto como entrada y calcula su longitud con la propiedad .length.
Luego, imprime la cadena de texto original y su longitud. 
La última línea de código llama a la función longitudTexto con la
cadena de texto 'Hola mundo, soy estudiante de EDTecnica'.*/

//---------------------------------------------------------------------------------------------------------------------------------------

//Invertir la cadena de texto. 
document.getElementById('btn-calcular5').addEventListener('click', function() {
    const input7 = document.getElementById('input-7').value;

    let texto = String(input7);
    
    function invertirTexto(texto) {
        let textoRevertido = texto.split('').reverse().join('');
        alert('La cadena de texto ' + texto + ' revertida es: ' + textoRevertido);
    }
    
    invertirTexto(texto);
});	

/* En este codigo se agrra una cadena de texto
como entrada que seria la variable (texto),
despues la divide en un array de caracteres con
split(''), e invierte el array con reverse(),
y luego une los caracteres de nuevo en una cadena
con join('')*/

//---------------------------------------------------------------------------------------------------------------------------------------

//Repetir el texto
document.getElementById("btn-calcular6").addEventListener('click', function() {
    const input8 = document.getElementById('input-8').value;
    const input9 = document.getElementById('input-9').value;
    
    
    let texto2 = String(input8);
    let cantidad = Number(input9);
    
    function repetirTexto(texto2, cantidadDeVecesRepetida) {
        let textoRepetido = texto2.repeat(cantidadDeVecesRepetida);
        alert('El texto "' + texto2 + '" repetido ' + cantidadDeVecesRepetida + ' veces es: ' + textoRepetido);
    }
    
    repetirTexto(texto2, +cantidad);
});
/*
En este código, la función repetirTexto toma una cadena de texto y un número como entrada,
 y repite la cadena de texto el número especificado de veces con la función repeat(). 
 Luego, imprime la cadena de texto original y la cadena de texto repetida. La última línea 
 de código llama a la función repetirTexto con la cadena de texto 'Hola Mundo' y el número 3.
*/

//---------------------------------------------------------------------------------------------------------------------------------------

//Reemplazar un texto a otro
document.getElementById('btn-calcular7').addEventListener('click', function() {
    const input10 = document.getElementById('input-10').value;
    const input11 = document.getElementById('input-11').value;
    
    let texto3 = String(input10);
    let reemplazo = String(input11);
    
    function reemplazarTexto(texto3, textoAReemplazar) {
        let textoReemplazado = texto3.replace(texto3, textoAReemplazar);
        alert('El texto anterior: ' + texto3 + ' Ahora es reemplazado por: ' + textoReemplazado);
    }
    
    reemplazarTexto(texto3, reemplazo);
});
    /**
En este código, la función reemplazarTexto toma dos cadenas de texto como entrada y reemplaza
la primera cadena de texto por la segunda con la función replace(). Luego, imprime la cadena 
de texto original y la cadena de texto reemplazada. La última línea de código llama a la función 
reemplazarTexto con las cadenas de texto 'Hola Mundo' y 'Hola EDTecnica'.
*/

//---------------------------------------------------------------------------------------------------------------------------------------

//Buscar valores de un texto
document.getElementById("btn-calcular8").addEventListener("click", function() {
    const input12 = document.getElementById('input-12').value;
    const input13 = document.getElementById('input-13').value;
    
    
    let texto4 = String(input12);
    let valorABuscar = String(input13);
    
    function buscarValorEnTexto(texto4, valor) {
        console.log(texto4);
        if (texto4.includes(valor)) {
            alert(`${texto4}`);
            alert('Sí existe el valor "' + valor + '" en el texto.');
        } else {
            alert('No existe el valor "' + valor + '" en el texto.');
        }
    }
    
    buscarValorEnTexto(texto4, valorABuscar);
});
    /*
En este código, la función buscarValorEnTexto toma una cadena de texto y un valor como entrada, 
y busca el valor en la cadena de texto con la función includes(). Luego, imprime si el valor existe 
o no en la cadena de texto. La última línea de código llama a la función buscarValorEnTexto con la 
cadena de texto 'Hola Mundo' y el valor 'Buscando'.
*/

//---------------------------------------------------------------------------------------------------------------------------------------

//Agregar valores al principio de un arreglo
document.getElementById('btn-calcular9').addEventListener('click', function () {
    const input14 = document.getElementById('input-14').value;
    const input15 = document.getElementById('input-15').value;
    
    let arreglo1 = input14.split(' ');
    let nuevoValor = input15;

    function agregarNuevoValor(arreglo1, nuevoValor) {
        arreglo1.unshift(nuevoValor);
        alert(arreglo1);
    }
    
    agregarNuevoValor(arreglo1, nuevoValor);
});
/*
En este código, la función agregarNuevoValor toma un arreglo y un valor como entrada, y agrega el valor
al inicio del arreglo con la función unshift(). Luego, imprime el arreglo con el nuevo valor. Las últimas
 líneas de código llaman a la función agregarNuevoValor con diferentes arreglos y valores
*/

//---------------------------------------------------------------------------------------------------------------------------------------

//Revertir los valores de un arreglo
document.getElementById('btn-calcular10').addEventListener('click', function() {
    const input16 = document.getElementById('input-16').value;

    let arreglo2 = input16.split('');

    let arregloInvertido = arreglo2.reverse();

    let textoInvertido = arregloInvertido.join('');
    alert(textoInvertido);
});
/*
Define una función separada para revertir el array. En lugar de eso, simplemente invierte el array y muestra el resultado directamente en el alert.
*/

//---------------------------------------------------------------------------------------------------------------------------------------

//Sumar datos de un arreglo
document.getElementById('btn-calcular11').addEventListener('click', function() {
    const input17 = document.getElementById('input-17').value;
   
    // Separamos los números por las comas
    let arreglo = input17.split(',');
    
    function sumarArray(arreglo){
        let suma = 0;
        for(let i = 0; i < arreglo.length; i++){
            // Convertimos cada elemento del arreglo a número antes de sumarlo
            suma += Number(arreglo[i]);
        }
        alert(suma);
    }
    
    sumarArray(arreglo);
});
/*En este codigo tomamos los datos colocados en el input17 de mi sitio web el cual sera en formato numerico,
y cada dato del arreglo tiene q ser separado por (,) asi mismo se suma los datos den arreglo con la funcion 
sumarArray() para luego mostrarlo en un alert.*/

//---------------------------------------------------------------------------------------------------------------------------------------

//Eliminar el ultimo valor de un arreglo
document.getElementById('btn-calcular12').addEventListener('click', function() {
    const input18 = document.getElementById('input-18').value;

    let arreglo = input18.split(',');
    
    function eliminarUltimoValorArray(arreglo){
        arreglo.pop();
        alert(`El valor que colocaste fue ${input18}, y se elimino el ultimo valor arrojando el siguiente resultado: ${arreglo}`);
    }
    
    eliminarUltimoValorArray(arreglo);
});
/*En este codigo tomamos los datos colocados en el input18 de mi sitio web el cual sera en formato numerico o string
y cada dato del arreglo tiene q ser separado por (,) de tal forma elimini el ultimo valor del arreglo con la funcion 
eliminarUltimoValorArray() para luego mostrarlo en un alert.*/

//---------------------------------------------------------------------------------------------------------------------------------------

//Ordenar un arreglo
document.getElementById('btn-calcular13').addEventListener('click', function(){
    const input19 = document.getElementById('input-19').value;
    
    let arreglo = input19.split(',');
    
    function ordenarArray(arreglo){
        arreglo.sort(function(a, b){
            if (isNaN(a) || isNaN(b)) {
                // Si a o b son cadenas de texto, se ordenan alfabéticamente
                return a.localeCompare(b);
            } else {
                // Si a y b son números, se ordenan numéricamente
                return a - b;
            }
        });
        alert(arreglo.join(', '));
    }
    
    ordenarArray(arreglo);
});
/*En este código, primero obtenemos el valor del campo input-19. En la función ordenarArray, usamos el método sort() para ordenar los elementos del arreglo.
 Si los elementos son cadenas de texto, se ordenan alfabéticamente usando localeCompare(). Si son números, se ordenan nuN   méricamente. Finalmente,
mostramos el arreglo ordenado con un alert().*/

//---------------------------------------------------------------------------------------------------------------------------------------

//Imprime los valores de un ciclo
document.getElementById('btn-calcular14').addEventListener('click', function() {
    const input20 = document.getElementById('input-20').value;

    let arreglo = input20.split(',');
    
    function imprimirValoresIterados(valoresAImprimir){
        if (Array.isArray(valoresAImprimir)) {
            // Si valoresAImprimir es un arreglo, iteramos sobre sus elementos
            for (let i = 0; i < valoresAImprimir.length; i++) {
                alert(valoresAImprimir[i]);
            }
        } else if (typeof valoresAImprimir === 'string') {
            // Si valoresAImprimir es una cadena de texto, iteramos sobre sus caracteres
            for (let i = 0; i < valoresAImprimir.length; i++) {
                alert(valoresAImprimir.charAt(i));
            }
        }
    }
    
    imprimirValoresIterados(arreglo); 
});

//---------------------------------------------------------------------------------------------------------------------------------------

//Muestra los índices de un arreglo a iterar:
document.getElementById('btn-calcular15').addEventListener('click', function() { 
    const input21 = document.getElementById('input-21').value;

    let arreglo = input21.split(',');
    
    function indicesValue(arreglo){
        let resultado = {};
        for(let i = 0; i < arreglo.length; i++){
            resultado['indice' + i] = arreglo[i];
        }
        alert(JSON.stringify(resultado));
    }
    indicesValue(arreglo);     
});
/*
Eh añadido JSON.stringify(resultado) para convertir el objeto resultado en una cadena, lo que permitirá que se muestre correctamente en la alerta.
*/

//--------------------------------------------------------------------------------------------------------------------------------------

//Itera un arreglo de números y devuelve su valor multiplicado
document.getElementById('btn-calcular16').addEventListener('click', function() { 
    const input22 = document.getElementById('input-22').value;

    let arreglo = input22.split(',').map(Number);

    function multiplicarValores(arreglo){
        let valoresMultiplicados = arreglo.map(x => x * 2);
        alert(valoresMultiplicados);
    }

    multiplicarValores(arreglo); 
});
/*
Este código tomará el valor del input, lo dividirá en un arreglo (asumiendo que los valores están separados por comas), convertirá cada valor a un número y luego mostrará una alerta con los valores multiplicados por 2.
*/


//--------------------------------------------------------------------------------------------------------------------------------------
