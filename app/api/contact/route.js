import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "info.ssdcseneca@gmail.com",
        pass: "zmqb qimh ysqn cveg" //App Password for "Mail.",
      },
    });

    const mailOptions = {
      from: email, 
      to: "info.ssdcseneca@gmail.com", 
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error); // Log the error
    return new Response(
      JSON.stringify({ message: error.message || "Internal Server Error" }),
      { status: 500 }
    );
  }
}
