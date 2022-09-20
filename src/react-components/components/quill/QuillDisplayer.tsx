import styles from "./QuillDisplayer.module.css"
import 'react-quill/dist/quill.snow.css';

export interface Props {
    content: string
}

export default function QuillDisplayer({ content }: Props) {
    return (
        <div className={["ql-editor", styles.component].join(" ")} dangerouslySetInnerHTML={{ __html: content }}></div>
    );
}