const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema (
    {
        name: {type: String, required: true},
        content: {type: String, required: true},
        recipe: {type: mongoose.Schema.Types.ObjectId, ref: "Recipe"}
    },
    {
        timestamps: true,
    }
);

const Review = mongoose.model("Review", reviewSchema);


module.exports = Review;

