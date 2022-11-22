export const ctaForm = document.querySelector("#ctaForm");
export const commentForm = document.querySelector("#commentForm");
export const contactForm = document.querySelector("#contactForm");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const formSuccess = document.querySelector(".form-success");
const fullNameComment = document.querySelector("#nameComment");
const fullNameErrorComment = document.querySelector("#fullNameErrorComment");
const emailComment = document.querySelector("#emailComment");
const emailErrorComment = document.querySelector("#emailErrorComment");
const formSuccessComment = document.querySelector(".form-success-comment");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

const fullNameContact = document.querySelector("#nameContact");
const fullNameErrorContact = document.querySelector("#fullNameErrorContact");
const emailContact = document.querySelector("#emailContact");
const emailErrorContact = document.querySelector("#emailErrorContact");
const formSuccessContact = document.querySelector(".form-success-contact");
const subjectContact = document.querySelector("#subjectContact");
const subjectErrorContact = document.querySelector("#subjectErrorContact");
const messageContact = document.querySelector("#messageContact");
const messageErrorContact = document.querySelector("#messageErrorContact");

export function validateContactForm(event) {
  event.preventDefault();
  if (checkLength(messageContact.value, 25)) {
    messageErrorContact.style.opacity = 0;
  } else {
    messageErrorContact.style.opacity = 1;
  }

  if (checkLength(subjectContact.value, 15)) {
    subjectErrorContact.style.opacity = 0;
  } else {
    subjectErrorContact.style.opacity = 1;
  }

  if (validateEmail(emailContact.value)) {
    emailErrorContact.style.opacity = 0;
  } else {
    emailErrorContact.style.opacity = 1;
  }
  if (checkLength(fullNameContact.value, 5) && isNaN(fullNameContact.value)) {
    fullNameErrorContact.style.opacity = 0;
  } else {
    fullNameErrorContact.style.opacity = 1;
  }

  if (
    checkLength(messageContact.value, 25) &&
    checkLength(subjectContact.value, 15) &&
    validateEmail(emailContact.value) &&
    checkLength(fullNameContact.value, 5) &&
    isNaN(fullNameContact.value)
  ) {
    contactForm.reset();
    formSuccessContact.style.display = "block";
  }
}

export function validateCtaForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 5) && isNaN(fullName.value)) {
    fullNameError.style.opacity = 0;
  } else {
    fullNameError.style.opacity = 1;
  }

  if (validateEmail(email.value)) {
    emailError.style.opacity = 0;
  } else {
    emailError.style.opacity = 1;
  }

  if (checkLength(fullName.value, 5) && isNaN(fullName.value) && validateEmail(email.value)) {
    ctaForm.reset();
    formSuccess.style.display = "block";
  }
}

export function validateCommentForm(event) {
  event.preventDefault();

  if (checkLength(message.value, 25)) {
    messageError.style.opacity = 0;
  } else {
    messageError.style.opacity = 1;
  }

  if (checkLength(fullNameComment.value, 5) && isNaN(fullNameComment.value)) {
    fullNameErrorComment.style.opacity = 0;
  } else {
    fullNameErrorComment.style.opacity = 1;
  }

  if (validateEmail(emailComment.value)) {
    emailErrorComment.style.opacity = 0;
  } else {
    emailErrorComment.style.opacity = 1;
  }

  if (
    checkLength(message.value, 25) &&
    checkLength(fullNameComment.value, 5) &&
    isNaN(fullNameComment.value) &&
    validateEmail(emailComment.value)
  ) {
    commentForm.reset();
    formSuccessComment.style.display = "block";
  }
}

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
