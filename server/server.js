const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = {
    origin: ["https://localhost:5173/facivon.ico"]
}

app.use(cors('*'))

app.get('/api', (req, res) => {
    res.json({
        'games': ["Dark Souls", "Dark Souls II", "Dark Souls III", "Sekiro"]
    })
})

app.listen(3000, () => {
    console.log("server running on port 3000");
    
})