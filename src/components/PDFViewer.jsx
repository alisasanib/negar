import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function MyApp() {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <a
        style={{
          color: "blue",
        }}
        href='/Negar.pdf'
        download='Negar Yaraghi-Storyboard Artist.pdf'>
        Download CV
      </a>
      <br />
      <br />
      <Document
        file='/Negar.pdf'
        onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
        />
      </Document>
      <p>{/* Page {pageNumber} of {numPages} */}</p>
    </div>
  );
}

export default MyApp;
