import { useEffect, useRef, useState } from "react"
import styles from "./RecommendationTextField.module.css"

export interface Props {
    label?: string,
    placeholder?: string,
    type?: string,
    min?: number,
    defaultValue?: string,
    onTextChange?: ({ e, value }: IOnTextChangeData) => void,
    onEnter?: ({ e, value }: IOnTextChangeData) => void,
    onChangeDelayed?: (value: string) => void,
    onRecommendationClick?: (value: string) => void,
    leftBorderRadius?: number,
    rightBorderRadius?: number,
    light?: boolean,
    recommendations?: RecommendationItem[],
    labelFontSize?: number,
}

export interface IOnTextChangeData {
    e?: any,
    value?: any
}

export interface RecommendationItem {
    id: string,
    name: string
}

export default function RecommendationTextField({
    label = "",
    placeholder = "",
    type = "text",
    min = 0,
    defaultValue = "",
    onTextChange = () => { },
    onEnter = () => { },
    onChangeDelayed = () => { },
    onRecommendationClick = () => { },
    leftBorderRadius = 20,
    rightBorderRadius = 20,
    light = false,
    recommendations = [],
    labelFontSize = 1,
}: Props) {
    const inputRef = useRef<null | HTMLInputElement>(null)

    const [text, setText] = useState(defaultValue)

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (text)
                onChangeDelayed(text)
        }, 300)

        return () => clearTimeout(delayDebounce)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const handleRecommendationClick = (id: string) => {
        onRecommendationClick(id)
        setText("")
    }

    const onChange = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
        var value = (e as any).target.value

        if (type === "number" && parseInt(value) < min) {
            inputRef.current!.value = min.toString()
            return
        }

        setText(value)
        onTextChange({ e: e, value: value });
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onEnter({ e: e, value: (e.target as any).value })
        }
    }

    return <div className={styles.component}>
        {
            label === ""
                ? <></>
                : <p style={{ fontSize: `${labelFontSize}rem`, }}>{label}</p>
        }
        <input
            ref={inputRef}
            type={type}
            value={text}
            min={min}
            className={[
                styles.input,
                light ? styles.inputLight : styles.inputDefault
            ].join(" ")}
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            style={{
                borderTopLeftRadius: leftBorderRadius + "rem",
                borderBottomLeftRadius: leftBorderRadius + "rem",
                borderTopRightRadius: rightBorderRadius + "rem",
                borderBottomRightRadius: rightBorderRadius + "rem",
            }}
        />
        {
            recommendations && recommendations.length > 0
                ? <div className={styles.recommendationContainerDiv}>
                    {recommendations.map((item, index) => <p key={index} onClick={() => handleRecommendationClick(item.id)}>{item.name}</p>)}
                </div>
                : <></>
        }
    </div>
}
