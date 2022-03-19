import Head from 'next/head';
import React, { useState } from 'react';

import Dropzone from 'react-dropzone';

export const DropFile = () => {
  const fileTypes = ['Pcom'];
  const [file, setFile] = useState(null);
  const handleDrop = acceptedFiles => {
    setFile(acceptedFiles.map(file => file.name));
  };

  return (
    <div>
      <h3 className="_title1">Drop Your Pcom File Here</h3>
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
