import fs from 'fs/promises'

class ProductManager {

    constructor(path) {
        this.path = path
    }

    async addProduct(product) {
        try {
            await this.getProducts()
            if (this.products.length === 0) {
                product.id = 1
            } else {
                product.id = this.products[this.products.length - 1].id + 1
            }
            this.products.push(product)
            await fs.writeFile(this.path, JSON.stringify(this.products, null, '\t'))
            return product
        } catch (e) {
            throw new Error(e)
        }
    }

    async getProducts() {
        try {
            const data = await fs.readFile(this.path, 'utf-8')
            this.products = JSON.parse(data)
            return this.products
        } catch (e) {
            throw new Error(e)
        }
    }

    async getProductById(id) {
        try {
            await this.getProducts()
            const product = this.products.find(x => x.id === id)
            if (!product) return console.log('No existe el producto')
            return product
        } catch (e) {
            throw new Error(e)
        }
    }

    async updateProductById(id, product) {
        try {
            await this.getProducts()
            this.products.forEach(x => {
                if (x.id === id) {
                    x.title = product.title || x.title
                    x.description = product.description || x.description
                    x.price = product.price || x.price
                    x.thumbnail = product.thumbnail || x.thumbnail
                    x.code = product.code || x.code
                    x.stock = product.stock || x.stock
                }
            })

            await fs.writeFile(this.path, JSON.stringify(this.products, null, '\t'))
        } catch (e) {
            throw new Error(e)
        }
    }

    async deleteProduct(id) {
        try {
            await this.getProducts()
            if (this.products.find(x => x.id === id) === undefined) return console.log('No existe el producto')
            this.products = this.products.filter(x => x.id !== id)
            await fs.writeFile(this.path, JSON.stringify(this.products, null, '\t'))
        } catch (e) {
            throw new Error(e)
        }
    }
}

class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.id
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }
}

// ???? Test
console.log('???? DESAF??O ENTREGABLE - PROCESO DE TESTING')
console.log('--------------------------------------------------------------------------------------------------')
const path = './files/Products.json'

console.log('+ ???? Se crear?? una instancia de la clase ???ProductManager???:')
const productManager = new ProductManager(path)
console.log('--------------------------------------------------------------------------------------------------')

console.log('+ ???? Se llamar?? ???getProducts??? reci??n creada la instancia, debe devolver un arreglo vac??o []:')
let products = await productManager.getProducts()
console.log(products)
console.log('--------------------------------------------------------------------------------------------------')

console.log('+ ???? Se llamar?? al m??todo ???addProduct??? con los campos: \n' +
    'title: ???producto prueba??? \n' +
    'description:???Este es un producto prueba??? \n' +
    'price:200, \n' +
    'thumbnail:???Sin imagen??? \n' +
    'code:???abc123???, \n' +
    'stock:25 \n' +
    'El objeto debe agregarse satisfactoriamente con un id generado autom??ticamente SIN REPETIRSE')
await productManager.addProduct(new Product("Producto prueba", "Esto es un producto de prueba", 200, "Sin Imagen", "abc123", 25))
console.log('--------------------------------------------------------------------------------------------------')

console.log('+ ???? Se llamar?? el m??todo ???getProducts??? nuevamente,esta vez debe aparecer el producto reci??n agregado')
products = await productManager.getProducts()
console.log(products)
console.log('--------------------------------------------------------------------------------------------------')


console.log('+ ???? Se llamar?? al m??todo ???getProductById??? y se corroborar?? que devuelva el producto con el id especificado, \n' +
    'en caso de no existir, debe arrojar un error.')

console.log(await productManager.getProductById(1))
console.log('--------------------------------------------------------------------------------------------------')


console.log('+ ???? Se llamar?? al m??todo ???updateProduct??? y se intentar?? cambiar un campo de alg??n producto, \n' +
    'se evaluar?? que no se elimine el id y que s?? se haya hecho la actualizaci??n.')
await productManager.updateProductById(1, { title: 'Producto actualizado desde metodo updateProductById', price: 500 })
products = await productManager.getProducts()
console.log(products)
console.log('--------------------------------------------------------------------------------------------------')


console.log('+ ???? Se llamar?? al m??todo ???deleteProduct???, se evaluar?? que realmente se elimine el producto o \n' +
    'que arroje un error en caso de no existir.')
await productManager.deleteProduct(1)
products = await productManager.getProducts()
console.log(products)
console.log('--------------------------------------------------------------------------------------------------')

