const Twilio = require("twilio");

const accountSid = "TWILIO_ACCOUNT_SID";
const token = "TWILIO_TOKEN";

const twilio = new Twilio(accountSid, token);

twilio.messages.create({
  body: "Hello world",
  from: "+19202149640",
  to: "+12087572947"
}).then(message => console.log(message.sid))
  .catch(error => console.log(error));