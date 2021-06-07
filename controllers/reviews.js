const express = require("express");
const db = require("../models");
const router = express.Router();


/* reviews */
// render reviews at the bottom of each recipe

router.get("/:id", function (req, res) {
	db.Review.find({}, function (err, foundReviews) {
		if (err) return res.send(err);

		const context = { review: foundReviews };
		res.render("recipe", context);
	});
});

// create new reviews
router.post("/:id", function (req, res) {
    req.body.recipe=req.params.id
    db.Review.create(req.body, function (err, createdReview) {
      if (err) return res.redirect("/");
  
      db.Recipe.findById(createdReview.recipe).exec(function (err, foundRecipes) {
        if (err) res.send(err);
  
        foundRecipes.reviews.push(createdReview)
        foundRecipes.save()
      
      return res.redirect("/");
      });
    })
  });

// edit reviews
router.put("/:id", function (req, res) {
	db.Review.findByIdAndUpdate(
		req.params.id,
		{
			$set: {
        body: req.body.content
			},
		},
		{ new: true },
		function (err, updatedReview) {
			if (err) return res.send(err);
			return res.redirect("/");
		}
	);
});

// delete reviews
router.delete("/:id", function (req, res) {
	db.Review.findByIdAndDelete(req.params.id, function (err, deletedReview) {
		if (err) return res.send(err);

    return res.redirect("/");
	});
});

module.exports = router;