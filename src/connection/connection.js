
const mongoose = require('mongoose');
require('dotenv').config()

const MongodbLive = process.env.MONGOOSE_URI;


const port = process.env.PORT;


 mongoose.connect(MongodbLive).then((res)=>{
    console.log("Database is connect")
}).catch((err)=>{
    console.log(err)
})


module.exports = MongodbLive
module.exports = port


