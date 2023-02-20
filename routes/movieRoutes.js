import express from "express";
import {
  addMovie,
  getAllMovies,
  getPaginated,
  getSingle,
} from "../controller/movieController.js";

const router = express.Router();

router.route("/get-all").get(getAllMovies);

router.route("/add-movie").post(addMovie);
router.route("/get-paginated").get(getPaginated);
router.route("/get-single").get(getSingle);

export default router;
