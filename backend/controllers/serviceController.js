const Service = require("../models/serviceModel");

exports.createService = async (req, res) => {
  console.log("Request body:", req.body);
  try {
    const {
      title,
      shortDescription,
      fullDescription,
      category,
      price,
      duration, 
    } = req.body;

    // Check if thumbnail file was uploaded
    const thumbnail = req.file ? req.file.filename : null;

    const newService = new Service({
      title,
      shortDescription,
      fullDescription,
      category,
      price: parseFloat(price),
      duration,
      thumbnail, // Save only the filename or relative path
    });

    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    console.error("Error creating service:", error);
    res.status(500).json({ message: "Error creating service", error });
  }
};

exports.getServices = async (req, res) => {
  console.log("I am here");
  try {
    const services = await Service.find();
    console.log("Fetched services:", services);
    res.status(200).json(services);
  } catch (error) {
    console.error("Get services failed:", error);
    res.status(500).json({ message: "Failed to get services" });
  }
};
