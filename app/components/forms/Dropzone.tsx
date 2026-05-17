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
      <div {...getRootProps({className: 'dropzone h-24 bg-blue rounded-xl flex flex-col items-center justify-center cursor-pointer'})}>
        <input {...getInputProps()} />
        <p className='text-sm !text-slate-200'>Dateien hierher ziehen oder klicken zum Auswählen</p>
      </div>
      <aside className='mt-4 flex items-start gap-4 '>
        <span>Datei:</span>
        <ul className='text-green-500 tracking-widest'>{files}</ul>
      </aside>
    </section>
  );
}
