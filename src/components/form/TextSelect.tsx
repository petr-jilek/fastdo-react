import Select, { StylesConfig } from "react-select"

export interface Props {
  options: Option[]
  selected: Option[]
  placeholder?: string
  onChange?: (value: any) => void
  closeMenuOnSelect?: boolean
  isMulti?: boolean
  noOptionsMessage?: (params: NoOptionsMessageParams) => string
  stylesConfig?: StylesConfig
}

export interface Option {
  label: string
  value: string
}

export interface NoOptionsMessageParams {
  inputValue?: string
}

export default function TextSelect({
  options,
  selected,
  placeholder = "",
  onChange = () => {},
  closeMenuOnSelect = false,
  isMulti = false,
  noOptionsMessage = () => "No options",
  stylesConfig = {
    container: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
    }),
    control: (styles, { isFocused }) => ({
      ...styles,
      border: "0",
      borderRadius: "20rem",
      backgroundColor: "var(--primary-text-field-background-color)",
      boxShadow: isFocused ? "var(--primary-text-field-box-shadow-focus)" : "none",
      fontSize: "1rem",
      textAlign: "left",
      cursor: "pointer",
      color: "var(--primary-text-black-color)",
    }),
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: "var(--primary-text-field-background-color)",
        color: "var(--primary-text-black-color)",
        fontSize: "1rem",
        cursor: "pointer",
        borderRadius: "20rem",
      }
    },
    multiValueRemove: (styles) => ({
      ...styles,
      color: "var(--text-select-clear-color)",
      transition: "0.3s",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "var(--text-select-clear-background-color-hover)",
        color: "var(--text-select-clear-color-hover)",
      },
    }),
    clearIndicator: (styles) => ({
      ...styles,
      color: "var(--text-select-clear-color)",
      transition: "0.3s",
      cursor: "pointer",
      "&:hover": {
        color: "var(--text-select-clear-color-hover)",
      },
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: "var(--primary-text-field-background-color)",
      borderRadius: "20px",
    }),
    input: (styles) => ({
      ...styles,
      fontSize: "1rem",
    }),
    noOptionsMessage: (styles) => ({
      ...styles,
      fontSize: "1rem",
      color: "var(--primary-text-black-color)",
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: "var(--primary-text-black-color)",
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
    }),
  },
}: Props) {
  return (
    <Select
      closeMenuOnSelect={closeMenuOnSelect}
      isMulti={isMulti}
      options={options}
      styles={stylesConfig}
      placeholder={placeholder}
      value={selected}
      onChange={(value) => onChange(value)}
      noOptionsMessage={noOptionsMessage}
    />
  )
}
