const mongoose =require('mongoose')
const colors = require('colors')

const dotenv= require('dotenv').config();

const {SECRET_KEY} = process.env;




const connectMonoDb= async () =>{
    try{ 
    await mongoose.connect(process.env.MONGOOSE_CONNECTION);
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log(`Error connecting in ${connectMonoDb}`.bgRed.white)
    }
}


module.exports={ SECRET_KEY:SECRET_KEY,connectMonoDb};