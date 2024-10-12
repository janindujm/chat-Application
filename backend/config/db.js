const mongoose = require("mongoose");

const ConnectDB = async () => {

     try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MondoDBConnected : ${connect.connection.host}`);

    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = ConnectDB;