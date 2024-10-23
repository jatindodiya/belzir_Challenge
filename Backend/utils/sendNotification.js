const nodemailer = require('nodemailer');

const sendNotification = async (email, status) => {
    const transporter = nodemailer.createTransport({
        // Configure your email transport options
    });

    const message = {
        from: 'no-reply@example.com',
        to: email,
        subject: `Purchase Request ${status}`,
        text: `Your purchase request has been ${status}.`, // Customize your message
    };

    await transporter.sendMail(message);
};

module.exports = { sendNotification };
