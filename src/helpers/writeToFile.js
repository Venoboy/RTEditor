const writeToFile = (textToWrite) => {
  const textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
  const fileNameToSaveAs = 'text';
  const downloadLink = document.createElement('a');
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = 'Download File';
  if (window.webkitURL != null) {
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  }
  downloadLink.click();
};

export default writeToFile;
