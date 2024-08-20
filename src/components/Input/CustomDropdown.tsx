import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}
interface DropdownProps {
  options: Option[];
  placeholder?: string;
  name: string;
  register: UseFormRegister<any>;
  label?: string;
}

const CustomDropdown = ({
  options,
  placeholder,
  name,
  register,
  label,
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

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
      <select
        {...register(name)}
        className="flex flex-col w-full max-w-md mx-auto
          p-4 border
         border-gray-300 rounded-lg shadow-sm focus:outline-none 
         focus:ring-2 focus:ring-main-blue focus:border-transparent bg-white
      "
        value={selectedOption}
        onChange={handleChange}
      >
        {placeholder && (
          <option value="" className="text-gray-700 text-sm font-bold mb-2">
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;
