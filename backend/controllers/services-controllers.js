const Services = require("../Models/services-models");

// Post services
const services_data = async (req, res) => {
  try {
    const { title, description, price, provider } = req.body;
    const services = await Services.create({
      title,
      description,
      price,
      provider,
    });

    res.status(200).send({
      msg: "Services Added",
      services,
    });
  } catch (error) {
    res.status(400).json({ msg: "Services not Added" });
  }
};




// Get services

const services = async (req, res) => {
    try {
      const response = await Services.find();
      if (!response) {
        return res.status(400).json({ msg: "No services found" });
      }
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ msg: "Error fetching services" });
    }
  };

module.exports = {  services,  services_data  };
