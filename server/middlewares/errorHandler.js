exports.errorHelper = (error) => {
  let message = "";

  if (error.code === 11000) {
    message = "The username already exists!";
  } else if (error.errors) {
    message = Object.values(error.errors)
      .map((err) => err.message)
      .join("\n");
  } else {
    message = error.message;
  }

  return message;
};
