import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required!")
    .min(3, "Username must be at least 3 characters long"),
  password: yup
    .string()
    .required("Must enter a password!")
    .min(1, "Password must be at least 1 characters long"),

  role: yup.string().oneOf(["2", "1"], "click a button"),
});

export default formSchema;
