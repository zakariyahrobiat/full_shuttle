import { UseFormRegister } from "react-hook-form";

interface InputProps {
  label?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  name: string;
  type?: string;
}

const CustomInput = ({
  label,
  placeholder,
  name,
  register,
  type,
}: InputProps) => {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto my-3 text-black">
      {label && (
        <label
          className="text-gray-700 text-sm font-bold mb-2"
          htmlFor="input-field"
        >
          {label}
        </label>
      )}
      <input
        id="input-field"
        type={`${type == null ? "text" : type}`}
        className="px-4 py-2 border
         border-gray-300 rounded-lg shadow-sm focus:outline-none 
         focus:ring-2 focus:ring-main-blue focus:border-transparent"
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
};

export default CustomInput;
