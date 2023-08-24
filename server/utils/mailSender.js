const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    const transporter = await nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
        secure: false,
    });
    const mailOption = {
        from: email,
        to: process.env.EMAIL,
        subject: title,
        html: body,
    };
    try {
        await transporter.sendMail(mailOption);
        return Promise.resolve("Message Sent Successfully!");
    } catch (error) {
        return Promise.reject(error);
    }
}

module.exports = mailSender