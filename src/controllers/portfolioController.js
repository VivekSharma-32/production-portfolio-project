const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

// transport function
const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.API_SENDGRID,
    },
  })
);

// send email function
const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // validation
    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: "Please provide all fields !",
      });
    }

    // email meta type
    transporter.sendMail({
      to: "vivek.sharma1275@gmail.com",
      from: "vivek.sharma1275@gmail.com",
      subject: "Regarding MERN Portfolio App",
      html: `
        <h5>Detail Information</h5>
        <ul>
        <li><p>Name: ${name}</p></li>
        <li><p>Email: ${email}</p></li>
        <li><p>Message: ${msg}</p></li>
        </ul>
      `,
    });

    return res.status(200).send({
      success: true,
      message: "Your message sent successfully !",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
