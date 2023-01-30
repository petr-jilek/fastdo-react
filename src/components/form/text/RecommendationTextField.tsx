import { useEffect } from "react"
import useComponentVisible from "../../../hooks/useComponentVisible"
import styles from "./RecommendationTextField.module.css"
import TextField, { IOnTextChangeData } from "./TextField"

export interface Props {
  label?: string
  placeholder?: string
  value: string
  onTextChange: ({ e, value }: IOnTextChangeData) => void
  onEnter?: ({ e, value }: IOnTextChangeData) => void
  divStyle?: React.CSSProperties
  labelStyle?: React.CSSProperties
  inputStyle?: React.CSSProperties
  onTextChangeDelayed?: (value: string) => void
  onRecommendationClick?: (value: RecommendationItem) => void
  onInputClick?: (value: string) => void
  recommendations?: RecommendationItem[]
  showRecommendations?: boolean
  onTextChangeDelayedTimeout?: number
  recommendationsContainerDivStyle?: React.CSSProperties
  recommendationTextStyle?: React.CSSProperties
}

export interface RecommendationItem {
  id: string
  name: string
}

export default function RecommendationTextField({
  label = "",
  placeholder = "",
  value,
  onTextChange,
  onEnter = () => {},
  divStyle = {},
  labelStyle = {},
  inputStyle = {},
  onTextChangeDelayed = () => {},
  onRecommendationClick = () => {},
  onInputClick = () => {},
  recommendations = [],
  showRecommendations = false,
  onTextChangeDelayedTimeout = 300,
  recommendationsContainerDivStyle = {},
  recommendationTextStyle = {},
}: Props) {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true)

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      onTextChangeDelayed(value)
    }, onTextChangeDelayedTimeout)

    return () => clearTimeout(delayDebounce)
  }, [onTextChangeDelayed, onTextChangeDelayedTimeout, value])

  const onInputClickHandler = () => {
    onInputClick(value)
    setIsComponentVisible(true)
  }

  return (
    <div className={styles.component} ref={ref}>
      <TextField
        label={label}
        placeholder={placeholder}
        value={value}
        onTextChange={onTextChange}
        onEnter={onEnter}
        onInputClick={onInputClickHandler}
        divStyle={divStyle}
        labelStyle={labelStyle}
        inputStyle={inputStyle}
      />
      {recommendations && recommendations.length > 0 && showRecommendations && isComponentVisible ? (
        <div className={styles.recommendationsContainerDiv} style={recommendationsContainerDivStyle}>
          {recommendations.map((item, index) => (
            <p
              key={index}
              className={styles.recomendationText}
              onClick={() => onRecommendationClick(item)}
              style={recommendationTextStyle}
            >
              {item.name}
            </p>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
