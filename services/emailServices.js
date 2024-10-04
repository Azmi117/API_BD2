const nodemailer = require('nodemailer');

// Konfigurasi transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Gunakan host SMTP Gmail
    port: 587, // Gunakan port 587 untuk Gmail (non-SSL, TLS)
    secure: false, // False untuk TLS, true untuk SSL (port 465)
    auth: {
        user: process.env.EMAIL_USER, // Email Anda
        pass: process.env.EMAIL_PASS, // Password email Anda
    },
});

// Fungsi untuk mengirimkan email
const sendGiftEmail = async (userEmail, giftVarian) => {
    const mailOptions = {
        from: process.env.EMAIL_USER, // Email pengirim
        to: userEmail, // Email penerima (email user)
        subject: 'Congratulations! You have received a gift!',
        text: `Hello my princess who is celebrating her birthday, if you have opened this email, it means you have played the spinner wheel that I made, and what you got is: ${giftVarian}. I hope you like it, happy birthday baby 😘`,
        text: `-Azmi Yushari-` 
    };

    console.log('Mengirim email ke:', userEmail);
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email berhasil dikirim:', info.response);
    } catch (error) {
        console.error('Gagal mengirim email:', error);
    }
};

module.exports = {
    sendGiftEmail,
};
