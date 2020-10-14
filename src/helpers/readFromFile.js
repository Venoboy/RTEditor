const readFromFile = (file, setter) => {
  const fr = new FileReader();
  fr.onloadend = () => {
    setter(fr.result);
  };
  if (file && file.type && file.type === 'text/plain') {
    fr.readAsText(file);
  }
};

export default readFromFile;
