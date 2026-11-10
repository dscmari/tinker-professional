"use server";
import { Inquiry, Specification } from "@/app/types";
import { SendPigeon } from "sendpigeon";

export default async function submitPrint(
  inquiry: Inquiry,
  files: File[],
  blobUrls: string[],
) {
  console.log("submitInquiry in server action called");
  console.log(inquiry);

  const apiKey = process.env.SEND_PIGEON;

  if (!apiKey) {
    throw new Error("Umgebungsvariable SEND_PIGEON ist nicht gesetzt!");
  }

  const pigeon = new SendPigeon(apiKey);
  //bestellbestätigung für Luca
  await pigeon.send({
    from: "onboarding@sendpigeon-sandbox.dev",
    to: "noekel@namaste-websites.de", // Must be your account email
    subject: "Welcome!",
    html: `
  <h2>Neue Bestellung eingegangen</h2>
    <p><b>Name:</b> ${inquiry.name}</p>
  <p><b>Mail:</b> ${inquiry.mail}</p>
  <p><b>Material:</b> ${inquiry.material}</p>
    <p><b>Stückzahl:</b> ${inquiry.quantity}</p>
  <p><b>Verwendungszweck:</b> ${inquiry.message || "—"}</p>
  <hr/>
  <h3>Dateien:</h3>
  <ul>
    ${blobUrls.map((url, index) => `<li><a href="${url}">Datei ${index + 1} herunterladen</a></li>`).join("")}
  </ul>
`,
  });

  //Beställbestätigung für User
  await pigeon.send({
    from: "onboarding@sendpigeon-sandbox.dev",
    to: `${inquiry.mail}`, // Must be your account email
    subject: "Welcome!",
    html: `
    <h2>Vielen Dank für Ihre Bestellung, ${inquiry.name}!</h2>
    <p>Wir haben Ihre Anfrage erhalten und verarbeiten sie umgehend. Hier ist eine Übersicht Ihrer Angaben:</p>
    <hr/>
    <h3>Bestelldetails:</h3>
    <p><b>Material:</b> ${inquiry.material}</p>
    <p><b>Stückzahl:</b> ${inquiry.quantity}</p>
    <p><b>Verwendungszweck:</b> ${inquiry.message || "—"}</p>
    <hr/>
    <h3>Hochgeladene Dateien:</h3>
    <ul>
      ${files.map((file, index) => `<li>${file.name}</li>`).join("")}
    </ul>
    <br/>
    <p>Beste Grüße,<br/><b>Ihr Tinker Professional Team</b></p>
  `,
  });

  console.log("end of submitInquiry()");
}
