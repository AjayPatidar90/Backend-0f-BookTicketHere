
const mongoose = require('mongoose');



const Database= mongoose.connect("mongodb+srv://ajaypatidar90989:@cluster0.lr0eb8u.mongodb.net/BookingDetail?retryWrites=true&w=majority").then((res)=>{
    console.log("Database is connect")
}).catch((err)=>{
    console.log(err)
})


module.exports = Database