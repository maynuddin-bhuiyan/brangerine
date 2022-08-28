const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = '369255448209-49gfr481pr750gpvanaa4cpci2nq1d5d.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URL = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =
  '1//04KGGa9G6q4xBCgYIARAAGAQSNwF-L9IreQ-PBiR1patnWX52K6Y0xPPTVBL7SibpBcxlMjfbjI4JrlQUjj7AJv5TkCF6xBNTwqg';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const SendMail = async (first_name, last_name, email, phone_number, p_type, p_budget, message) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: 'dev@brangerine.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'Brangerine <dev@brangerine.com>', // sender address
      to: `dev@brangerine.com`, // list of receivers
      subject: 'You are received an message from brangerine.com.', // Subject line
      text: `
            First name: ${first_name}
            Last name: ${last_name}
            Email: ${email}
            Phone Number: ${phone_number}
            Project Type: ${p_type}
            Project Budget: ${p_budget}
            Message: ${message}
            `, // plain text body
      html: `
            <h4>First name: ${first_name}</h4>
            <h4>Last name: ${last_name}</h4>
            <h4>Email: ${email}</h4>
            <h4>Phone Number: ${phone_number}</h4>
            <h4>Project Type: ${p_type}</h4>
            <h4>Project Budget: ${p_budget}</h4>
            <h4>Message:</h4>
            <p>${message}</p>
            `, // html body
    });
    return info;
  } catch (error) {
    return error;
  }
};

const SubEmail = async email => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: 'dev@brangerine.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'Brangerine <dev@brangerine.com>', // sender address
      to: `dev@brangerine.com`, // list of receivers
      subject: 'New email subscribed our email subscription service from brangerine.com.', // Subject line
      text: `
            Email: ${email}
            `, // plain text body
      html: `
            <h4>Email: ${email}</h4>
            `, // html body
    });
    return info;
  } catch (error) {
    return error;
  }
};

module.exports = {
  SendMail,
  SubEmail,
};
