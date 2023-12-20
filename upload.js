const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: "",
});

cloudinary.v2.uploader.upload(
  "./gor_meet_sync_call.png",
  { public_id: "olympic_flag" },
  function (error, result) {
    console.log(result);
  }
);
