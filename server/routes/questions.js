const router = require('express').Router();
// const passport = require('passport')
// const mongoose = require("mongoose");
const Questions = require("../model/question");


// ADD BRANCH
// POST REQUEST
router.post("/addBranch", (req, res) => {
  Questions.findOne({ branch: req.body.branch }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("Branch Already Exists");
    if (!doc) {
      var timeCreated = new Date();
      const Question = new Questions({
        branch: req.body.branch,
        branchCode: req.body.branchCode,
        userCreated: "anurag420",
        timeCreated: timeCreated,
        isAdmin: false,
      });
      await Question.save();
      res.send("Branch Created");
    }
  });

});

// GET REQUEST
router.get("/getBranch/", (req, res) => {
  Questions.find(
    (error, data) => {
      if (error) {
        res.json({ ok: "error" })
        return next(error)
      } else {
        res.json(data)
      }
    })
})



// NOTE
//   use req.params to get url 
// main updation done just handle error now
router.post("/addSubject/:branch", (req, res) => {
  var subjectName = req.body.subjectName;
  var subjectCode = req.body.subjectCode;
  console.log(subjectName);
  var article = req.body.article;
  var objFriends = { subjectName: subjectName, subjectCode: subjectCode, article: article };
  Questions.findOneAndUpdate(
    { branch: req.params.branch },
    { $push: { subject: objFriends } },
    function (error, success) {
      if (error) {
        console.log(error);
      } else {
        res.send("Done")
        console.log(success);
      }
    });
});

// GET REQUEST
router.get("/getBranch/:branch/:subject", (req, res) => {

  // console.log(branch);
  Questions.find({ branch: req.params.branch, "subject.subjectName": req.params.subject },
    { branch: req.params.branch, "subject.$": 1, },
    (error, data) => {
      if (error) {
        res.json({ ok: "error" })
        return next(error)
      } else {
        res.json(data)
      }
    })
})



router.post("/addTopic", (req, res) => {

  // console.log(req.body.initialValues.branch);
  var branch = req.body.initialValues.branch;
  var subject = req.body.initialValues.subject;
  var topicName = req.body.topicName;
  var topicCode = req.body.topicCode;
  var article = req.body.article;
  var objFriends = { topicName: topicName, topicCode: topicCode, article: article };

  Questions.findOneAndUpdate(
    { branch: branch },
    {
      $push: {
        'subject.$[el].topics': objFriends,
      },
    },
    {
      arrayFilters: [{
        "el.subjectName": subject,

      }]
    },

    function (error, success) {
      if (error) {
        console.log(error);
      } else {
        res.send("Done")
        console.log(success);
      }
    }
  )


});
router.post("/addSubTopic", (req, res) => {
  var objFriends = { SubTopicName: "Subtopic13", SubTopicCode: "Subtopic23", article: "Subtopic33" };

  Questions.findOneAndUpdate(
    { branch: "CSE" },
    {
      $push: {
        'subject.$[el].topics.$[em].subTopics': objFriends,
      },
    },
    {
      arrayFilters: [{
        "el.subjectName": "fname3",

      }, {
        "em.topicName": "topic13"
      }]
    },

    function (error, success) {
      if (error) {
        console.log(error);
      } else {
        res.send("Done")
        console.log(success);
      }
    }
  );


});
router.post("/`addQuestion`", (req, res) => {
  var objFriends = { question: "what is question", questionCode: "CSEDSA1", option1: "option1", option2: "option2", option3: "option3", option4: "option4", correctOption: "option1", explaination: "kjejfde ejffh fjefejksdf ed fedjfe d explaination" };

  Questions.findOneAndUpdate(
    { branch: "CSE" },
    {
      $push: {
        'subject.$[el].topics.$[em].subTopics.$[en].Questions': objFriends,
      },
    },
    {
      arrayFilters: [{
        "el.subjectName": "fname3",
      }, {
        "em.topicName": "topic13"
      }, {
        "en.SubTopicName": "Subtopic13"
      }
      ]
    },

    function (error, success) {
      if (error) {
        console.log(error);
      } else {
        res.send("Done")
        console.log(success);
      }
    }
  )
});

module.exports = router;
