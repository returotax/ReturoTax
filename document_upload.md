# Document Upload Feature

## Overview
This document outlines how to upload documents in the ReturoTax application.

## Accepted File Types
- PDF
- JPEG
- PNG

## Implementation Details
```javascript
// Sample code snippet for document upload
function uploadDocument(file) {
    const acceptedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (acceptedTypes.includes(file.type)) {
        // Code to upload document
    } else {
        throw new Error('Invalid file type');
    }
}
```

## Usage
- Users can drag and drop files into the upload area.
- Upon upload, the document will be processed by the server.