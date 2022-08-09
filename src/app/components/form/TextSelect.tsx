import Select, { StylesConfig } from 'react-select';
import makeAnimated from 'react-select/animated';

export interface Props {
    options: Option[],
    selected: Option[],
    placeholder?: string,
    onChange?: (value: any) => void,
    light?: boolean
}

export interface Option {
    label: string,
    value: string,
}

export default function TextSelect({
    options,
    selected,
    placeholder = "",
    onChange = () => { },
    light = false
}: Props) {
    const handleChange = (newValue: any) => {
        onChange(newValue)
    }

    const animatedComponents = makeAnimated()

    const selectStyles: StylesConfig = {
        container: (styles) => ({
            ...styles,
            backgroundColor: "transparent",
        }),
        control: (styles, { isFocused }) => ({
            ...styles,
            border: 0,
            backgroundColor: light ? "var(--light-white-color)" : "var(--primary-text-field-background-color)",
            boxShadow: isFocused ? "var(--primary-text-field-box-shadow)" : "none",
            fontSize: "1rem",
            textAlign: "left",
        }),
        option: (styles) => {
            return {
                ...styles,
                backgroundColor: light ? "var(--light-white-color)" : "var(--primary-text-field-background-color)",
                fontSize: "0.95rem",
            };
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
                color: "var(--error-color)",
            }
        }),
        clearIndicator: (styles) => ({
            ...styles,
            color: "var(--default-black-color)",
            transition: "0.3s",
            cursor: "pointer",
            "&:hover": {
                color: "var(--error-color)",
            }
        }),
        menu: (styles) => ({
            ...styles,
            backgroundColor: light ? "var(--light-white-color)" : "var(--primary-text-field-background-color)",
        })
    };


    return <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={options}
        styles={selectStyles}
        placeholder={placeholder}
        value={selected}
        onChange={handleChange}
    />;
}
