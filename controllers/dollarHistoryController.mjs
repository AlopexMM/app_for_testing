import data from '../data/evolution.json' assert { type: 'json' }

export function index(req, res) {
    const records = data.filter( o => {
        const regex = /2023-[0-9]+-[0-9]+/g

        if(o.date.match(regex)) return o.date
    })
    const options = {
        title: "Historico del dolar blue",
        records: records
    }
    res.render('dollar_history/index', options)
}