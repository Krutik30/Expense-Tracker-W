import React from 'react';

import { useState } from "react";

const SingleFileUploader = () => {
    const [file, setFile] = useState<File | null>(null);
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    };
  
    console.log('object');
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
      {file && (
        <section className="text-blue-500">
          File details:
          <ul>
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      )}
    </>
    );
  };
  
  export default SingleFileUploader;