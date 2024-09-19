const express = require('express')
const cors = require('cors')
const app = express();

var corOptions ={
    origin :'http://localhost:8081'
}

app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.json({ message :'hellow form api created by mathavan 1+'})
})

const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`server is rnng ${PORT}`)
    
})