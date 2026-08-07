import { Specification } from "../types";

const nodemailer = require("nodemailer");

export async function sendMail(
  specification: Specification,
  blobUrls: string[],
  files: File[],
) {

console.log("sendMail is called")

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });


  try {
    console.log("start of try")

    await transporter.sendMail({
      from: `"Tinker Professional" <${process.env.SMTP_USER}>`, // sender address
      to: process.env.SMTP_USER, // list of recipients
      subject: "3D-Druck-Anfrage", // subject line
      text: "Hello world?", // fallback
      html: `
  <h2>Neue Bestellung eingegangen</h2>
    <p><b>Name:</b> ${specification.name}</p>
  <p><b>Mail:</b> ${specification.mail}</p>
  <p><b>Material:</b> ${specification.material.name}</p>
  <p><b>Farbe:</b> ${specification.color}</p>
  <p><b>Schichthöhe:</b> ${specification.height}</p>
  <p><b>Fülldichte:</b> ${specification.density}%</p>
  <p><b>Füllmuster:</b> ${specification.pattern}</p>
  <p><b>Stückzahl:</b> ${specification.quantity}</p>
  <p><b>Wandstärke:</b> ${specification.wall}</p>
  <p><b>Verwendungszweck:</b> ${specification.explaination || "—"}</p>
  <hr/>
  <h3>Dateien:</h3>
  <ul>
    ${blobUrls.map((url, index) => `<li><a href="${url}">Datei ${index + 1} herunterladen</a></li>`).join("")}
  </ul>
`,
    });

    console.log("in try between messages")

    await transporter.sendMail({
      from: `"Tinker Professional" <${process.env.SMTP_USER}>`, // sender address
      to: specification.mail, // list of recipients
      subject: "Bestellbestätigung - Ihre 3D-Druck-Anfrage",
      text: "Hello world?", // fallback
      html: `
    <h2>Vielen Dank für Ihre Bestellung, ${specification.name}!</h2>
    <p>Wir haben Ihre Anfrage erhalten und verarbeiten sie umgehend. Hier ist eine Übersicht Ihrer Angaben:</p>
    <hr/>
    <h3>Bestelldetails:</h3>
    <p><b>Material:</b> ${specification.material.name}</p>
    <p><b>Farbe:</b> ${specification.color}</p>
    <p><b>Schichthöhe:</b> ${specification.height}</p>
    <p><b>Fülldichte:</b> ${specification.density}%</p>
    <p><b>Füllmuster:</b> ${specification.pattern}</p>
    <p><b>Stückzahl:</b> ${specification.quantity}</p>
    <p><b>Wandstärke:</b> ${specification.wall}</p>
    <p><b>Verwendungszweck:</b> ${specification.explaination || "—"}</p>
    <hr/>
    <h3>Hochgeladene Dateien:</h3>
    <ul>
      ${files.map((file, index) => `<li>${file.name}</li>`).join("")}
    </ul>
    <br/>
    <p>Beste Grüße,<br/><b>Ihr Tinker Professional Team</b></p>
  `,
    });

    console.log("sendMail end of try");
  } catch (err) {
    console.log("sendMail in catch")
    console.error("Mail error:", err);
    throw err;
  }
}
