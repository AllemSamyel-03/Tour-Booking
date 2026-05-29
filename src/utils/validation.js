export const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);

export const validateSignup = (formData) => {
  const errors = {};

  if (formData.fullName.trim() === "") {
    errors.fullName = "Please enter your full name.";
  }
  if (!isEmailValid(formData.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (formData.password.length < 6) {
    errors.password = "Password should contain at least 6 characters.";
  }
  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
};

export const validateBooking = (formData) => {
  const errors = {};

  if (formData.parentName.trim() === "")
    errors.parentName = "Parent name is required.";
  if (!isEmailValid(formData.email)) errors.email = "Enter a valid email.";
  if (!/^[6-9]\d{9}$/.test(formData.phone))
    errors.phone = "Enter a valid 10 digit mobile number.";
  if (formData.childName.trim() === "")
    errors.childName = "Child name is required.";
  if (formData.childAge === "") errors.childAge = "Please select child age.";
  if (formData.branch === "") errors.branch = "Please choose a branch.";
  if (formData.visitDate === null)
    errors.visitDate = "Please select a visit date.";
  if (formData.timeSlot === "") errors.timeSlot = "Please choose a time slot.";

  return errors;
};
