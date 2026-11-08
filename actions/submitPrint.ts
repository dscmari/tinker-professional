"use server";
import { Specification } from "@/app/types";
import { SendPigeon } from "sendpigeon";

export default async function submitPrint(
  specification: Specification,
  files: File[],
  blobUrls: string[],
) {

  console.log("submitPrint in server action called");
  console.log(specification);

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
    <p><b>Name:</b> ${specification.name}</p>
  <p><b>Mail:</b> ${specification.mail}</p>
  <p><b>Material:</b> ${specification.material}</p>
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

  //Beställbestätigung für User
  await pigeon.send({
    from: "onboarding@sendpigeon-sandbox.dev",
    to:  `${specification.mail}`, // Must be your account email
    subject: "Welcome!",
    html: `
    <h2>Vielen Dank für Ihre Bestellung, ${specification.name}!</h2>
    <p>Wir haben Ihre Anfrage erhalten und verarbeiten sie umgehend. Hier ist eine Übersicht Ihrer Angaben:</p>
    <hr/>
    <h3>Bestelldetails:</h3>
    <p><b>Material:</b> ${specification.material}</p>
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

  console.log("end of submitPrint()");
}
