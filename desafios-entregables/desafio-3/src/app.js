import 'dotenv/config'
import express from 'express'
import { ProductManager } from './ProductManager.js'

const app = express()

const path = './src/files/Products.json'
const productManager = new ProductManager(path)

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

app.get('/products/', async (req, res) => {
    let products = await productManager.getProducts()
    if(req.query.limit) {
        products = products.slice(0, req.query.limit)
    }
    res.send(products).status(200)
})

app.get('/products/:id', async (req, res) => {
    const data = await productManager.getProductById(req.params.id)
    if(!data.succsess)(res.status(500).json(data))
    if(data.data === undefined) {
        res.status(404).json({error: 'Producto no encontrado'})
    }else{
        res.status(200).json(data)
    }
})

export default app