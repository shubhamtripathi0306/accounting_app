let express = require('express')
let mongoose = require('mongoose')
let multer = require('multer')
let route = require('../src/routes/route')
let app = express()

const PORT = 3000
let URI = "mongodb+srv://aniketflyweis:Flyweis@student.8yymmsy.mongodb.net/E-wallete?authSource=admin&replicaSet=atlas-v1orbd-shard-0&readPreference=primary&appname=Accounting_App%20Compass&ssl=true"
app.use(express.json())
app.use(multer().any())

mongoose.connect(URI, {
    useNewUrlParser: true
})
    .then(() => console.log('MongoDB is connected'))
    .catch(err => console.log(err.message))

app.use('/', route)

app.use((req, res) => res.status(400).send({ status: false, message: 'Invalid URL Please Check' }))
app.listen(PORT, () => console.log(`Express app is running on port ${PORT}`))