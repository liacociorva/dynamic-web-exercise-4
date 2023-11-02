// how you call express
const express = require('express');
// creating an app that calls express
const app = express();
// setting port for server
const port = 4000;
// 

const indexRoute = require("./routes/index");
const aboutRoute = require("./routes/about")

app.use(express.static('public'));

app.use('/', indexRoute);
app.use("/about", aboutRoute);

app.listen(port, () => {
    console.log(`Example app listening to port ${port}`)
})