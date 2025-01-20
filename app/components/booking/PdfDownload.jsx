"use client"


const PdfDownload = ({ booking }) => {
  console.log('booking object in client component', booking)
const id= booking?._id;
// console.log('id of booking in pdfdownload',id);
  const handlePdfDownload = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/generate-pdf?bookingId=${id}`);

      if (!response.ok) {
        throw new Error("Failed to generate PDF")
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "document.pdf"
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <div>
      <button onClick={() => handlePdfDownload(id)} >  Download Receipt</button>
    </div>
  );
};

export default PdfDownload;