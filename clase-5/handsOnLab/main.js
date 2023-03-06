import { UserManager } from './src/userManager.js'
import colors from 'colors'

const userManager = new UserManager('./database/users.json')
await userManager.reset()

// try {
    const user = await userManager.addUser({
        name: 'Juan',
        lastName: 'Perez',
        username: 'jperez',
        pass: '123456'
    })

    console.log('Const USER:')
    console.log(user)


    const loggedUser = await userManager.logIn({
        username: 'jperez',
        pass: '123456'
    })

    console.log(loggedUser)
// } catch (e) {
//     console.log(e.message)
// }

console.log(colors.magenta('Fin del programa'))
