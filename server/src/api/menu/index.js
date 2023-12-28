import express from "express";
import { RestrauntModel } from "../../database/restarunts";
import { ImageModel } from "../../database/images";
import { MenuModel } from "../../database/menu";
const Router = express.Router();

/**
  Route     /
  Des       create New Food
  Params    none
  Access    Public
  Method    POST
 */

Router.post("/new", async (req, res) => {
  try {
    const newMenu = await MenuModel.create(req.body);
    return res.status(200).json({ newMenu, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
/**
  Route     /list/:_id
  Des        get the menu list based on restarunt id
  Params    _id
  Access    Public
  Method    GET
 */
Router.get("/list/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menus = await RestrauntModel.findById(_id);

    if (!menus) {
      return res
        .status(404)
        .json({ error: "Menu not found for this restarunt" });
    }

    return res.status(200).json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
/**
  Route     /images/:_id
  Des       get all images of menus usingrestarunt id
  Params    _id
  Access    Public
  Method    GET
 */

Router.get("/images/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menuImages = await ImageModel.findById({ _id });

    if (!menuImages) {
      return res
        .status(404)
        .json({ error: "Menu Images not found for this restarunt" });
    }

    return res.status(200).json({ menuImages });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
