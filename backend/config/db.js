const mongoose = require('mongoose')




const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Monodb connected successfully');
    } catch (error) {
        console.log('Mongodb Connection Failed', error);
        process.exit(1)
               
    }
}

module.exports = connectDb