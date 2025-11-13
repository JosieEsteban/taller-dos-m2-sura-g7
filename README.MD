# Taller: Métodos No Mutables de Arreglos (Inmutabilidad)

Resuelve los siguientes problemas utilizando los métodos de arreglos no mutables. El objetivo es **nunca modificar el arreglo original**.

Utiliza principalmente: `map`, `filter`, `reduce`, `slice`, `concat`, `find`, `includes`.
// Utiliza principalmente: `map`, `filter`, `reduce`, `slice`, `concat`, `find`, `includes`.

## Instrucciones de desarrollo
* Forkear el repositorio Original
* Clonar el repositorio
* Crear una carpeta con el nombre de cada uno de ustedes
* Solucionar el taller

---

## Ejercicio 1: Duplicar Números (map)
Inicias con una lista de puntos:
`let puntos = [10, 20, 30, 40];`

Tareas:
1.  Crea un nuevo arreglo `puntosDoble` donde cada valor sea el doble del arreglo original.
2.  Muestra `puntos` y `puntosDoble` para verificar que el original no cambió.

---

## Ejercicio 2: Lista de Nombres (map con objetos)
Inicias con una lista de usuarios:
`let usuarios = [{id: 1, nombre: "Ana"}, {id: 2, nombre: "Luis"}, {id: 3, nombre: "Carlos"}];`

Tareas:
1.  Crea un nuevo arreglo `nombres` que contenga solo los nombres de los usuarios (ej: `["Ana", "Luis", "Carlos"]`).

---

## Ejercicio 3: Notas Aprobadas (filter)
Inicias con una lista de calificaciones:
`let notas = [8, 5, 10, 3, 7];`

Tareas:
1.  Crea un nuevo arreglo `aprobadas` que contenga solo las notas que sean mayores o iguales a 6.

---

## Ejercicio 4: Productos en Stock (filter con objetos)
Inicias con un inventario:
`let productos = [{nombre: "Camisa", stock: 10}, {nombre: "Zapatos", stock: 0}, {nombre: "Pantalón", stock: 5}];`

Tareas:
1.  Crea un nuevo arreglo `enStock` que contenga solo los productos cuyo `stock` sea mayor que 0.

---

## Ejercicio 5: Suma Total de Ventas (reduce)
Inicias con una lista de ventas del día:
`let ventas = [150, 300, 100, 50];`

Tareas:
1.  Calcula el valor `totalVentas` sumando todos los elementos del arreglo usando `reduce`.

---

## Ejercicio 6: Aplanar un Arreglo (reduce)
Inicias con una lista de listas:
`let grupos = [["Ana", "Luis"], ["Maria", "Juan"], ["Pedro"]];`

Tareas:
1.  Crea un nuevo arreglo `listaPlana` que contenga todos los nombres en un solo nivel (ej: `["Ana", "Luis", "Maria", "Juan", "Pedro"]`). (Pista: `reduce` puede usar `concat`).

---

## Ejercicio 7: Crear una Copia (slice)
Inicias con un arreglo:
`let original = ["A", "B", "C"];`

Tareas:
1.  Crea un `clon` exacto del arreglo `original` usando `slice()`.
2.  (Verificación) Modifica el `clon` (ej. `clon.push("D")`) y demuestra que `original` sigue intacto.

---

## Ejercicio 8: Obtener el Podio (slice)
Inicias con una lista de competidores:
`let competidores = ["Oro", "Plata", "Bronce", "Mención 1", "Mención 2"];`

Tareas:
1.  Crea un nuevo arreglo `podio` que contenga solo los primeros 3 elementos (Oro, Plata, Bronce).

---

## Ejercicio 9: Unir Equipos (concat)
Inicias con dos listas:
`let equipoDev = ["Ana", "Juan"];`
`let equipoQA = ["Carlos", "Maria"];`

Tareas:
1.  Crea un nuevo arreglo `equipoCompleto` que sea la unión de `equipoDev` y `equipoQA`.

---

## Ejercicio 10: Añadir al Carrito (concat - Inmutable)
Inicias con un carrito de compras:
`let carrito = ["Manzana"];`

Tareas:
1.  Crea un `nuevoCarrito` que contenga los elementos del `carrito` original más "Pera".
2.  Verifica que `carrito` original solo tiene "Manzana".

---

