
// Taller

  /* Punto 1. 
  
  Tareas:

  1.  Crea un nuevo arreglo `puntosDoble` donde cada valor sea el doble del arreglo original.
  2.  Muestra `puntos` y `puntosDoble` para verificar que el original no cambió. */

 let puntos = [10, 20, 30, 40];

 let puntosDoble = puntos.map((num) => {

      return num * 2;      
 }) 

 console.log("1. ",puntos);
 console.log("   ", puntosDoble); 

   //  -----------------------------------------------------------------------------------------------------------------------------

   /*

    Punto 2. 
   
    Lista de Nombres (map con objetos)

    Inicias con una lista de usuarios:
    let usuarios = [{id: 1, nombre: "Ana"}, {id: 2, nombre: "Luis"}, {id: 3, nombre: "Carlos"}];

    Tareas:

      1.  Crea un nuevo arreglo `nombres` que contenga solo los nombres de los usuarios (ej: `["Ana", "Luis", "Carlos"]`)./
 
        let nombres = ["Ana", "Luis", "Carlos"]; */

  
   let usuarios = [{id: 1, nombre: "Ana"}, {id: 2, nombre: "Luis"}, {id: 3, nombre: "Carlos"}];

    let nombres = usuarios.map(equis =>  equis.nombre );       /* Pregunta de esta instruccion Teacher y thank u! :   en este caso la variablle que use (equis)
                                                                     puedo usar esa por ejm de aqui en adelante para yo guiarme siempre o debo usar
                                                                        alguna palabra en especifico por digamos buenas practicas de programacion?  */
    console.log("2. ", nombres);
    
  //  -----------------------------------------------------------------------------------------------------------------------------

  /* 
      
     ## Ejercicio 3: Notas Aprobadas (filter)

      Inicias con una lista de calificaciones:
      let notas = [8, 5, 10, 3, 7];

     Tareas: 
       1.  Crea un nuevo arreglo `aprobadas` que contenga solo las notas que sean mayores o iguales a 6.  */

        let notas = [8, 5, 10, 3, 7];

        let aprobadas = notas.filter(equis => equis >= 6);

       console.log("3. ", aprobadas);

   //  -----------------------------------------------------------------------------------------------------------------------------

    /* 
       ## Ejercicio 4: Productos en Stock (filter con objetos)

        Inicias con un inventario:
        let productos = [{nombre: "Camisa", stock: 10}, {nombre: "Zapatos", stock: 0}, {nombre: "Pantalón", stock: 5}];

       Tareas:
         1.  Crea un nuevo arreglo `enStock` que contenga solo los productos cuyo `stock` sea mayor que 0. */
 

        let productos = [{nombre: "Camisa", stock: 10}, {nombre: "Zapatos", stock: 0}, {nombre: "Pantalón", stock: 5}];


         let enStock = productos.filter(equis => equis.stock > 0);
         console.log("4. ", enStock);
         
   //  -----------------------------------------------------------------------------------------------------------------------------

    /* 
       ## Ejercicio 5: Suma Total de Ventas (reduce)

       Inicias con una lista de ventas del día:
       let ventas = [150, 300, 100, 50];

       Tareas:
         1.  Calcula el valor `totalVentas` sumando todos los elementos del arreglo usando `reduce`. */

         let ventas = [150, 300, 100, 50];
   
           let totalVentas = ventas.reduce((acumulador, equis) => acumulador + equis, 0);

           console.log("5.   " +"El valor total en ventas es de: " +totalVentas);
           
   //  -----------------------------------------------------------------------------------------------------------------------------

   /* 
      ## Ejercicio 6: Aplanar un Arreglo (reduce)

     Inicias con una lista de listas:
     let grupos = [["Ana", "Luis"], ["Maria", "Juan"], ["Pedro"]];

     Tareas: 
       1.  Crea un nuevo arreglo `listaPlana` que contenga todos los nombres en un solo nivel (ej: `["Ana", "Luis", "Maria", "Juan", "Pedro"]`). 
            (Pista: `reduce` puede usar `concat`). */


       let grupos = [["Ana", "Luis"], ["Maria", "Juan"], ["Pedro"]];

         let listaPlana = grupos[0].concat(grupos[1], grupos[2]);

         console.log("6.   " + grupos + "");     // ¿¿ Me puedes explicar porque esto funciona estre comillas por respecto a lo que muestra en consola
         console.log("     " + listaPlana);     //  llegue a ese resultado jugando concatenando varios elementos dentro de los () del console.log con + ??
         
   //  -----------------------------------------------------------------------------------------------------------------------------

   /*
      ## Ejercicio 7: Crear una Copia (slice)
     
      Inicias con un arreglo:
      let original = ["A", "B", "C"];

     Tareas:
      1.  Crea un `clon` exacto del arreglo `original` usando `slice()`.
      2.  (Verificación) Modifica el `clon` (ej. `clon.push("D")`) y demuestra que `original` sigue intacto. */

      let original = ["A", "B", "C"];

      let clon = original.slice();

      clon.push("D");

      console.log("7.   " + "Arreglo Original:  " + original);
      console.log("    ", "Arreglo modificado con letra 'D' agregada: " + clon);
      
   //  -----------------------------------------------------------------------------------------------------------------------------

   /* 
      ## Ejercicio 8: Obtener el Podio (slice)

     Inicias con una lista de competidores:
     let competidores = ["Oro", "Plata", "Bronce", "Mención 1", "Mención 2"];

     Tareas:
      1.  Crea un nuevo arreglo `podio` que contenga solo los primeros 3 elementos (Oro, Plata, Bronce). */
    
      let competidores = ["Oro", "Plata", "Bronce", "Mención 1", "Mención 2"];

      let podioClon = competidores.slice(0, 3);
      console.log("8. ", podioClon);
      
     //  -----------------------------------------------------------------------------------------------------------------------------

     /* 
      ## Ejercicio 9: Unir Equipos (concat)
      
     Inicias con dos listas:
     let equipoDev = ["Ana", "Juan"];
     let equipoQA = ["Carlos", "Maria"];

     Tareas:
      1.  Crea un nuevo arreglo `equipoCompleto` que sea la unión de `equipoDev` y `equipoQA`. */

     let equipoDev = ["Ana", "Juan"];
     let equipoQA = ["Carlos", "Maria"];
     
     let equipoCompleto = equipoDev.concat(equipoQA);
     console.log("9. ", equipoCompleto);
     
     //  -----------------------------------------------------------------------------------------------------------------------------
     /* 
      ## Ejercicio 10: Añadir al Carrito (concat - Inmutable)
      
     Inicias con un carrito de compras:
     let carrito = ["Manzana"];

     Tareas:
      1.  Crea un `nuevoCarrito` que contenga los elementos del `carrito` original más "Pera".
      2.  Verifica que `carrito` original solo tiene "Manzana".*/
      
      let carrito = ["Manzana"];


      let nuevoCarrito = carrito.concat("Pera");

      console.log("10.", nuevoCarrito);
      console.log("  ", "Verificacion de arreglo carrito[] original: \n\n  ", " ", carrito);
    
     //  -----------------------------------------------------------------------------------------------------------------------------

     /* 
     ## Ejercicio 11: Verificar Permiso (includes)
     
       Inicias con los roles de un usuario:
        let roles = ["USER", "EDITOR"];

       Tareas:
       1.  Verifica si el usuario tiene el rol "ADMIN". (El resultado debe ser `false`).
       2.  Verifica si el usuario tiene el rol "EDITOR". (El resultado debe ser `true`).*/

        let roles = ["USER", "EDITOR"];

        let verificaADMIN = roles.includes("ADMIN");
        console.log("11. ", verificaADMIN);

        let verificaEDITOR = roles.includes("EDITOR");
        console.log("    ", verificaEDITOR);
 
       //  -----------------------------------------------------------------------------------------------------------------------------
        /*
           ## Ejercicio 12: Encontrar Usuario (find)

           Inicias con la lista de usuarios:
           let usuarios = [{id: 101, nombre: "Ana"}, {id: 102, nombre: "Luis"}, {id: 103, nombre: "Carlos"}];

           Tareas:
           1.  Encuentra el *objeto* completo del usuario cuyo `id` es 102. Guarda el resultado en `usuarioLuis`.*/

           let usuari0s = [{id: 101, nombre: "Ana"}, {id: 102, nombre: "Luis"}, {id: 103, nombre: "Carlos"}];

             let encontrar = usuari0s.find(equis => equis.id == 102);

             console.log("12.", encontrar);

       //  -----------------------------------------------------------------------------------------------------------------------------
          /*
           ## Ejercicio 13: Ordenar sin Mutar (Copia + sort)

           Inicias con una lista de invitados desordenada:
           let invitados = ["Zapata", "Alvarez", "Gomez", "Ber

           Tareas:
           1.  Crea un nuevo arreglo `invitadosOrdenados` ordenando la lista. **Importante: ¡No mutes el original!** (Pista: `[...invitados].sort()`).
           2.  Muestra `invitados` para verificar que sigue en el orden origina */

           let invitados = ["Zapata", "Alvarez", "Gomez", "Bernal"];

           let invitadosOrdenados = [...invitados].sort ();

           console.log("\n 13. ","Arreglo original sin modificar \n", "\n", invitados);
           console.log("", "\n      Arreglo con los nombres ordenados\n", " \n", invitadosOrdenados); 
          

         
             
             


          



