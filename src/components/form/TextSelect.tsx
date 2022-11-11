import Select, { StylesConfig } from "react-select"
import makeAnimated from "react-select/animated"

export interface Props {
  options: Option[]
  selected: Option[]
  placeholder?: string
  onChange?: (value: any) => void
  closeMenuOnSelect?: boolean
  isMulti?: boolean
}

export interface Option {
  label: string
  value: string
}

export default function TextSelect({
  options,
  selected,
  placeholder = "",
  onChange = () => {},
  closeMenuOnSelect = false,
  isMulti = false,
}: Props) {
  const animatedComponents = makeAnimated()

  const selectStyles: StylesConfig = {
    container: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
    }),
    control: (styles, { isFocused }) => ({
      ...styles,
      border: 0,
      backgroundColor: "var(--primary-text-field-background-color)",
      boxShadow: isFocused ? "var(--primary-text-field-box-shadow)" : "none",
      fontSize: "1rem",
      textAlign: "left",
      cursor: "pointer",
      color: "var(--primary-black-color)",
    }),
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: "var(--primary-text-field-background-color)",
        fontSize: "0.95rem",
        cursor: "pointer",
      }
    },
    placeholder: (styles) => ({
      ...styles,
      fontSize: "0.95rem",
      color: "var(--primary-black-color)",
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: "var(--primary-black-color)",
      transition: "0.3s",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "var(--error-color-2)",
        color: "var(--primary-error-color)",
      },
    }),
    clearIndicator: (styles) => ({
      ...styles,
      color: "var(--default-black-color)",
      transition: "0.3s",
      cursor: "pointer",
      "&:hover": {
        color: "var(--primary-error-color)",
      },
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: "var(--primary-text-field-background-color)",
    }),
  }

  return (
    <Select
      closeMenuOnSelect={closeMenuOnSelect}
      components={animatedComponents}
      isMulti={isMulti}
      options={options}
      styles={selectStyles}
      placeholder={placeholder}
      value={selected}
      onChange={(value) => onChange(value)}
    />
  )
}
