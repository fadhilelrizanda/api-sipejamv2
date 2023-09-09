const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    kb1: {
      required: true,
      type: Number,
    },
    kc1: {
      required: true,
      type: Number,
    },
    s1: {
      required: true,
      type: Number,
    },
    kb2: {
      required: true,
      type: Number,
    },
    kc2: {
      required: true,
      type: Number,
    },
    s2: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

const vehicleModel = mongoose.model("vehicle", vehicleSchema);

module.exports = {
  vehicleModel,
};
