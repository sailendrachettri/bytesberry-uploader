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
      />

    </>
  );
}
```

## API Reference

### Props

```
file = {}
setFile = {}
fileBase64={}
setFileBase64={} 
borderColor=""
```

## Features

- Lightweight and easy to use
- Just install and use right away
- Get base64 image data
