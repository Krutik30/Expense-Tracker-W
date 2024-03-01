import React, { useState } from 'react';
import { supabase } from '../../config';

interface SingleFileUploaderProps {
  // eslint-disable-next-line no-unused-vars
  onFileChange: (base64String: string) => void;
}

const SingleFileUploader: React.FC<SingleFileUploaderProps> = ({ onFileChange }) => {
  const [fileDetails, setFileDetails] = useState<{ name: string; size: number | null; type: string | null } | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];

      const image = `public/${Date.now()}-${selectedFile.name}.png`;
      const { data, error } = await supabase
        .storage
        .from('images')
        .upload(image, selectedFile, {
          cacheControl: '3600',
          upsert: false
        })
        console.log({data, error});

      onFileChange(await supabase.storage.from('images').getPublicUrl(image).data.publicUrl);

      setFileDetails({
        name: selectedFile.name,
        size: selectedFile.size,
        type: selectedFile.type,
      });
    }
  };

  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="file"
          className="cursor-pointer bg-blue-500 mx-auto text-white mt-2 py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Choose a file
        </label>
        <input id="file" type="file" onChange={handleFileChange} className="hidden" />
      </div>
      {fileDetails && (
        <div className="text-blue-500">
          <p>File details:</p>
          <ul>
            <li>Name: {fileDetails.name}</li>
            <li>Size: {fileDetails.size} bytes</li>
            <li>Type: {fileDetails.type}</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SingleFileUploader;
