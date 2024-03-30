const Contact = require("../Models/contact-models");

const contactForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    res.status(200).send({
      msg: "Message sent successfully",
      contact,
    });
  } catch (error) {
    res.status(400).json({ msg: "Message not sent" });
  }
};

module.exports = { contactForm };
