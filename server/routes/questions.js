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
router.get("/getBranch", (req, res) => {
  Questions.find((error, data) => {
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
router.post("/addSubject", (req, res) => {
  var objFriends = { subjectName: "CSE22", subjectCode: "CSE2CODE2", article: "CSE2Article2" };
  Questions.findOneAndUpdate(
    { branch: "CSE2" },
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


router.post("/addTopic", (req, res) => {
  var objFriends = { topicName: "topic13", topicCode: "topic23", article: "topic33" };

  Questions.findOneAndUpdate(
    { branch: "CSE" },
    {
      $push: {
        'subject.$[el].topics': objFriends,
      },
    },
    {
      arrayFilters: [{
        "el.subjectName": "fname3",

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