## Ejercicio 11: Verificar Permiso (includes)
Inicias con los roles de un usuario:
`let roles = ["USER", "EDITOR"];`

Tareas:
1.  Verifica si el usuario tiene el rol "ADMIN". (El resultado debe ser `false`).
2.  Verifica si el usuario tiene el rol "EDITOR". (El resultado debe ser `true`).

---

## Ejercicio 12: Encontrar Usuario (find)
Inicias con la lista de usuarios:
`let usuarios = [{id: 101, nombre: "Ana"}, {id: 102, nombre: "Luis"}, {id: 103, nombre: "Carlos"}];`

Tareas:
1.  Encuentra el *objeto* completo del usuario cuyo `id` es 102. Guarda el resultado en `usuarioLuis`.

---

## Ejercicio 13: Ordenar sin Mutar (Copia + sort)
Inicias con una lista de invitados desordenada:
`let invitados = ["Zapata", "Alvarez", "Gomez", "Bernal"];`

Tareas:
1.  Crea un nuevo arreglo `invitadosOrdenados` ordenando la lista. **Importante: ¡No mutes el original!** (Pista: `[...invitados].sort()`).
2.  Muestra `invitados` para verificar que sigue en el orden original.

---

## Ejercicio 14: Invertir sin Mutar (Copia + reverse)
Inicias con los pasos de una receta:
`let receta = ["Paso 1", "Paso 2", "Paso 3"];`

Tareas:
1.  Crea un nuevo arreglo `recetaInversa`. (Pista: `[...receta].reverse()`).
2.  Verifica que `receta` sigue en el orden original.

---

## Ejercicio 15: Eliminar sin Mutar (filter)
Inicias con una fila:
`let fila = ["Ana", "Luis", "Carlos", "Maria"];`

Tareas:
1.  "Luis" (índice 1) se va. Crea una `nuevaFila` sin Luis, usando `filter()`. (Pista: filtra por índice o por nombre).
2.  Verifica que `fila` original sigue teniendo a "Luis".

---

## Ejercicio 16: Insertar sin Mutar (slice + spread)
Inicias con la misma fila:
`let fila = ["Ana", "Luis", "Carlos", "Maria"];`

Tareas:
1.  "Jorge" (nuevo) se cuela después de "Ana" (en el índice 1). Crea una `nuevaFilaConJorge` usando `slice` y el operador *spread* (`...`) para insertarlo.
2.  (Pista: `[...fila.slice(0, 1), "Jorge", ...fila.slice(1)]`)
3.  Verifica que `fila` original no tiene a "Jorge".

---

## Ejercicio 17: Reemplazar sin Mutar (map)
Inicias con el estado de un tablero:
`let tablero = ["X", "O", "X"];`

Tareas:
1.  El jugador "O" (índice 1) comete un error y debe ser "X". Crea un `nuevoTablero` usando `map()` para cambiar el valor en ese índice.
2.  Verifica que `tablero` original sigue teniendo "O" en el medio.

---

## Ejercicio 18: Combo (filter y map)
Inicias con una lista de productos:
`let productos = [{nombre: "Papas", precio: 2}, {nombre: "Carne", precio: 15}, {nombre: "Leche", precio: 3}];`

Tareas:
1.  Crea un nuevo arreglo `productosCaros` que contenga solo los *nombres* de los productos que cuestan más de 4. (Resultado esperado: `["Carne"]`).
2.  (Pista: Encadena `filter` y luego `map`).

---

## Ejercicio 19: Añadir al Inicio (concat o spread)
Inicias con un feed de noticias:
`let feed = ["Noticia 1", "Noticia 2", "Noticia 3"];`

Tareas:
1.  Crea un `nuevoFeed` donde "Noticia Urgente" esté al inicio, seguida de las noticias del `feed` original. (Pista: `["Noticia Urgente"].concat(feed)` o `["Noticia Urgente", ...feed]`).

---

## Ejercicio 20: Desafío de Puntuación (Combinado)
Inicias con las puntuaciones de un juego:
`let puntuaciones = [50, 85, -10, 100, 0, 30];`

Tareas (encadenadas):
1.  Crea un arreglo `validas` filtrando las puntuaciones que no sean negativas (`>= 0`).
2.  Usando `validas`, crea un arreglo `bonificadas` donde cada puntuación válida se incrementa en 10 puntos (`map`).
3.  Usando `bonificadas`, calcula el `totalPuntos` (`reduce`).