import Head from 'next/head';
import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
export const DropFile = () => {
  const fileTypes = ['Pcom'];
  const [file, setFile] = useState(null);
  const handleChange = file => {
    setFile(file);
  };

  return (
    <div>
      <h3 className="_title1">Drop Your Pcom File Here</h3>
      <FileUploader
        multiple={false}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        hoverTitle="drop the .pcom file here!"
        label="Select Or Drop File"
        classes="dropcustom"
      />
      <style global jsx>{`
        .dropcustom {
          width: fit-content !important;
          height: 300px !important;

          position: absolute !important;
          top: 0 !important;
          bottom: 0 !important;
          left: 0 !important;
          right: 0 !important;

          margin: auto !important;
        }
        ._title1 {
          text-align: center;
        }
      `}</style>
    </div>
  );
};
