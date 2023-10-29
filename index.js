const express = require('express')
const app = express()
const path = require('path')
const port = 3001

// const demoMiddleWare = (req, res, next) => {
//     console.log(req);
//     next();
// }

app.use(express.static(path.join(__dirname, "public")))
//app.use(demoMiddleWare);


app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
    //res.json({ "name": 50 });
})

app.get('/about/:name', (req, res) => {
    res.send('Name : ' + req.params.name)
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})