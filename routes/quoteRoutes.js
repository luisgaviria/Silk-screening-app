const sgMail = require("@sendgrid/mail");
const keys = require("../config/keys");
sgMail.setApiKey(keys.sendGridKey);

module.exports = (app) => {
  app.post("/api/quote/send", (req, res, next) => {
    try {
      const body = req.body;
      const file = req.files.image;
      const file_buffer = file.data.toString("base64");
      // console.log(file_buffer);
      const msg = {
        to: "appsactivewear@gmail.com",
        from: "appsactivewear@gmail.com",
        subject: body.title,
        text: `Message: ${body.message} \n\n Name: ${body.name} \n Email: ${body.email} \n Phone Number: ${body.phone_number}`,
        attachments: [
          {
            content: file_buffer,
            filename: file.name,
            type: file.mimetype,
            disposition: "attachment",
          },
        ],
      };

      sgMail
        .send(msg)
        .then(() => {
          res.status(200).json({
            message: "Succesfully sent email",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      const body = req.body;
      const msg = {
        to: "appsactivewear@gmail.com",
        from: "appsactivewear@gmail.com",
        subject: body.title,
        text: `Message: ${body.message} \n\n Name: ${body.name} \n Email: ${body.email} \n Phone Number: ${body.phone_number}`,
      };

      sgMail
        .send(msg)
        .then(() => {
          res.status(200).json({
            message: "Succesfully sent email",
          });
        })
        .catch((err) => {
          console.log(err.response.body);
          // console.log(err.oJSON().body);
        });
    }
  });
};
