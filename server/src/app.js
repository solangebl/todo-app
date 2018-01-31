const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/items', (req, res) => {
  res.send(
    {
      items: [
      	{
      		title: "TO DO",
      		description: "description",
      		author: "sol"
      	}
      ],
    }
  )
})

app.listen(process.env.PORT || 8081);