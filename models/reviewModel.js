const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({
    productRating: {
        type: Number,
        min: 1,
        max: 5,
        required:  true
    },
    ratingTitle: {
        type: String,
        trim: true,
        required:  true,
        maxlength: 80,
    },
    ratingComment: {
        type: String,
        required:  true
    },
    userId:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    productId:{
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: true
    }
}, {timestamps: true})

ReviewSchema.index({productId: 1, userId: 1}, {unique: true})

module.exports = mongoose.model("Review", ReviewSchema)