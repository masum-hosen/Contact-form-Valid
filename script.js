const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", event => {
  event.preventDefault(); // Prevent default form submission
  let valid = function () {
    if (event.value == true) {
      console.log(valid);
    }
  };

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const generalEnquiry = document.getElementById("generalEnquiry");
  const supportRequest = document.getElementById("supportRequest");
  const message = document.getElementById("message");
  const consent = document.getElementById("consent");
  const submitbtn = document.querySelector(".btn-submit");
  // console.log(submitbtn);

  // error massage here
  const name_error = document.getElementById("name_error");
  const lName_error = document.getElementById("lName_error");
  const email_error = document.getElementById("email_error");
  const query_error = document.getElementById("query_error");
  const mess_error = document.getElementById("mess_error");
  const consent_error = document.getElementById("consent_error");
  //   name valid here
  if (firstName.value === "" || firstName.value == null) {
    name_error.innerHTML = "This field is required";
  } else {
    name_error.innerHTML = "";
    firstName.focus();
  }

  if (lastName.value === "" || lastName.value == null) {
    lName_error.innerHTML = "This field is required";
  } else {
    lName_error.innerHTML = "";
    lastName.focus();
  }

  //   emaill valid here
  if (!email.value.match(emailPattern)) {
    email_error.innerHTML = "Please enter a valid email address";
  } else {
    email_error.innerHTML = "";
    email.focus();
  }

  // messege valid here
  if (message.value === "" || message == null) {
    mess_error.innerHTML = "This field is required";
  } else {
    mess_error.innerHTML = "";
    message.focus();
  }
  // Query Type and Consent valid here
  (() => {
    if (generalEnquiry.checked) {
      query_error.innerHTML = "";
      generalEnquiry.focus();
    } else if (supportRequest.checked) {
      query_error.innerHTML = "";
      supportRequest.focus();
    } else {
      query_error.innerHTML = "Please select a query type";
    }

    if (!consent.checked) {
      consent_error.innerHTML =
        "To submit this form,please consent to being contacted";
    } else {
      consent_error.innerHTML = "";
      consent.focus();
    }
  })();

  if (
    !firstName.value ||
    !lastName.value ||
    !emailPattern.test(email.value) ||
    !message.value ||
    !consent
  ) {
    document.getElementById("successToast").setAttribute("attribut", "hidden");
  } else {
    document.getElementById("successToast").removeAttribute("hidden");
    document.getElementById("successToast").focus();
    document.getElementById("contactForm").reset();
  }

  // console.log(event);
});
