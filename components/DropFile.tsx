import Head from 'next/head';
import React, { useState, createRef } from 'react';
import { Fragment } from 'react';
import { useUploadForm } from './hooks';
import Dropzone from 'react-dropzone';
import { ProgressBar, Button, Form } from 'react-bootstrap';
import { text } from 'stream/consumers';
export const DropFile = () => {
  const fileTypes = ['Pcap'];
  const [file, setFile] = useState(null);
  const handleDrop = acceptedFiles => {
    if (acceptedFiles[0].name.split('.').pop() == 'pcap') {
      // setFile(acceptedFiles.map(file => file.name));
      setFile(file => acceptedFiles);
      let labelFileName = document.getElementById('labelFileName');
      // labelFileName.setAttribute('value' , file)
      labelFileName.innerHTML = acceptedFiles[0].name;
      console.log(acceptedFiles[0].name.split('.').pop());
      handleSubmit();
    } else {
      alert('Invalid File!');
    }
  };

  const { isLoading, isSuccess, uploadForm, progress } =
    useUploadForm('/api/file');

  const handleSubmit = async () => {
    return await uploadForm(file);
  };

  const handleSubmitEdut = event => {
    // highlight-range{4}
    event.preventDefault();
    let element = document.getElementById('uploadFile');
    element.click();
  };

  let fileInput = createRef;

  return (
    <div>
      <h5 className="_title1">Upload your PCAP File</h5>
      <ProgressBar
        animated
        className="mb-3"
        now={progress}
        label={`${progress}%`}
      />
      <div className="container">
        <input
          id="uploadFile"
          type="file"
          accept="application/vnd.tcpdump.pcap"
          ref={fileInput}
          onChange={e => handleDrop(e.target.files)}
          style={{ display: 'none' }}
        />
        <div style={{ width: '100%' }} className="row class1">
          <button
            className="col-md-4"
            onClick={handleSubmitEdut}
            style={{
              width: '30%',
              height: '3rem',
              fontSize: '1rem',
              color: 'white',
              backgroundColor: 'purple',
            }}
          >
            Choose Pcap File
          </button>
          <label
            id="labelFileName"
            className="col-md-auto"
            style={{
              height: '3rem',
              fontSize: '1rem',
              color: 'black',
              verticalAlign: 'middle',
              position: 'relative',
              width: '70%',
              padding: '0.5rem 0px',
              textAlign: 'center',
              border: 'dotted 3px rgb(0, 0, 0)',
            }}
          >
            Choose Pcap File
          </label>
        </div>
      </div>
      <Dropzone
        noClick
        noKeyboard
        onDropAccepted={handleDrop}
        accept={'application/vnd.tcpdump.pcap'}
        minSize={0}
        maxSize={3072000}
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
          accept: 'application/vnd.tcpdump.pcap';

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
                  } ${additionalClass} ${isDragAccept && 'dropzoneAccept'}
                  ${isDragReject && 'dropzoneReject'}`,
                })}
              >
                {isDragActive && isDragAccept ? (
                  <p>Drop your PCAP file for Analysis📂</p>
                ) : (
                  'Wrong File 📂'
                )}
              </div>
            </div>
          );
        }}
      </Dropzone>
    </div>
  );
};
