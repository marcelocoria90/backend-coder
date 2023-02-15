
class ProductoManager {

    constructor() {
        this._products = []
    }

    addProduct(product) {
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            return '🚨 Faltan campos de objeto'
        }

        if (this._products.find(x => x.code === product.code)) {
            return '🔏 El codigo del producto ya existe'
        }

        product.id = this._products.length + 1
        this._products.push(product)

        return product

    }

    getProducts() {
        return this._products
    }

    getProductById(id) {
        const data = this._products.find(x => x.id === id)
        if (!data) return '🤡 Not found'
        return data
    }

}

const productoManager = new ProductoManager()

console.log('🧪 Testing getProducts')
console.log(productoManager.getProducts())
console.log('-------------------------------')

const product1 = {
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25
}

console.log('🧪 Testing addProduct 1:')
console.log(productoManager.addProduct(product1))
console.log('-------------------------------')

console.log('🧪 Testing getProducts:')
console.log(productoManager.getProducts())
console.log('-------------------------------')

const product2 = {
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25
}

console.log('🧪 Testing addProduct 2:')
console.log(productoManager.addProduct(product2))
console.log('-------------------------------')

console.log('🧪 Testing getProducts - no existente:')
console.log(productoManager.getProductById(3))
console.log('-------------------------------')

console.log('🧪 Testing getProducts - existente:')
console.log(productoManager.getProductById(1))
console.log('-------------------------------')

