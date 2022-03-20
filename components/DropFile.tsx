import Head from 'next/head';
import React, { useState } from 'react';
import { useUploadForm } from './hooks';
import Dropzone from 'react-dropzone';
import { ProgressBar } from 'react-bootstrap';
export const DropFile = () => {
  const fileTypes = ['Pcap'];
  const [file, setFile] = useState(null);
  const handleDrop = acceptedFiles => {
    // setFile(acceptedFiles.map(file => file.name));
    setFile(file => acceptedFiles);
    handleSubmit();
  };

  const { isLoading, isSuccess, uploadForm, progress } = useUploadForm(
    'http://localhost:5000/post',
  );

  const handleSubmit = async () => {
    return await uploadForm(file);
  };
  // const now = 60;

  return (
    <div>
      <h3 className="_title1">Drop Your Pcap File Here</h3>
      {isSuccess ? <p>sucess</p> : <p>fail</p>}
      <ProgressBar now={progress} label={`${progress}%`} />
      <Dropzone
        onDrop={handleDrop}
        accept="image/*"
        minSize={1024}
        maxSize={3072000}
        maxFiles={1}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject,
        }) => {
          const additionalClass = isDragAccept
            ? 'accept'
            : isDragReject
            ? 'reject'
            : '';
          accept: 'image/jpeg,image/png';

          return (
            <div
              {...getRootProps({
                className: `dropzone ${additionalClass}`,
              })}
            >
              <input {...getInputProps()} />
              <span>{isDragActive ? '📂' : '📁'}</span>
              <p>Drag&apos;nv&apos;rop images, or click to select files</p>
            </div>
          );
        }}
      </Dropzone>
    </div>
  );
};
