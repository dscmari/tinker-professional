"use server"
import { Specification } from "@/app/types";
import { sendMail } from "@/app/utils/mail";

export default async function submitPrint(specification: Specification, files: File[], blobUrls: string[]) {
  // hier an Cloud-API schicken, z.B. S3, Email, Datenbank etc.
  console.log("submitPrint in server action called")
  console.log(specification);
  console.log(files);
  console.log(blobUrls)

  

  try {
    sendMail(specification, blobUrls, files)
  } catch (err) {
  console.error("Error while sending mail:", err);
}
console.log("end of submitPrint()")
}