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

export function validateCtaForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 0) && isNaN(fullName.value)) {
    fullNameError.style.opacity = 0;
  } else {
    fullNameError.style.opacity = 1;
  }

  if (validateEmail(email.value)) {
    emailError.style.opacity = 0;
  } else {
    emailError.style.opacity = 1;
  }

  if (checkLength(fullName.value, 0) && isNaN(fullName.value) && validateEmail(email.value)) {
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

  if (checkLength(fullNameComment.value, 0) && isNaN(fullNameComment.value)) {
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
    checkLength(fullNameComment.value, 0) &&
    isNaN(fullNameComment.value) &&
    validateEmail(emailComment.value)
  ) {
    formSuccessComment.style.display = "block";
    commentForm.reset();
  }
}

export function validateContactForm(event) {
  event.preventDefault();
}

function checkLength(value, len) {
  if (value.trim().length > len) {
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
