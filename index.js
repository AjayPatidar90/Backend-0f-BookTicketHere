const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const Database = require("./src/connection/connection")

const bookingRoute = require("./src/Router/MovieRoute")




app.use(express.json());
app.use(cors());



    // creating an api and seperating it.
app.get("/", async (req, res) => {
    res.send("Made with from OUR TEAM")
})

app.use("/",bookingRoute);



// listening backend on a port.
const port = process.env.PORT || 8080;
app.listen( port, (error) => {
    error?console.log(error):console.log(`App listening on port ${port}!`)
} );



