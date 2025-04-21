import React, { useEffect, useRef, useState } from 'react';
import './AvatarUploaderStyles.css';
import { getBase64 } from '../../utilities/getBase64';


const AvatarUploader = ({
  file,
  setFile,
  fileBase64,
  setFileBase64,
  borderColor,
  borderColorOnHover,
  height,
  width,
  maxFileSizeAllowedInMB
}) => {
  const refContainer = useRef(null);
  const refInput = useRef(null);
  const [localBase64, setLocalBase64] = useState(null);

  const handleFileInputClick = () => {
    refInput.current.click();
  };

  const onChangeFile = (fileData, setBase64) => {
    getBase64(fileData, (result) => {
      if (typeof setBase64 === 'function') {
        setBase64(result);
      }
      setLocalBase64(result);
    });
  };

  useEffect(() => {
    if (file) {
      const safeSetBase64 = typeof setFileBase64 === 'function' ? setFileBase64 : () => {};
      onChangeFile(file, safeSetBase64);
    }
  }, [file]);

  const handleFileChange = (e) => {
    const fileData = e.target.files[0];
    const maxAllowed = maxFileSizeAllowedInMB ? maxFileSizeAllowedInMB * 1024 * 1024 : 5 * 1024 * 1024; // default 5MB

    if (fileData) {
      const fileSizeInBytes = fileData.size;
      const fileSizeInMB = (fileSizeInBytes / (1024 * 1024)).toFixed(1);
      const maxFileSizeInMB = (maxAllowed / (1024 * 1024)).toFixed(0);

      if (fileSizeInBytes > maxAllowed) {
        alert(`File size is ${fileSizeInMB} MB. Please upload a file smaller than ${maxFileSizeInMB} MB.`);
        return;
      }

      setFile(fileData);
    } else {
      setFile(null);
    }
  };

  const styleWhenFileIsSelected = {
    backgroundColor: 'rgb(239 239 239)',
    border: '2px dashed transparent',
  };

  return (
    <div>
      <div
        className='file-container'
        style={file ? styleWhenFileIsSelected : { 
          '--hover-border-color': borderColorOnHover || 'gray',
          '--container-height': height || '14rem',
          '--container-width': width || '16rem',
          '--border-color' : borderColor
           }}
        ref={refContainer}
        onClick={handleFileInputClick}
      >
        {!file && (
          <div>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" className="avatar">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

          </div>
        )}

        {/* Delete button */}
        {file && (
          <div className='delete-button'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 delete-icon"
              onClick={() => setFile(null)}
              style={{ display: 'block' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </div>
        )}

        <input
          onChange={handleFileChange}
          ref={refInput}
          type="file"
          className='file-input'
          accept='image/*'
        />

        {file ? (
          <img src={localBase64} alt="Selected File" className='selected-image-preview' />
        ) : (
          <>
            <span className='file-description'>Drag & Drop or Upload</span>
            <span className='file-formats-details'>
              jpg, png & pdf formats, up to {maxFileSizeAllowedInMB || 5} MB
            </span>
          </>
        )}
      </div>
    </div>
  );
};


export default AvatarUploader;