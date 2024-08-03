const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
var bodyParser = require('body-parser')

require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())


app.post('/api', async (req, res) => {

	const obj = req.body
	
	const url = 'https://copilot5.p.rapidapi.com/copilot';
	const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': process.env.API_KEY,
		'x-rapidapi-host': 'copilot5.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(
		{
		message: obj.prompt,
		conversation_id: null,
		tone: 'BALANCED',
		markdown: false,
		photo_url: null
		}
	)
		
	
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
  	res.send(result)
} catch (error) {
	console.error(error);
	res.send(error)
}
	
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})