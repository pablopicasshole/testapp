
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get("/route1", (req, res) => {
	let query1 = req.query["one"]
	let query2 = req.query["two"]

	res.status(200).send(`got one as ${query1} and got two as ${query2}`)

})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
