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

## Snapshots
<!-- ![Preview](https://drive.google.com/uc?export=view&id=1Gmg74awtq9N3vn5Wz5x0u-vG_4ZV4vSa) -->
(To be added soon)

## Usage

You can easily integrate the `uploader` component into your React application:

```javascript
function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  console.log("File is selected: ", selectedFile);

  return (
  <>
    <Uploader file={selectedFile} setFile={setSelectedFile} />
  </>
  )
}
```

## API Reference

### Props
```
file = {}
setFile = {}
```
## Features

- Lightweight and easy to use
- Just install and use right away

## Cooming soon updates
- base64 image file