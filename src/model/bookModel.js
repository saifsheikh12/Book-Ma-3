const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.ObjectId
const bookSchema =new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    excerpt: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: objectId,
        required: true,
        ref: "User",
        trim: true
    },
    ISBN: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    subcategory: {
        type:String,
        required: true,
        trim: true
    },
    reviews: {
        type: Number,
        default: 0,
        },

    deletedAt: {
        type: Date
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    releasedAt: {
        type: String,
       required: true,
       format: "YYYY-MM-DD" ,
      
    },
    bookCover:{
        type:String
    }

}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema)