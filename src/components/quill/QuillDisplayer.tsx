import styles from "./QuillDisplayer.module.css"
// Styles "./quill.css" fave to be imported in the page that uses this component
// import "./quill.css"

export interface Props {
  content: string
}

export default function QuillDisplayer({ content }: Props) {
  return <div className={["ql-editor", styles.component].join(" ")} dangerouslySetInnerHTML={{ __html: content }}></div>
}
