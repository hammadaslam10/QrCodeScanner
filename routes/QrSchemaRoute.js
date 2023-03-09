const express = require("express");
const router = express.Router();
const { Verify } = require("../Controller/QrController");

// router.route("/BulkEntry").post(BulkEntry);
router.route("/Verify/:qrcode").get(Verify);

module.exports = router;
