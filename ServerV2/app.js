const express = require('express')
const app = express()
const cors = require('cors')
const activateDB = require('./config/activateDB')
require('dotenv').config()
const userRoutes = require('./routes/UserRoutes')
const sessionRoute = require('./routes/SessionRoute')
const categoryRoute = require('./routes/CategoryRoute')
const docsRoute = require('./routes/DocumentRoute')



const port = process.env.PORT || 8080

app.use(express.json())
app.use(cors({
    origin : '*'
}))

app.use('/api/user',userRoutes)
app.use('/api/session',sessionRoute)
app.use('/api/cat',categoryRoute)
app.use('/api/docs',docsRoute)



const start = ()=>{
    activateDB(process.env.MONGOO_URI)
    .then(()=>{
        app.listen(port,()=>{
            console.log(`server is listening to the port ${port}`)
        })
    }).catch((err)=>{
        console.log(err)
    })
}


start()