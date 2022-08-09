import { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import QuillToolbar, { modules, formats } from "./QuillToolbar";
import ImageSelector from '../form/selectors/ImageSelector';

export interface Props {
    content: string,
    onContentChange: (value: string) => void,
    imageNames: string[],
    getImageUrl: string,
    placeholder?: string,
}

export default function Quill({ content, onContentChange, imageNames, getImageUrl, placeholder = "" }: Props) {
    let quillEditor = useRef<ReactQuill>(null);
    const [showImageSelector, setShowImageSelector] = useState(false);

    const selectImage = (imageName: string) => {
        const editor = quillEditor.current?.getEditor();
        editor?.focus();
        const selector = editor?.getSelection();
        editor?.insertEmbed(selector ? selector.index : 0, 'image', `${getImageUrl + "/" + imageName}`);

        setShowImageSelector(false);
    }

    return (
        <div>
            <ImageSelector
                imageNames={imageNames}
                getImageUrl={getImageUrl}
                show={showImageSelector}
                onSelect={(imageName: string) => { selectImage(imageName) }}
                onClose={() => setShowImageSelector(false)}
            />

            <QuillToolbar imageButtonClick={() => setShowImageSelector(!showImageSelector)} />

            <ReactQuill
                ref={quillEditor}
                theme="snow"
                value={content}
                onChange={(value) => onContentChange(value)}
                placeholder={placeholder}
                modules={modules}
                formats={formats}
            />
        </div>
    );
}
