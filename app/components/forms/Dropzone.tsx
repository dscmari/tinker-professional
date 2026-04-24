"use client"

import {useDropzone} from 'react-dropzone';



export default function Dropzone() {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map((file, index) => (
    <li key={index}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container ">
      <div {...getRootProps({className: 'dropzone h-24 bg-blue-500/40 rounded-xl flex flex-col items-center justify-center cursor-pointer'})}>
        <input {...getInputProps()} />
        <p className='text-sm'>Dateien hierher ziehen oder klicken zum Auswählen</p>
      </div>
      <aside className='mt-2 flex items-center gap-4 '>
        <span>Datei:</span>
        <ul className='text-sm text-green-500 font-bold uppercase tracking-widest'>{files}</ul>
      </aside>
    </section>
  );
}
