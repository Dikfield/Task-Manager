const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'dinash@outlook.com',
    subject: 'Thanks for  joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
}

const sendCancelEmail = (email, name)  => {
  sgMail.send({
    to: email,
    from: 'dinash@outlook.com',
    subject: 'We are sad you just unsubscribed',
    text: `Hello ${name}, Why have you canceled your account?`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
}