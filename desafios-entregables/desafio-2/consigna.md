
### Manejo de archivos
### Consigna

+ Realizar una clase de nombre “ProductManager”, el cual permitirá trabajar con múltiples productos. 
Éste debe poder agregar, consultar, modificar y eliminar un producto y manejarlo en persistencia de archivos (basado en entregable 1).

* Aspectos a incluir:

1. 🗳️ La clase debe contar con una variable this.path, el cual se inicializará desde el constructor y debe recibir la ruta a trabajar desde el momento de generar su instancia.

2. 🗳️ Debe guardar objetos con el siguiente formato:
    - id (se debe incrementar automáticamente, no enviarse desde el cuerpo)
    - title (nombre del producto)
    - description (descripción del producto)
    - price (precio)
    - thumbnail (ruta de imagen)
    - code (código identificador)
    - stock (número de piezas disponibles)

3. 🗳️ Debe tener un método addProduct el cual debe recibir un objeto con el formato previamente especificado, asignarle un id autoincrementable y guardarlo en el arreglo (recuerda siempre guardarlo como un array en el archivo).

4. 🗳️ Debe tener un método getProducts, el cual debe leer el archivo de productos y devolver todos los productos en formato de arreglo.

5. 🗳️ Debe tener un método getProductById, el cual debe recibir un id, y tras leer el archivo, debe buscar el producto con el id especificado y devolverlo en formato objeto.

6. 🗳️ Debe tener un método updateProduct, el cual debe recibir el id del producto a actualizar, así también como el campo a actualizar (puede ser el objeto completo, como en una DB), y debe actualizar el producto que tenga ese id en el archivo. 
***NO DEBE BORRARSE SU ID***

7. 🗳️ Debe tener un método deleteProduct, el cual debe recibir un id y debe eliminar el producto que tenga ese id en el archivo.

## Formato del entregable
💀 Archivo de javascript con el nombre ProductManager.js

## Proceso de testing de este entregable 
🧪 DESAFÍO ENTREGABLE - PROCESO DE TESTING
---

- Manejo de archivos:
+ 🧪 Se creará una instancia de la clase “ProductManager” 👽

+ 🧪 Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío [] 👽

+ 🧪 Se llamará al método “addProduct” con los campos:
        title: “producto prueba”
        description:”Este es un producto prueba”
        price:200,
        thumbnail:”Sin imagen”
        code:”abc123”,
        stock:25
    El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE

+ 🧪 Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

+ 🧪 Se llamará al método “getProductById” y se corroborará que devuelva el producto con el id especificado, en caso de no existir, debe arrojar un error.

+ 🧪 Se llamará al método “updateProduct” y se intentará cambiar un campo de algún producto, se evaluará que no se elimine el id y que sí se haya hecho la actualización.

+ 🧪 Se llamará al método “deleteProduct”, se evaluará que realmente se elimine el producto o que arroje un error en caso de no existir.
