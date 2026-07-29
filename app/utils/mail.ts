import { Specification } from "../types";

const nodemailer = require("nodemailer");

export async function sendMail(
  specification: Specification,
  blobUrls: string[],
  files: File[],
) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

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
}
