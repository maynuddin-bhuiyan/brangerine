const SubEmailModel = require('../model/sub_email');
const { SubEmail } = require('../utils/sendEmail');

exports.subEmail = subEmail = async (req, res) => {
  const subEmail = req.body;
  const newSubEmail = new SubEmailModel(subEmail);
  try {
    await newSubEmail.save();
    await SubEmail(subEmail.email);
    res.status(200).json(newSubEmail);
  } catch (error) {
    res.status(500).json(error);
  }
};
