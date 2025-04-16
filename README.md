# @bytesberry/uploader

A simple and customizable React Image uploader component that provides an easy way to upload images.

## Installation

Install the package using Yarn:

```bash
yarn add @bytesberry/uploader
```

Install the package using NPM:

```bash
npm install @bytesberry/uploader
```

## Preview

![Preview](https://drive.google.com/uc?export=view&id=1PJl9OtseonS5K1-VVwx9cuSyJMItoPqJ)

## Usage

You can easily integrate the `uploader` component into your React application:

```javascript
import { Uploader } from "@bytesberry/uploader";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileBase64, setSelectedFileBase64] = useState(null);

  return (
    <>
      <Uploader 
        file={selectedFile} 
        setFile={setSelectedFile}
        fileBase64={selectedFileBase64}
        setFileBase64={setSelectedFileBase64} 
        borderColor="#000"
        maxFileSizeAllowedInMB={2} // default limit is 5mb
        height="15rem" // 11rem is default height
        width="30rem" // 25rem is default width
      />

    </>
  );
}
```

## API Reference

### Props

### `file`  
**Type:** `File | null`  
**Description:**  
This prop holds the currently selected file object. It should be a state variable in your component. You can use this to access details like file name, size, type, etc.

### `setFile`  
**Type:** `(file: File | null) => void`  
**Description:**  
A state setter function to update the selected file. This is required to manage the file selection from the uploader component.

### `fileBase64`  
**Type:** `string | null`  
**Description:**  
This prop stores the Base64 representation of the uploaded image. It allows you to preview or send the image directly as a string (e.g., to a server or database).

### `setFileBase64`  
**Type:** `(base64: string | null) => void`  
**Description:**  
A setter function that updates the `fileBase64` value when a new image is uploaded. This helps you access the image in Base64 format for further processing or previewing.

### `borderColor`  
**Type:** `string`  
**Optional**  
**Description:**  
Customize the border color of the uploader area. Accepts any valid CSS color string (e.g., `"#000"`, `"red"`, `"rgb(255, 0, 0)"`). It helps match the uploader’s design with your app’s theme.


### `maxFileSizeAllowedInMB`  
**Type:** `number`  
**Optional**  
**Default:** `5`  
**Description:**  
Specifies the maximum file size (in megabytes) allowed for uploads. If the selected image exceeds this limit, the upload will be blocked. By default, files larger than **5 MB** are not allowed. Use this prop to control image size and prevent large file uploads.

## Features

- Lightweight and easy to use
- Clean and modern UI
- Get base64 image data too
- Control the maximum file size uploads limits

## Coming soon updates
- Drag and drop file to upload