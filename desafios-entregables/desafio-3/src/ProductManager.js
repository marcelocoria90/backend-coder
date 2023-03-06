import fs from 'fs/promises'

export class ProductManager {

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
            const products = await fs.readFile(this.path, 'utf-8')
            const productsObject = JSON.parse(products)
            const product = productsObject.find(x => x.id == id)
            return {
                succsess: true,
                data: product
            }
        } catch (e) {
            console.log(e)
            return {
                succsess: false,
                error: e.message
            }
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