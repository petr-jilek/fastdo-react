import { useEffect } from "react"
import useComponentVisible from "../../../hooks/useComponentVisible"
import styles from "./RecommendationTextField.module.css"
import TextField, { Props as TextFieldProps } from "./TextField"

export interface Props {
  textFieldProps: TextFieldProps
  onInputClick?: () => void
  onTextChangeDelayed?: (value: string) => void
  onRecommendationClick?: (value: RecommendationItem) => void
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
  textFieldProps,
  onInputClick = () => {},
  onTextChangeDelayed = () => {},
  onRecommendationClick = () => {},
  recommendations = [],
  showRecommendations = true,
  onTextChangeDelayedTimeout = 300,
  recommendationsContainerDivStyle = {},
  recommendationTextStyle = {},
}: Props) {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true)

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      onTextChangeDelayed(textFieldProps.value)
    }, onTextChangeDelayedTimeout)

    return () => clearTimeout(delayDebounce)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textFieldProps.value])

  const handleInputClick = () => {
    onInputClick()
    setIsComponentVisible(true)
  }

  return (
    <div className={styles.component} ref={ref}>
      <TextField {...textFieldProps} onInputClick={handleInputClick} />
      {recommendations && recommendations.length > 0 && showRecommendations && isComponentVisible && (
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
      )}
    </div>
  )
}
