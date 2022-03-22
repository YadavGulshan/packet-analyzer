import Head from 'next/head';
import React, { useState, createRef } from 'react';
import { Fragment } from 'react';
import { useUploadForm } from './hooks';
import Dropzone from 'react-dropzone';
import { ProgressBar, Button, Form } from 'react-bootstrap';
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

  return (
    <div>
      <h5 className="_title1">Drop Your Pcap File Or Select File</h5>
      <ProgressBar
        animated
        className="mb-3"
        now={progress}
        label={`${progress}%`}
      />
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Select Pcap File:</Form.Label>
        <Form.Control onChange={handleDrop} type="file" />
      </Form.Group>
      <Dropzone
        noClick
        noKeyboard
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
          accept: 'file/pcap,file/pcap';

          return (
            <div
              {...getRootProps({
                className: `${isDragActive ? 'dropzone aboveDom' : 'dropzone'}`,
              })}
            >
              <div
                {...getRootProps({
                  className: `${
                    isDragActive ? 'dropzoneIn' : 'dropzoneOut'
                  } ${additionalClass}`,
                })}
              >
                {isDragActive ? (
                  <p>Drag And Drop Pcap, or click to select files 📂</p>
                ) : (
                  ''
                )}
              </div>
            </div>
          );
        }}
      </Dropzone>
    </div>
  );
};
