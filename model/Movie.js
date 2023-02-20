import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },

  likes: {
    type: String,
  },
  comments: {
    type: String,
  },
  type: {
    type: String,
  },
  director: {
    type: String,
  },
  rating: {
    type: Number,
  },
  actors: {
    type: String,
  },
  released: {
    type: String,
    validate: {
      validator: function (value) {
        // Check if value is a valid year with length of 4
        return /^\d{4}$/.test(value);
      },
      message: (props) => `${props.value} is not a valid year!`,
    },
  },
});

export const Movie = mongoose.model("Movie", MovieSchema);
