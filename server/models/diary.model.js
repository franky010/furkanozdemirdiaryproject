const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const diarySchema = new Schema({
    diary: {
        type: String,
        required: true,
        unique: true,
        minlength: 100
    },
    day : {type : Number , required : true },
    month : {type : String , required : true },
    year : {type : String , required : true },
}, {
    timestamps: true,
});

const Diary = mongoose.model("diary", diarySchema);

module.exports = Diary;