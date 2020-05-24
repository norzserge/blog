const errorOutput = (fieldValid, array) => {
  return fieldValid !== null && !fieldValid ? array.errorText : "";
};

export default errorOutput;
