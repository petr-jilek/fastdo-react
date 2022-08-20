import styles from "./CircularProgressPage.module.css"

import PrimaryCircularProgress from './PrimaryCircularProgress';

export interface Props {
    size?: number,
}

export default function CircularProgressPage({ size = 120 }: Props) {
    return <div className={styles.component}>
        <PrimaryCircularProgress size={size} />
    </div>
}
