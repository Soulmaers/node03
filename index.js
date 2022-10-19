
const http = require('http')
const { units, city } = require('./config')



const myAPIKey = process.env.myAPIKey;

const url = `http://api.weatherstack.com/current?access_key=${myAPIKey}&query=${city}&units=${units}`

http.get(url, (res) => {
    const { status } = res
    if (status !== 200) {
        console.log(`ошибка: ${status}`)
        return
    }
    res.setEncoding('utf8')
    let data = ''
    res.on('data', (chunk) => {
        data += chunk
    })
    res.on('end', () => {
        let parseData = JSON.parse(data)
        console.log(parseData)
    })
}).on('error', (err) => {
    console.error(err);
})

