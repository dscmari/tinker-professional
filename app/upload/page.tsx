'use client';
 
import { type PutBlobResult } from '@vercel/blob';
import { upload } from '@vercel/blob/client';
import { useState, useRef } from 'react';
 
export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  return (
    <>
      <h1 className='pt-40'>Upload Your Avatar</h1>
 
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          // Honeypot check — wenn ausgefüllt, ist es ein Bot
          if (honeypotRef.current?.value) {
            return;
          }
 
          if (!inputFileRef.current?.files) {
            throw new Error('No file selected');
          }
 
          const file = inputFileRef.current.files[0];
 
          const newBlob = await upload(file.name, file, {
            access: 'private',
            handleUploadUrl: '/api',
          });
 
          setBlob(newBlob);
        }}
      >
        {/* Honeypot — unsichtbar für User, Bots füllen es aus */}
        <input
          ref={honeypotRef}
          type="text"
          name="website"
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <input className='bg-blue-500' name="file" ref={inputFileRef} type="file" accept=".stl,.obj,.3mf,.txt" required />
        <button type="submit" className='bg-green-500'>Upload</button>
      </form>

      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </>
  );
}