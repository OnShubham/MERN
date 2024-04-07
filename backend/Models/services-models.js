const { Schema, model } = require("mongoose");

const servicesSchema = new Schema({
  title: {
    type: String,
    require: true,
    
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  provider: {
    type: String,
    require: true,
  },
});

const Services = model("Services", servicesSchema);

module.exports = Services;
