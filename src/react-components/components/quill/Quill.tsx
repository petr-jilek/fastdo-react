import { useState, useRef } from "react";
import ReactQuill from "react-quill";
import QuillToolbar, { modules, formats } from "./QuillToolbar";
import ImageSelector from "../form/selectors/ImageSelector";
import 'react-quill/dist/quill.snow.css';
import katex from "katex";
import "katex/dist/katex.min.css";

declare global {
    interface Window {
        katex:any;
    }
}

window.katex = katex;

export interface Props {
  content: string;
  onContentChange: (value: string) => void;
  showImageIcon?: boolean;
  imageNames?: string[];
  getImageUrl?: string;
  placeholder?: string;
}

export default function Quill({
  content,
  onContentChange,
  showImageIcon = true,
  imageNames = [],
  getImageUrl = "",
  placeholder = "",
}: Props) {
  let quillEditor = useRef<ReactQuill>(null);
  const [showImageSelector, setShowImageSelector] = useState(false);

  const selectImage = (imageName: string) => {
    const editor = quillEditor.current?.getEditor();
    editor?.focus();
    const selector = editor?.getSelection();
    editor?.insertEmbed(
      selector ? selector.index : 0,
      "image",
      `${getImageUrl + "/" + imageName}`
    );

    setShowImageSelector(false);
  };

  return (
    <div>
      {showImageIcon ? (
        <ImageSelector
          imageNames={imageNames}
          getImageUrl={getImageUrl}
          show={showImageSelector}
          onSelect={(imageName: string) => {
            selectImage(imageName);
          }}
          onClose={() => setShowImageSelector(false)}
        />
      ) : (
        <></>
      )}

      <QuillToolbar
        showImageIcon={showImageIcon}
        imageButtonClick={() => setShowImageSelector(!showImageSelector)}
      />

      <ReactQuill
        ref={quillEditor}
        theme="snow"
        value={content}
        onChange={(value) => onContentChange(value)}
        placeholder={placeholder}
        modules={modules}
        formats={formats}
        style={{
          height: "70vh",
        }}
      />
    </div>
  );
}
