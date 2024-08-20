import * as yup from "yup";

export interface IAuthModel {
  email: string;
  password: string;
  userType?: string;
}

export const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];
export interface IUser {
  email: string;
  password: string;
  phone: string;
  matricNumber?: string;
  plateNumber?: string;
  userType: string;
  department?: string;
  firstname: string;
  lastname: string;
  numberOfSeats?: number;
}

export const userSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  phone: yup.string().required("Phone is required"),
  matricNumber: yup.string(),
  plateNumber: yup.string(),
  department: yup.string(),
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  numberOfSeats: yup.number(),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});
