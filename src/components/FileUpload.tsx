import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

export function FileUpload({ onFileSelect }: FileUploadProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': ['.png', '.jpg', '.jpeg'] },
    maxFiles: 1,
    onDrop: (files) => files[0] && onFileSelect(files[0])
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-gray-400 transition-colors"
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
      {isDragActive ? (
        <p className="text-gray-600">Drop the image here...</p>
      ) : (
        <div>
          <p className="text-gray-600">Drag and drop an icon image here, or click to select</p>
          <p className="text-sm text-gray-500 mt-2">PNG or JPG (Recommended size: 512x512px)</p>
        </div>
      )}
    </div>
  );
}