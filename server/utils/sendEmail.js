const nodemailer = require("nodemailer");

const sendEmail = async (to, link) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Coderz Cafe" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Verify your email",
    html: `
      <h2>Verify your email</h2>
      <a href="${link}">Click here to verify</a>
    `,
  });
};





module.exports = sendEmail;
