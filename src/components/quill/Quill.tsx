import { useState, useRef } from "react"
// import ReactQuill from "react-quill"
import QuillToolbar, { modules, formats } from "./QuillToolbar"
import ImageSelector from "../form/selectors/ImageSelector"
// import "react-quill/dist/quill.snow.css"
// import "katex/dist/katex.min.css"

// https://katex.org/docs/supported.html
// import katex from "katex"

// declare global {
//   interface Window {
//     katex: any
//   }
// }

export interface Props {
  content: string
  onContentChange: (value: string) => void
  showImageIcon?: boolean
  imageNames?: string[]
  getImageUrl?: string
  placeholder?: string
  ReactQuill: any
  katex?: any
}

export default function PrimaryQuill({
  content,
  onContentChange,
  showImageIcon = true,
  imageNames = [],
  getImageUrl = "",
  placeholder = "",
  ReactQuill,
  katex = null,
}: Props) {
  const quillEditor = useRef<any>(null)
  const [showImageSelector, setShowImageSelector] = useState(false)

  const selectImage = (imageName: string) => {
    const editor = quillEditor.current?.getEditor()
    editor?.focus()
    const selector = editor?.getSelection()
    editor?.insertEmbed(selector ? selector.index : 0, "image", `${getImageUrl + "/" + imageName}`)

    setShowImageSelector(false)
  }

  // Add sizes to whitelist and register them
  const Size = ReactQuill.Quill.import("formats/size")
  Size.whitelist = ["extra-small", "small", "medium", "large"]
  ReactQuill.Quill.register(Size, true)

  if (katex) (window as any).katex = katex

  return (
    <div>
      {showImageIcon ? (
        <ImageSelector
          imageNames={imageNames}
          getImageUrl={getImageUrl}
          show={showImageSelector}
          onSelect={(imageName: string) => {
            selectImage(imageName)
          }}
          onClose={() => setShowImageSelector(false)}
        />
      ) : (
        <></>
      )}

      <QuillToolbar showImageIcon={showImageIcon} imageButtonClick={() => setShowImageSelector(!showImageSelector)} />

      <ReactQuill
        ref={quillEditor}
        theme="snow"
        value={content}
        onChange={(value: any) => onContentChange(value)}
        placeholder={placeholder}
        modules={modules}
        formats={formats}
        style={{
          height: "70vh",
        }}
      />
    </div>
  )
}
