import { Buffer } from 'node:buffer'

class Authorization {
    /**
     * Toma dos palabras y las codifica con base64
     * @param name nombre de usuario
     * @param lastname apellido del usuario
     * @returns base64 text
     */
    encrypt(name: string, lastname: string) {
        return Buffer.from(`${name}:${lastname}`, 'utf8').toString('base64')
    }

    /**
     * Toma un encriptado de base64 y devuelve el texto
     * @param base64Text texto encriptado
     * @returns texto desencriptado
     */
    decrypt(base64Text: string): Array<string>{
        return Buffer.from(base64Text, 'base64').toString('utf8').split(':')
    }
}

export default Authorization