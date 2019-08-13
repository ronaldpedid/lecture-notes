const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail');
const sendGridKey = "SEND_GRID_KEY";

sgMail.setApiKey(sendGridKey);

async function main() {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    }
  })

  const email = {
    from: '"Aaron Robinson" <test@testing.com>',
    to: '"Aaron" <aaronlrobinson@gmail.com>',
    subject: "Sending with Twilio SendGrid is Fun",
    html: "<b>Congratulations!!!!</b>"
  }

  sgMail.send(email, false, (err, message) => { console.log(err, message) });

  const info = await transporter.sendMail(email);

  console.log(info.messageId);

  console.log(nodemailer.getTestMessageUrl(info));
}

main();