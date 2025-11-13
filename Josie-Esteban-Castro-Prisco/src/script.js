
// Taller

  /* Punto 1. 
  
  Tareas:

  1.  Crea un nuevo arreglo `puntosDoble` donde cada valor sea el doble del arreglo original.
  2.  Muestra `puntos` y `puntosDoble` para verificar que el original no cambió. */

 let puntos = [10, 20, 30, 40];

 let puntosDoble = puntos.map((num) => {

      return num * 2;      
 }) 

 console.log(puntos);
 console.log(puntosDoble); 

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
    console.log(nombres);
    
  //  -----------------------------------------------------------------------------------------------------------------------------

  /* 
      
     ## Ejercicio 3: Notas Aprobadas (filter)

      Inicias con una lista de calificaciones:
      let notas = [8, 5, 10, 3, 7];

     Tareas: 
       1.  Crea un nuevo arreglo `aprobadas` que contenga solo las notas que sean mayores o iguales a 6.  */

        let notas = [8, 5, 10, 3, 7];

        let aprobadas = notas.filter(equis => equis >= 6);

       console.log(aprobadas);

   //  -----------------------------------------------------------------------------------------------------------------------------

    /* 
       ## Ejercicio 4: Productos en Stock (filter con objetos)

        Inicias con un inventario:
        let productos = [{nombre: "Camisa", stock: 10}, {nombre: "Zapatos", stock: 0}, {nombre: "Pantalón", stock: 5}];

       Tareas:
         1.  Crea un nuevo arreglo `enStock` que contenga solo los productos cuyo `stock` sea mayor que 0. */
 

        let productos = [{nombre: "Camisa", stock: 10}, {nombre: "Zapatos", stock: 0}, {nombre: "Pantalón", stock: 5}];


         let enStock = productos.filter(equis => equis.stock > 0);
         console.log(enStock);
         
   //  -----------------------------------------------------------------------------------------------------------------------------

    /* 
       ## Ejercicio 5: Suma Total de Ventas (reduce)

       Inicias con una lista de ventas del día:
       let ventas = [150, 300, 100, 50];

       Tareas:
         1.  Calcula el valor `totalVentas` sumando todos los elementos del arreglo usando `reduce`. */

         let ventas = [150, 300, 100, 50];
   
           let totalVentas = ventas.reduce((acumulador, equis) => acumulador + equis, 0);

           console.log("El valor total en ventas es de: " +totalVentas);
           
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

         console.log(grupos + "");     // ¿¿ Me puedes explicar porque esto funciona estre comillas por respecto a lo que muestra en consola
         console.log(listaPlana);     //  llegue a ese resultado jugando concatenando varios elementos dentro de los () del console.log con + ??
         
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

      console.log("Arreglo Original:  " + original);
      console.log("Arreglo modificado con letra 'D' agregada: " + clon);
      
   //  -----------------------------------------------------------------------------------------------------------------------------

    