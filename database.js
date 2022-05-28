const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
function DbConnect() {
const uri = "mongodb+srv://ayushvaish2511:abcdefghi@cluster0.kuyfwsr.mongodb.net/travel-backend?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, }
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
    })
}
module.exports = DbConnect;