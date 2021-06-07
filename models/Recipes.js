const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema (
    {
        name: {type: String, required: true},
        img: {type: String, required: true},
        ingredients: {type: String, required: true},
        description: {type: String, required: true},
        reviews: [{type: mongoose.Schema.Types.ObjectId, ref: "Review"}]
    },
    {
        timestamps: true,
    }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
