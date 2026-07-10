"use server"

import { Specification } from "@/app/types";

export default async function submitPrint(specification: Specification, files: File[]) {
  // hier an Cloud-API schicken, z.B. S3, Email, Datenbank etc.
  console.log(specification);
  console.log(files);
}