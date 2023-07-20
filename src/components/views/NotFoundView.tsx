import styles from './NotFoundView.module.css'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Spacer from '../general/Spacer'

export interface Props {
  logoSrc?: string | null
  logoComponent?: any
  header?: string
  text?: string
  showIcon?: boolean
  actionComponent?: any
}

const NotFoundView: React.FC<Props> = ({
  logoSrc = null,
  logoComponent = <></>,
  header = 'Not found',
  text = 'The page you are looking for might have been removed had its name changed or is temporarily unavailable.',
  showIcon = true,
  actionComponent = <></>
}) => {
  return (
    <div className={styles.component}>
      {logoSrc && <img src={logoSrc} alt="img" loading="lazy" className={styles.logo} />}
      {logoComponent}

      {showIcon && <AiOutlineSearch className={styles.icon} />}
      <Spacer />

      <h1>{header}</h1>
      <Spacer />

      {text && (
        <>
          <p className={styles.text}>{text}</p>
          <Spacer size={40} />
        </>
      )}

      {actionComponent && (
        <>
          {actionComponent}
          <Spacer size={20} />
        </>
      )}
    </div>
  )
}

export default NotFoundView
