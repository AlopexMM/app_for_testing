import { Buffer } from 'node:buffer'

class Autorization {
    constructor() {
        this.users = []
    }

    /**
     * Toma dos palabras y las codifica con base64
     * @param name nombre de usuario
     * @param lastname apellido del usuario
     * @returns base64 text
     */
    encrypt(name, lastname) {
        const buff = Buffer.from([name, lastname])
        const key = buff.toString('base64')
        return key
    }

    /**
     * Toma un encriptado de base64 y devuelve el texto
     * @param base64Text texto encriptado
     * @returns texto desencriptado
     */
    decrypt(base64Text){
        const buff = Buffer.from(base64Text, 'base64')
        return buff.toString('utf8')
    }

    /**
     * Obtiene del request el login y verifica que se encuentre en users
     * @param req datos del request
     * @param res datos del response
     * @param next objeto para continuar con el siguiente middelware
     */
    verifyUser(key) {
        if (this.users.includes(key)) return true
        return false
    }

    /**
     * Toma el key y lo agrega al listado de usuarios
     * @param key
     */
    addUser(key) {
        this.users.push(key)
    }

    /**
     * Quita la key del listado de usuarios
     * @param key
     */
    removeUser(key) {
        const newUsers = []
        this.users.forEach(user => {
            if (user != key ) newUsers.push(user)
        })
        this.users = newUsers
    }
}

export default Autorization