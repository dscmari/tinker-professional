"use server"

import { Specification } from "@/app/types";

export default async function submitPrint(specification: Specification, files: File[], blobUrls: string[]) {
  // hier an Cloud-API schicken, z.B. S3, Email, Datenbank etc.
  console.log("submitPrint in server action called")
  console.log(specification);
  console.log(files);
  console.log(blobUrls)
}