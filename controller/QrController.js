const Trackerror = require("../Middleware/TrackError");
const HandlerCallBack = require("../Utils/HandlerCallBack");
const QrSchema = require("../models/QRModel");
// const Data = require("../Utils/LoadQrSchema");
// exports.BulkEntry = Trackerror(async (req, res, next) => {
//   let data = [];
//   let entry;
//   Data.map(async (single) => {
//     entry = await QrSchema.create({
//       Recordid: single.id,
//       QrCode: single.code,
//       Used: single.used,
//     });
//     data.push(entry);
//     entry = null;
//   });
//   res.status(200).json({
//     data,
//   });
// });
exports.Verify = Trackerror(async (req, res, next) => {
  let data = await QrSchema.findOne({ QrCode: req.params.qrcode });
  if (data) {
    if (data.Used == false) {
      res.status(200).json({
        success: true,
        message: "welcome",
        data,
      });
      await QrSchema.findOneAndUpdate(
        { QrCode: req.params.qrcode },
        { Used: true },
        {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        }
      );
    } else {
      res.status(200).json({
        success: true,
        message: "you already used that ",
      });
    }
  } else {
    res.status(200).json({
      success: false,
      message: "invalid qr code ",
    });
  }
});
