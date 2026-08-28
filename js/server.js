require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express(); // ✅ Ensure this is at the top

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
    console.log("Received Data:", req.body); // ✅ Debugging

    const { name, email, phone, address, pinCode, message } = req.body;

    if (!pinCode) {
        console.log("❌ Postal Code is missing!");
        return res.status(400).json({ message: "Postal Code is missing!" });
    }

    // Configure Nodemailer Transporter
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    let mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: "📩 New User Inquiry - Appointment Booking",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                <h2 style="color: #2c3e50;">New Appointment Booking Request</h2>
                <p>You have received a new inquiry from a potential client. Below are the details:</p>
                <hr style="border: 1px solid #eee;">
                <p><strong>👤 Name:</strong> ${name}</p>
                <p><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #3498db;">${email}</a></p>
                <p><strong>📞 Phone:</strong> <a href="tel:${phone}" style="color: #3498db;">${phone}</a></p>
                <p><strong>🏠 Address:</strong> ${address}</p>
                <p><strong>📮 Postal Code:</strong> ${pinCode}</p>
                <p><strong>📝 Message:</strong></p>
                <blockquote style="background: #f8f9fa; padding: 10px; border-left: 4px solid #3498db;">
                    ${message}
                </blockquote>
                <hr style="border: 1px solid #eee;">
                <p style="color: #7f8c8d;">This email was automatically generated. Please do not reply.</p>
            </div>
        `,
    };
    

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("❌ Error sending email:", error);
        res.status(500).json({ message: "Error sending email!" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
