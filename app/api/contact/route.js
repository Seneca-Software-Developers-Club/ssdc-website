import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // ssdc email address 
        pass: process.env.EMAIL_PASS 
      },
    });

    const mailOptions = {
      from: email, 
      to: process.env.EMAIL_USER, // ssdc email address
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error); 
    return new Response(
      JSON.stringify({ message: error.message || "Internal Server Error" }),
      { status: 500 }
    );
  }
}
