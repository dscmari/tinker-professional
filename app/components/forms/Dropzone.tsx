"use client"
import {useDropzone} from 'react-dropzone';

type Props = {
  onFilesChange: (files: File[]) => void;
}

export default function Dropzone({onFilesChange} : Props) {
const { getRootProps, getInputProps } = useDropzone({
  multiple: true,
  onDrop: (newFiles) => onFilesChange(newFiles),
});
  
  return (
    <section className="container ">
      <div {...getRootProps({className: 'dropzone h-12 lg:h-24 bg-white border border-blue rounded-xl flex flex-col items-center justify-center cursor-pointer'})}>
        <input {...getInputProps()} />
        <p className='text-sm p-2'>Dateien hierher ziehen oder klicken zum Auswählen</p>
      </div>
    </section>
  );
}
