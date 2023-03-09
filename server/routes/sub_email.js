const express = require("express");
const subEmail = require("../controllers/sub_email");


const router = express.Router();

router.post("/", subEmail.subEmail);

module.exports = router;