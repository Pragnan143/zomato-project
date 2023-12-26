import express from "express";
import passport from "passport";
import { ReviewModel } from "../../database/reviews";
const Router = express.Router();

/**
  Route     /:resId
  Des       Get all reviews of particular restarunt  based on id
  Params    resId
  Access    Public
  Method    GET
 */

Router.get("/:resId", async (req, res) => {
  try {
    const { resId } = req.params;
    const reviews = await ReviewModel.find({ restarunts: resId }).sort({
      createdAt: -1,
    });

    return res.json({ reviews });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
  Route     /new
  Des       Creating New restarunt and review
  Params    
  Access    Public
  Method    POST
 */

Router.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { _id } = req.user;
      const { reviewData } = req.body;

      const review = await ReviewModel.create({ ...reviewData, user: _id });

      return res.json({ review });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/**
 * Route     /delete/:id
 * Des       Delete a specific review
 * Params    _id
 * Access    Private
 * Method    Delete
 */
Router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { user } = req;
      const { id } = req.params;

      const data = await ReviewModel.findOneAndDelete({
        _id: id,
        user: user._id,
      });

      if (!data) {
        return res.json({ message: "Review was not deleted" });
      }

      return res.json({ message: "Successfully deleted the review.", data });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

export default Router;
