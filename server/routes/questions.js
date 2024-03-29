const router = require('express').Router();
const question = require('../model/question');
// const passport = require('passport')
// const mongoose = require("mongoose");
const Questions = require("../model/question");


// ADD BRANCH
// POST REQUEST
router.post("/addQuestion", (req, res) => {
  // try {
  //   const question = req.body.question;
  //   const answer = req.body.answer;
  //   const option1 = req.body.option1;
  //   const option2 = req.body.option2;
  //   const option3 = req.body.option3;
  //   const option4 = req.body.option4;
  //   const subject = req.body.subject;
  //   const topic = req.body.topic;
  //   const subtopic = req.body.subtopic;
  //   const detailedSubTopic = req.body.detailedSubTopic;
  //   const difficulty = req.body.difficulty;
  //   doc = await Questions.findOne({ question: question });
  //   if (doc) {
  //     res.status(200).json({ msg: "Question Already Present In Database" })
  //   }
  //   else if (!doc) {
  //     const Question = new Questions({
  //       question: question,
  //       answer: answer,
  //       option1: option1,
  //       option2: option2,
  //       option3: option3,
  //       option4: option4,
  //       subject: subject,
  //       topic: topic,
  //       subTopic: subtopic,
  //       detailedSubTopic: detailedSubTopic,
  //       difficulty: difficulty,
  //     });
  //     Question.save();
  //     return res.status(200).json({ msg: "Question Added Succesfully" })

  //   }
  // } catch (error) {
  //   res.status(500).json({ msg: "Error while submitting the form" })
  // }
  const question = req.body.questions;
  const answer = req.body.answer;
  const option1 = req.body.option1;
  const option2 = req.body.option2;
  const option3 = req.body.option3;
  const option4 = req.body.option4;
  const subject = req.body.subject;
  const topic = req.body.topic;
  const subTopic = req.body.subTopic;
  const detailedSubTopic = req.body.detailedSubTopic;
  const difficulty = req.body.difficulty;

  console.log(req.body);
  Questions.findOne({ question: question }, async (err, doc) => {
    if (err) throw err;
    if (!doc) {
      const Question = new Questions({
        question: question,
        answer: answer,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        subject: subject,
        topic: topic,
        subTopic: subTopic,
        detailedSubTopic: detailedSubTopic,
        difficulty: difficulty,
      });
      await Question.save();
      return res.status(200).json({ msg: "Question Added SuccessFully" })

    }
    else if (doc) return res.status(200).json({ msg: " Question Already Exist" })
  });

});


//Get List Of All Subject
router.get("/getAllSubjects", async (req, res) => {
  await Questions.distinct("subject", (err, subjects) => {
    res.send(subjects);
  })
})

// Get List Of All Topic Of Given Subject
router.get("/getTopics/:subject", async (req, res) => {
  const subject = req.params.subject;
  await Questions.distinct("topic", { subject: subject }, (err, topic) => {
    if (err) {
      res.send(err);
    } else {
      res.send(topic);
    }
  })
})

// Get List Of All SubTopic Of Given Subject and Topic
router.get("/getSubTopics/:subject/:topic", async (req, res) => {

  const subject = req.params.subject;
  const topic = req.params.topic;
  await Questions.distinct("subTopic", { subject: subject, topic: topic }, (err, subTopic) => {
    if (err) {
      res.send(err);
    } else {
      res.send(subTopic);
    }
  })
})

// Get List Of All DetailedSubTopic Of Given Subject , Topic and Subtopic
router.get("/getDetailedSubTopics/:subject/:topic/:subTopic", async (req, res) => {
  // console.log(req.params.subTopic);
  const subject = req.params.subject;
  const topic = req.params.topic;
  const subTopic = req.params.subTopic;
  await Questions.distinct("detailedSubTopic", { subject: subject, topic: topic, subTopic: subTopic }, (err, detailedSubTopic) => {
    if (err) {
      res.send(err);
    } else {
      res.send(detailedSubTopic);
    }
  })
  // await Questions.aggregate([
  //   { $match: { subject: subject, topic: topic, subTopic: subTopic } },
  //   { $group: { _id: "$detailedSubTopic" } }
  // ], (err, topics) => {
  //   if (err) {
  //     res.send(err);
  //   } else {
  //     res.send(topics);
  //   }
  // });
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
