const router = require("express").Router();
let Diary = require("../models/diary.model");

router.route("/").get((req,res) => {
    Diary.find()
        .then(diaries => res.json(diaries))
        .catch(err => res.status(400).json("error : " + err));
});

router.route("/add").post((req,res) => {
    const diary = req.body.diary;
    const day = req.body.day;
    const month = req.body.month;
    const year = req.body.year;

    const newDiary = new Diary({
        diary,
        day,
        month,
        year
    });
    
    newDiary.save()
        .then(() => res.json("dairy added!"))
        .catch(err => res.status(400).json("error : " + err));
});

router.route("/update/:id").post((req,res) => {
    Diary.findById(req.params.id)
        .then(diary => {
            diary.diary = req.body.diary;
            diary.day = req.body.day;
            diary.month = req.body.month;
            diary.year = req.body.year;

            diary.save()
                .then(() => res.json("diary updated"))
                .catch(err => res.status(400).json("error : " + err));
        })
        .catch(err => res.status(400).json("error : " + err));
});

router.route("/:id").get((req,res) => {
    Diary.findById(req.params.id)
        .then(diary => res.json(diary))
        .catch(err => res.status(400).json("error : " + err));
});

router.route("/:id").delete((req , res ) => {
    Diary.findByIdAndDelete(req.params.id)
        .then(() => res.json("diary deleted"))
        .catch(err => res.status(400).json("error : " + err));
});

module.exports = router;