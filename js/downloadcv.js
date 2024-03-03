document.getElementById('downloadCV').addEventListener('click', function() {
    // Create a dummy PDF file content or fetch from a URL
    const pdfContent = 'Dummy PDF Content';

    // Create a blob containing the PDF data
    const blob = new Blob([pdfContent], { type: 'application/pdf' });

    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'Dhrumit Resume-.pdf';

    // Append the link to the body and trigger the click event
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
});
