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
        difficulty: difficulty,
      });
      await Question.save();
      res.send("Question Added");
    }
  });

});

router.post("/addComment", (req, res) => {
  var id = req.body.id;
  var user = req.body.user;
  var text = req.body.text;
  Questions.findById({ _id: id })
    .then(question => {
      if (question) {
        question.comments.push({
          user: user,
          text: text,
          likes: 0,
          dislikes: 0
        });
        return question.save();
      }
      throw new Error("Question not found");
    })
    .then(question => res.json(question))
    .catch(err => console.log(err));

});



router.post("/addReplies", (req, res) => {
  const Questionid = req.body.Questionid;
  const Commentid = req.body.Commentid;
  const user = req.body.user;
  const text = req.body.text;
  const reply = {
    user: user,
    text: text,
    likes: 0,
    dislikes: 0
  }

  Questions.findOneAndUpdate({
    _id: Questionid,
    'comments': { $elemMatch: { _id: Commentid } }
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

router.get("/getAllSubjects", (req, res) => {
  Questions.distinct("subject", (err, subjects) => {
    res.send(subjects);
  })
})
router.get("/getTopics", (req, res) => {
  // Questions.distinct("subject", (err, subjects) => {
  //   res.send(subjects);
  // })
  Questions.aggregate([
    { $match: { subject: "DSA" } },
    { $group: { _id: "$topic" } }
  ], (err, topics) => {
    if (err) {
      res.send(err);
    } else {
      res.send(topics);
    }
  });
})
router.get("/getComment", (req, res) => {

  Questions.findOne({ _id: "63bfb75435115e52a48a3f26" }, (err, question) => {
    if (err) return err;
    else {
      res.send(question.comments)
    }
  })
})
// 'comments': { $elemMatch: { _id: Commentid } }
// router.get("/getReplies", (req, res) => {
//   Questions.findOne({ _id: "63bfb75435115e52a48a3f26", 'comments': { $elemMatch: { _id: "63bfb7b635115e52a48a3f27" } } }, (err, question) => {
//     if (err) {
//       // console.log(err);
//       res.send(err)
//     } else {
//       // const comment = question.comments.find((c) => c._id === "63bfb7b635115e52a48a3f27");
//       // console.log(comment.replies);
//       res.send(question)
//     }
//   });
// })

// GET REQUEST
// router.get("/getBranch/", (req, res) => {
//   Questions.find(
//     (error, data) => {
//       if (error) {
//         res.json({ ok: "error" })
//         return next(error)
//       } else {
//         res.json(data)
//       }
//     })
// })



// // NOTE
// //   use req.params to get url 
// // main updation done just handle error now
// router.post("/addSubject/:branch", (req, res) => {
//   var subjectName = req.body.subjectName;
//   var subjectCode = req.body.subjectCode;
//   // console.log(subjectName);
//   var article = req.body.article;
//   var objFriends = { subjectName: subjectName, subjectCode: subjectCode, article: article };
//   Questions.findOneAndUpdate(
//     { branch: req.params.branch },
//     { $push: { subject: objFriends } },
//     function (error, success) {
//       if (error) {
//         console.log(error);
//       } else {
//         res.send("Done")
//         console.log(success);
//       }
//     });
// });

// // GET REQUEST
// router.get("/getBranch/:branch/:subject", (req, res) => {

//   // console.log(branch);
//   Questions.find({ branch: req.params.branch, "subject.subjectName": req.params.subject },
//     { "subject.$": 1 },
//     (error, data) => {
//       if (error) {
//         res.json({ ok: "error" })
//         return next(error)
//       } else {
//         res.json(data)
//       }
//     })
// })



// router.post("/addTopic", (req, res) => {

//   // console.log(req.body.branch);
//   var branch = req.body.initialValues.branch;
//   var subject = req.body.initialValues.subject;
//   var topicName = req.body.topicName;
//   var topicCode = req.body.topicCode;
//   var article = req.body.article;
//   var objFriends = { topicName: topicName, topicCode: topicCode, article: article };

//   Questions.findOneAndUpdate(
//     { branch: branch },
//     {
//       $push: {
//         'subject.$[el].topics': objFriends,
//       },
//     },
//     {
//       arrayFilters: [{
//         "el.subjectName": subject,

//       }]
//     },

//     function (error, success) {
//       if (error) {
//         console.log(error);
//       } else {
//         res.send("Done")
//         console.log(success);
//       }
//     }
//   )


// });
// router.post("/addSubTopic", (req, res) => {
//   console.log(req.body);
//   const SubTopicName = req.body.SubTopicName;
//   const SubTopicCode = req.body.SubTopicCode;
//   const article = req.body.article;
//   const branch = req.body.initialValues.branch;
//   const subject = req.body.initialValues.subject;
//   const topic = req.body.initialValues.topic;
//   var objFriends = { SubTopicName: SubTopicName, SubTopicCode: SubTopicCode, article: article };

//   Questions.findOneAndUpdate(
//     { branch: branch },
//     {
//       $push: {
//         'subject.$[el].topics.$[em].subTopics': objFriends,
//       },
//     },
//     {
//       arrayFilters: [{
//         "el.subjectName": subject,

//       }, {
//         "em.topicName": topic
//       }]
//     },

//     function (error, success) {
//       if (error) {
//         console.log(error);
//       } else {
//         res.send("Done")
//         console.log(success);
//       }
//     }
//   );


// });
// router.post("/`addQuestion`", (req, res) => {
//   var objFriends = { question: "what is question", questionCode: "CSEDSA1", option1: "option1", option2: "option2", option3: "option3", option4: "option4", correctOption: "option1", explaination: "kjejfde ejffh fjefejksdf ed fedjfe d explaination" };

//   Questions.findOneAndUpdate(
//     { branch: "CSE" },
//     {
//       $push: {
//         'subject.$[el].topics.$[em].subTopics.$[en].Questions': objFriends,
//       },
//     },
//     {
//       arrayFilters: [{
//         "el.subjectName": "fname3",
//       }, {
//         "em.topicName": "topic13"
//       }, {
//         "en.SubTopicName": "Subtopic13"
//       }
//       ]
//     },

//     function (error, success) {
//       if (error) {
//         console.log(error);
//       } else {
//         res.send("Done")
//         console.log(success);
//       }
//     }
//   )
// });

module.exports = router;
