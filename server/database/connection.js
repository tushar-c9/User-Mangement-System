const mongoose = require('mongoose');

const MONGO_URI = "mongodb://localhost:27017/UserManagemntSystem";

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${MONGO_URI}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB