import Select, { StylesConfig } from "react-select"
import makeAnimated from "react-select/animated"

export interface Props {
  options: Option[]
  selected: Option[]
  placeholder?: string
  onChange?: (value: any) => void
  closeMenuOnSelect?: boolean
  isMulti?: boolean
  styleConfig?: StyleConfig
}

export interface Option {
  label: string
  value: string
}

export interface StyleConfig {
  container?: React.CSSProperties
  control?: React.CSSProperties
  option?: React.CSSProperties
  placeholder?: React.CSSProperties
  multiValueRemove?: React.CSSProperties
  clearIndicator?: React.CSSProperties
  menu?: React.CSSProperties
  input?: React.CSSProperties
  noOptionsMessage?: React.CSSProperties
}

export default function TextSelect({
  options,
  selected,
  placeholder = "",
  onChange = () => {},
  closeMenuOnSelect = false,
  isMulti = false,
  styleConfig = { container: { backgroundColor: "transparent" } },
}: Props) {
  const selectStyles: StylesConfig = {
    container: (styles) => ({
      ...styles,
      ...styleConfig.container,
    }),
    control: (styles, { isFocused }) => ({
      ...styles,
      border: "0",
      borderRadius: "20px",
      backgroundColor: "var(--primary-text-field-background-color)",
      boxShadow: isFocused ? "var(--primary-text-field-box-shadow)" : "none",
      fontSize: "1rem",
      textAlign: "left",
      cursor: "pointer",
      color: "var(--primary-black-color)",
    }),
    option: (styles, state) => {
      return {
        ...styles,
        backgroundColor: "yellow",
        color: state.isSelected ? "pink" : "orange",
        fontSize: "0.95rem",
        cursor: "pointer",
        borderRadius: "20rem",
      }
    },
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
        color: "red",
      },
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: "green",
      borderRadius: "20px",
    }),
    input: (styles) => ({
      ...styles,
      fontSize: "0.9rem",
    }),
    noOptionsMessage: (styles) => ({
      ...styles,
      fontSize: "0.9rem",
      color: "blue",
    }),
  }

  return (
    <Select
      closeMenuOnSelect={closeMenuOnSelect}
      isMulti={isMulti}
      options={options}
      styles={selectStyles}
      placeholder={placeholder}
      value={selected}
      onChange={(value) => onChange(value)}
      noOptionsMessage={() => "No options"}
    />
  )
}
