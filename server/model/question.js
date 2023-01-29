const mongoose = require("mongoose");
// const reqString = {
//     type: String
// }


// //TODO add like and dislike


// // const optionSchema = new mongoose.Schema({
// //     option1: String,
// //     option2: String,
// //     option3: String,
// //     option4: String
// // })


// const questionSchema = new mongoose.Schema({
//     question: String,
//     questionCode: String,
//     option1: String,
//     option2: String,
//     option3: String,
//     option4: String,
//     correctOption: String,
//     explaination: String,

// });

// const subTopicsSchema = new mongoose.Schema({
//     SubTopicName: String,
//     SubTopicCode: String,
//     article: String,
//     Questions: [questionSchema]
// });

// const topicsSchema = new mongoose.Schema({
//     topicName: String,
//     topicCode: String,
//     article: String,
//     subTopics: [subTopicsSchema]
// });

// const subjectSchema = new mongoose.Schema({
//     subjectName: String,
//     subjectCode: String,
//     article: String,
//     topics: [topicsSchema]

// });

// const questions = new mongoose.Schema({
//     branch: String,
//     branchCode: String,
//     userCreated: String,
//     timeCreated: Date,
//     isAdmin: Boolean,
//     subject: [subjectSchema]
// });




const questions = new mongoose.Schema({
    question: {
        type: String,
        // required: true
    },
    options: {
        type: [String],
        // required: true
    },
    answer: {
        type: String,
        // required: true
    },
    subject: {
        type: String,
        // required: true
    },
    topic: {
        type: String,
        // required: true
    },
    subTopic: {
        type: String,
        // required: true
    },
    detailedSubTopic: {
        type: String,
        // required: true
    },
    difficulty: {
        type: String,
        // required: true
    },
    likes: {
        type: Number,
        // required: true,
        default: 0
    },
    dislikes: {
        type: Number,
        // required: true,
        default: 0
    },
    comments: [{
        user: {
            type: String,
            // required: true
            // ref: 'User'
        },
        text: {
            type: String,
            // required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        likes: {
            type: Number,
            // required: true,
            default: 0
        },
        dislikes: {
            type: Number,
            // required: true,
            default: 0
        },
        "replies": [
            {
                "user": String,
                "text": String,
                "date": {
                    type: Date,
                    default: Date.now
                },
                "likes": Number,
                "dislikes": Number
            }
        ]
    }],
    date_added: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model("Questions", questions);
