import React from "react";

const TextInput = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  type = "text",
  max = 200,
  options = [],
  disabled = false,
  required = false,
  className = "",
}) => {
  const inputId = name || label?.toLowerCase().replace(/\s+/g, "-");
  const baseClass = `
  p-2 rounded-lg border bg-gray-200
  border-gray-300 rounded-lg focus:outline-none focus:ring-1
   focus:ring-[#4364BF] text-gray-900 placeholder-gray-400 
   transition-all disabled:bg-gray-300 disabled:cursor-not-allowed
  `;

  // Smartly handle value binding
  const handleChange = (e) => {
    if (onChange) onChange(e.target.value);
  };

  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {type === "select" ? (
        <select
          id={inputId}
          name={name}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          className={baseClass}
        >
          <option value="">{placeholder || "Select an option"}</option>
          {options.map((opt, index) => (
            <option key={index} value={opt.value ?? opt}>
              {opt.label ?? opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={inputId}
          name={name}
          max={max}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={baseClass}
        />
      )}
    </div>
  );
};

export default TextInput;
