const Message = require("../models/Message");
const { contactUsEmail } = require("../mail/templates/Contact")
const mailSender = require("../utils/mailSender")

exports.contactUsController = async (req, res) => {
    const { fullName, email, message } = req.body;
    console.log(req.body);
    try {
        const newMessage = await Message.create({
            fullName,
            email,
            message,
        });
    } catch (error) {
        console.log("Error", error);
        console.log("Error message :", error.message);
    }
    try {
        const emailRes = await mailSender(
            email,
            'New Submission of form on Portfolio Website',
            contactUsEmail(email, fullName, message)
        )
        // const emailRes = await mainMail(fullName, email, message);
        console.log("Email Res ", emailRes);
        return res.json({
            success: true,
            message: "Message Successfully Sent!",
        })
    } catch (error) {
        console.log("Error", error)
        console.log("Error message :", error.message)
        return res.json({
            success: false,
            message: "Message Could not be Sent",
        })
    }
}
