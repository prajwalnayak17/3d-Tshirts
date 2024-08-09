import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

dotenv.config() 

import imgAPI_Router from './routes/imgAPI.js';

const app = express()

app.use(cors())
app.use(express.json({limig: "50mb"}))

app.use('/api/img', imgAPI_Router)

app.get('/', (req,res) => {
    res.status(200).json({messgae: "Hello from DALL.E"})
})

app.listen(8080, ()=> console.log('Server has started in port 8080'))

