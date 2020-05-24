const addErrorStyle = (field, e) => {
  if (field) {
    e.target.classList.remove("has-error");
    e.target.classList.add("no-error");
  } else {
    e.target.classList.remove("no-error");
    e.target.classList.add("has-error");
  }
};

export default addErrorStyle;
