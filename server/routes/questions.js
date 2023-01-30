const router = require('express').Router();
const question = require('../model/question');
// const passport = require('passport')
// const mongoose = require("mongoose");
const Questions = require("../model/question");


// ADD BRANCH
// POST REQUEST
router.post("/addQuestion", (req, res) => {
  const question = req.body.question;
  const answer = req.body.answer;
  const options = req.body.options;
  const subject = req.body.subject;
  const topic = req.body.topic;
  const subtopic = req.body.subtopic;
  const detailedSubTopic = req.body.detailedSubTopic;
  const difficulty = req.body.difficulty;

  Questions.findOne({ question: question }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("Question Already Exists");
    if (!doc) {
      const Question = new Questions({
        question: question,
        answer: answer,
        options: options,
        subject: subject,
        topic: topic,
        subTopic: subtopic,
        detailedSubTopic: detailedSubTopic,
        difficulty: difficulty,
      });
      await Question.save();
      res.send("Question Added");
    }
  });

});


//Get List Of All Subject
router.get("/getAllSubjects", async (req, res) => {
  await Questions.distinct("subject", (err, subjects) => {
    res.send(subjects);
  })
})

// Get List Of All Topic Of Given Subject
router.get("/getTopics", async (req, res) => {

  const subject = req.body.subject;
  await Questions.aggregate([
    { $match: { subject: subject } },
    { $group: { _id: "$topic" } }
  ], (err, topics) => {
    if (err) {
      res.send(err);
    } else {
      res.send(topics);
    }
  });
})

// Get List Of All SubTopic Of Given Subject and Topic
router.get("/getSubTopics", async (req, res) => {

  const subject = req.body.subject;
  const topic = req.body.topic;
  await Questions.aggregate([
    { $match: { subject: subject, topic: topic } },
    { $group: { _id: "$subTopic" } }
  ], (err, topics) => {
    if (err) {
      res.send(err);
    } else {
      res.send(topics);
    }
  });
})

// Get List Of All DetailedSubTopic Of Given Subject , Topic and Subtopic
router.get("/getDetailedSubTopics", async (req, res) => {

  const subject = req.body.subject;
  const topic = req.body.topic;
  const subTopic = req.body.subTopic;
  await Questions.aggregate([
    { $match: { subject: subject, topic: topic, subTopic: subTopic } },
    { $group: { _id: "$detailedSubTopic" } }
  ], (err, topics) => {
    if (err) {
      res.send(err);
    } else {
      res.send(topics);
    }
  });
})


// Add Comment to Post Of Given Id
router.post("/addComment", async (req, res) => {
  var questionId = req.body.questionId;
  var user = req.body.user;
  var text = req.body.text;
  Questions.findById({ _id: questionId })
    .then(question => {
      if (question) {
        question.comments.push({
          user: user,
          text: text,
          likes: 0,
          dislikes: 0
        });
        res.send("comment added")
        return question.save();
      }
      throw new Error("Question not found");
    })
    .catch(err => console.log(err));

});



// Add Reply to Post Of Given QuestionId and CommentId
router.post("/addReplies", (req, res) => {
  const questionId = req.body.questionId;
  const commentId = req.body.commentId;
  const user = req.body.user;
  const text = req.body.text;
  const reply = {
    user: user,
    text: text,
    likes: 0,
    dislikes: 0
  }

  Questions.findOneAndUpdate({
    _id: questionId,
    'comments': { $elemMatch: { _id: commentId } }
  }, {
    $push: { 'comments.$.replies': reply }
  }, (err, doc) => {
    if (err) {
      res.status(500).send(err);
    } else if (doc) {
      res.status(200).send("Reply added to the comment.");
    } else {
      res.status(404).send("Comment not found.");
    }
  })

});

router.get("/getComment", async (req, res) => {

  await Questions.findOne({ _id: "63bfb75435115e52a48a3f26" }, (err, question) => {
    if (err) return err;
    else {
      res.send(question.comments)
    }
  })
})

module.exports = router;
