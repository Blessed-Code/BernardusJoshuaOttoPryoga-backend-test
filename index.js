const express = require('express')
const app = express();

app.use(express.json())
const muridRoute = require("./routes/muridRoute")

app.use('/murid', muridRoute)

app.listen(3000, () => {
    console.log("server running on port 3000");
    
})