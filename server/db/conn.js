const mongoose = require("mongoose")


const Connection = (DB_URL) => {
    const URL = DB_URL;
    try {
        mongoose.connect(URL, {
            useNewUrlParser: true
        });
        console.log("Connected To Database");
    } catch (error) {
        console.log("error while loadind the data base", error);
    }
}

module.exports=Connection ;