import { Error } from "mongoose";
import { Movie } from "../model/Movie.js";

import ErrorHandler from "../utils/ErrorHandler.js";

export const getAllMovies = async (req, res, next) => {
  try {
    // get-paginated?page={page}&size={size}
    const data = await Movie.find({});

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addMovie = async (req, res, next) => {
  try {
    console.log(req.body);
    const {
      title,
      description,
      type,
      likes,
      comments,
      director,
      rating,
      actors,
      released,
    } = req.body;

    const existingMovie = await Movie.findOne({ title });

    if (existingMovie) {
      return next(new ErrorHandler("This movie already exists", 400));
    }

    const newMovie = new Movie({
      title,
      description,
      likes,
      comments,
      type,
      director,
      rating,
      actors,
      released,
    });

    await newMovie.save();

    res
      .status(200)
      .json({ success: true, message: "Movie added successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const search = async (req, res, next) => {
  try {
    const { title, offset } = req.query;

    const titleRegex = new RegExp(title);
    db.collection.find({ title: { $regex: titleRegex } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getPaginated = async (req, res, next) => {
  const { page, size } = req.query;
  try {
    const data = await Movie.find({})
      .skip((page - 1) * 10)
      .limit(size);
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getSingle = async (req, res, next) => {
  const { id } = req.query;
  try {
    const data = await Movie.findById(id);

    if (!data) return next(ErrorHandler("No movie found", 404));

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
