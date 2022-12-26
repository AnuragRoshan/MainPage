const mongoose = require("mongoose");
const reqString = {
    type: String
}


//TODO add like and dislike


// const optionSchema = new mongoose.Schema({
//     option1: String,
//     option2: String,
//     option3: String,
//     option4: String
// })


const questionSchema = new mongoose.Schema({
    question: String,
    questionCode: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    correctOption: String,
    explaination: String,

});

const subTopicsSchema = new mongoose.Schema({
    SubTopicName: String,
    SubTopicCode: String,
    article: String,
    Questions: [questionSchema]
});

const topicsSchema = new mongoose.Schema({
    topicName: String,
    topicCode: String,
    article: String,
    subTopics: [subTopicsSchema]
});

const subjectSchema = new mongoose.Schema({
    subjectName: String,
    subjectCode: String,
    article: String,
    topics: [topicsSchema]

});

const questions = new mongoose.Schema({
    branch: String,
    branchCode: String,
    userCreated: String,
    timeCreated: Date,
    isAdmin: Boolean,
    subject: [subjectSchema]
});






module.exports = mongoose.model("Questions", questions);
