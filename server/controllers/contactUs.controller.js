import AppError from "../utils/error.util.js";
import sendEmail from "../utils/sendEmail.js";

const contactUs = async (req, res, next) => {
    const { name, email, message, subject } = req.body;

    if (!name || !email || !message || !subject) {
        return next(new AppError('All fields are required', 400));
    }

    try {
        const emailMessage = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        `;

        // Send email to the organization
        await sendEmail(
            email,
            process.env.CONTACT_US_EMAIL,
            subject,
            emailMessage,
        );

        // Send confirmation email to the user
        const userMessage = `<p>Hello ${name}, Thank you for contacting us! We have received your message and will get in touch with you soon. Best regards, The LMS Team</p>`;

        await sendEmail(
            process.env.CONTACT_US_EMAIL,
            email,
            'Thank You for Contacting Us',
            userMessage,
        );

        res.status(200).json({
            success: true,
            message: 'Thanks for contacting. We have sent you a confirmation email and will get in touch with you soon.',
        });
    } catch (error) {
        return new AppError(error.message, 500);
    }
};
export { contactUs };