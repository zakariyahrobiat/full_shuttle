import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BackgroundImageLayout from "../../../layout/BackgroundImageLayout";
import Navbar from "../../../components/NavBar/NavBar";
import RegisterFormContainer from "../../../layout/RegisterFormContainer";
import CustomInput from "../../../components/Input/CustomInputField";
import CustomDropdown from "../../../components/Input/CustomDropdown";
import { registerUser } from "../services";
import { Link, useNavigate } from "react-router-dom";
import { genderOptions, IUser, userSchema } from "../models";
import { writeUserData } from "../../dashboard/services";
interface RegisterProps {
  userType: string;
}
const Register = (props: RegisterProps) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IUser>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IUser> = async (data) => {
    console.log("Data being submitted:", data);
    data["userType"] = props.userType;
    // await registerUser(data);

    const userId = await registerUser(data);
    if (userId) {
      console.log(userId);
      await writeUserData(userId, data);
      navigate("/");
    } else {
      console.log("User registration failed. No userId returned.");
    }
  };
  console.log(writeUserData);

  return (
    <BackgroundImageLayout>
      <Navbar />
      <RegisterFormContainer
        header="Sign Up"
        footer={`Register as ${props.userType}.`}
      >
        <form
          action=""
          className="flex flex-col p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <CustomInput
            label="Firstname"
            placeholder="Mark"
            name="firstname"
            register={register}
          />
          <CustomInput
            label="Lastname"
            placeholder="Schrondinger"
            name="lastname"
            register={register}
          />

          <CustomInput
            label="Email Address"
            placeholder="johnson@gmail.com"
            name="email"
            register={register}
          />

          <CustomInput
            label="Mobile Number"
            placeholder="+23450198364"
            name="phone"
            register={register}
          />

          {props.userType === "passenger" && (
            <>
              <CustomInput
                label="Matric Number"
                placeholder="11/30GC109"
                name="matricNumber"
                register={register}
              />
              <CustomInput
                label="Department"
                placeholder="Social Science"
                name="department"
                register={register}
              />
            </>
          )}

          {props.userType === "driver" && (
            <>
              <CustomInput
                label="Plate No"
                placeholder="AA998DAV"
                name="plateNumber"
                register={register}
              />
              <CustomInput
                label="Number Of seats"
                placeholder="15"
                name="numberOfSeats"
                register={register}
              />
            </>
          )}

          <CustomDropdown
            label="Gender"
            options={genderOptions}
            placeholder="Select Gender"
            name="gender"
            register={register}
          />

          <CustomInput
            label="Password"
            placeholder="**********"
            name="password"
            type="password"
            register={register}
          />

          <div className="w-full h-[1px] bg-gray-400 mt-4"></div>
          <button
            className=" bg-button-blue py-2 w-full max-w-md mx-auto mt-4 rounded-md"
            type="submit"
          >
            Register
          </button>

          <div className="text-[10px] text-center mt-4">
            <Link
              to={`/${
                props.userType === "passenger"
                  ? "login-passenger"
                  : "login-driver"
              }`}
            >
              Already have an account ? <span>Login</span>
            </Link>
          </div>
        </form>
      </RegisterFormContainer>
    </BackgroundImageLayout>
  );
};

export default Register;
