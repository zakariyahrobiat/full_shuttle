import { PropsWithChildren } from "react";

interface props {
  header: string;
  footer: string;
}
const RegisterFormContainer = (props: PropsWithChildren<props>) => {
  return (
    <div className="form-section flex justify-center items-center mt-[10vh]">
      <div
        className="form-container border-2 py-8 px-3 w-[100%]
                   md:w-[50%]
                "
      >
        <div className="header mb-4">
          <p className="text-4xl font-bold mb-2 text-white text-center">
            {props.header}
          </p>
          <p className="text-sm text-gray-400 text-center">{props.footer}</p>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default RegisterFormContainer;
