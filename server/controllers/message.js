const MessageModel = require('../model/message');
const { SendMail } = require('../utils/sendEmail');

exports.addMassage = addMassage = async (req, res) => {
  const message = req.body;
  const newMessage = new MessageModel(message);
  try {
    await newMessage.save();
    await SendMail(message.first_name, message.last_name, message.email, message.phone_number, message.p_type, message.p_budget, message.message);
    res.status(200).json(newMessage);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getMassage = getMassage = async (req, res) => {
  try {
    const massage = await MessageModel.find();

    res.status(200).json(massage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteMassage = deleteMassage = async (req, res) => {
  const { id } = req.params;
  await MessageModel.findByIdAndDelete(id);
  res.status(200).json(id);
};
