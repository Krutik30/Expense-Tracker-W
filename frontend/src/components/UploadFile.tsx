import React from 'react';

interface SingleFileUploaderProps {
  // eslint-disable-next-line no-unused-vars
  onFileChange: (file: File) => void; 
}

const SingleFileUploader: React.FC<SingleFileUploaderProps> = ({ onFileChange }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onFileChange(e.target.files[0]);
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
    </>
  );
};

export default SingleFileUploader;
