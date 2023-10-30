const express = require("express");
const cors = require("cors");
const MongodbLive = require("./src/connection/connection")
const bookingRoute = require("./src/Router/MovieRoute")
const port = require("./src/connection/connection")



const app = express();
app.use(express.json());
app.use(cors());




app.use("/",bookingRoute);





app.listen(port,(error) => {
    error?console.log(error):console.log(`App listening on port ${port}!`)
} );



