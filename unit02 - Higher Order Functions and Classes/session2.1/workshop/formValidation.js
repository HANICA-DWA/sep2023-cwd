/////////////////////////////////////
//                                 //
//      The validator library      //
//                                 //
/////////////////////////////////////


// makeFormValidator is a function that returns an event handler (a function).
// The returned event handler will use the checkerFunctions as a set of functions to
// validate form fields, and the submitHandler to call if everything is valid.
function makeFormValidator(checkerFunctions, submitHandler) {
  // This function below is the actual form-validator that becomes an event handler
  // for form submissions.
  return function validator(event) {
    // This prevents the browser from sending the form-data to the server and
    // loading the server response as a new HTML page (replacing this one).
    event.preventDefault();

    const theForm = event.target;
    const theErrorReport = document.getElementById("error-report");
    // Like querySelectorAll() and getElementsByClassName(), getElementsByTagName()
    // does not return a proper Array, but something called an HTMLCollection.
    // We can't call forEach, map, filter etc. directly on an HTMLCollection,
    // but after we convert it to a normal array using the Array.from() function,
    // we can call all the cool higher-order functions that are methods of arrays.
    const fieldsCollection = theForm.getElementsByTagName(`input`);
    const fieldsArray = Array.from(fieldsCollection);

    console.log("---");

    const allFieldsOK = fieldsArray.every(inputElement => {
      const checkerFunction = checkerFunctions[inputElement.name];
      // is there a check function defined for this field?
      if (checkerFunction == undefined) {
        return true;
      } else {
        const thisFieldOK = checkerFunction(inputElement.value);
        console.log(`Checker-function on ${inputElement.name}:`, thisFieldOK);
        return thisFieldOK;
      }
    });

    if (allFieldsOK) {
      submitHandler()
    } else {
      alert("Niet alle velden zijn correct ingevuld.");
    }
  };
}

// A checker function that simply checks if there is any input in the field.
function isRequired(value) {
  const result = value.trim() != "";
  console.log(`Checked required field «${value}»:`, result);
  return result;
}
