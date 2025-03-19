export const checkValidData = (fullname, email, password) => {
  if (!fullname.trim()) return "Full Name is required";
  const isEmailValid =
    /^([a-zA-Z0-9._]+@(gmail\.com|yahoo\.com|outlook\.com|example\.com))$/.test(
      email
    );
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,}$/.test(password);
  if (!email.trim()) return "Email is required";
  if (!isEmailValid) return "Email Id is not valid";
  if (!password.trim()) return "Password is required";
  if (!isPasswordValid)
    return "Password should contain at least one uppercase letter, one lowercase letter, one number and one special character";

  return null;
};
