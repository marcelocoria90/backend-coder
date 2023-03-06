import fs from 'fs/promises'
import { User } from './User.js'
import { createSalt, encriptar } from './cripto.js'

export class UserManager {
    #users
    #path

    constructor(path) {
        this.#path = path
        this.#users = []
    }

    async #read() {
        const json = await fs.readFile(this.#path, 'utf-8')
        this.#users = JSON.parse(json)
    }

    async #write() {
        const newJson = JSON.stringify(this.#users, null, 2)
        await fs.writeFile(this.#path, newJson)
    }

    async addUser({ name, lastName, username, pass: sinEncriptar }) {
        console.log('Ingreso a addUser')
        await this.#read()

        console.log('Valido que exista usuario')
        const exist = this.#users.find(u => u.username === username)
        if (exist) {
            console.log('Usuario ya existe')
            throw new Error('Usuario ya existe')
        }

        console.log('Encripto contraseña')
        const salt = createSalt()
        const pass = encriptar(sinEncriptar, salt)
        const user = new User({ name, lastName, username, pass, salt })
        
        console.log('Agrego usuario ')
        this.#users.push(user)

        await this.#write()

        return user
    }

    async logIn({ username, pass }) {
        await this.#read()

        const user = this.#users.find(u => u.username === username)
        console.log('user: ', user)
        if (user.pass === encriptar(pass, user.salt)) {
            return user
        } else {
            throw new Error('Credenciales incorrectas')
        }
    }

    async reset() {
        this.#users = []
        await this.#write()
    }
}