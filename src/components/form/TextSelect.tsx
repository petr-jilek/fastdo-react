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
      borderRadius: "var(--fastdo-border-radius-3)",
      background: "var(--fastdo-text-field-input-background)",
      boxShadow: isFocused ? "var(--fastdo-text-field-box-shadow)" : "none",
      fontSize: "var(--fastdo-text-field-input-font-size)",
      fontWeight: "var(--fastdo-text-field-input-font-weight)",
      textAlign: "left",
      cursor: "pointer",
      color: "var(--fastdo-text-field-input-color)",
    }),
    option: (styles) => {
      return {
        ...styles,
        background: "var(--fastdo-text-field-input-background)",
        color: "var(--fastdo-dark-color)",
        fontSize: "var(--fastdo-text-field-input-font-size)",
        fontWeight: "var(--fastdo-text-field-input-font-weight)",
        cursor: "pointer",
      }
    },
    multiValueRemove: (styles) => ({
      ...styles,
      color: "var(--fastdo-dark-color)",
      transition: "0.3s",
      cursor: "pointer",
      "&:hover": {
        background: "var(--fastdo-error-color)",
        color: "var(--fastdo-light-color)",
      },
    }),
    clearIndicator: (styles) => ({
      ...styles,
      color: "var(--fastdo-dark-color)",
      transition: "0.3s",
      cursor: "pointer",
      "&:hover": {
        background: "var(--fastdo-error-color)",
        color: "var(--fastdo-light-color)",
      },
    }),
    menu: (styles) => ({
      ...styles,
      background: "var(--fastdo-text-field-input-background)",
      borderRadius: "var(--fastdo-border-radius-3)",
    }),
    input: (styles) => ({
      ...styles,
      fontSize: "var(--fastdo-text-field-input-font-size)",
      fontWeight: "var(--fastdo-text-field-input-font-weight)",
    }),
    noOptionsMessage: (styles) => ({
      ...styles,
      fontSize: "var(--fastdo-text-field-input-font-size)",
      fontWeight: "var(--fastdo-text-field-input-font-weight)",
      color: "var(--fastdo-dark-color)",
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: "var(--fastdo-dark-color)",
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
