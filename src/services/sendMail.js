import { config } from "dotenv";
config();
import { createTransport } from "nodemailer";

console.log("email: ", process.env.MAIL_USER, " pass: ", process.env.MAIL_PASS);

const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_PASS,
        pass: process.env.MAIL_PASS,
    }
});

export function sendMail(to, subject, text) {
    const mailOptions = {
        from: process.env.MAIL_USER,
        to,
        subject,
        text
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log('Error:', error);
                reject(error);
            } else {
                console.log('Email sent: ', info.response);
                resolve(info);
            }
        });
    });
}

sendMail("recipient@example.com", "Test Subject", "Test email body")
    .then(info => console.log('Email sent successfully:', info))
    .catch(error => console.log('Error sending email:', error));