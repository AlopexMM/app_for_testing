/**
 * Verifica el codigo de la tarjeta de credito
 * @param cc 
 * @returns 
 */
export default async function verifyCreditCard(cc: string) {
    let even = 0
    let odd = 0
    let total = 0
    for(let i = 0; i < cc.length; i++) {
        if(i % 2 == 0) {
            let e = parseInt(cc[i]) * 2
            if (e.toString().length > 1) {
                let es = e.toString().split('')
                es.forEach( value => {
                    even += parseInt(value)
                })
            } else even += e
        } else odd += parseInt(cc[i])
    }
    total = even + odd
    if (total % 10 == 0) return true
    return false
}