import { useState } from "react";
import Quill from "../../../react-components/components/quill/Quill";
import 'react-quill/dist/quill.snow.css';

export default function QuillPage() {
    const [quillContent, setQuillContent] = useState("")

    return (
        <>
            <h1>Quill</h1>
            <hr />

            <h3>Quill</h3>

            <Quill
                content={quillContent}
                onContentChange={(value) => setQuillContent(value)}
                imageNames={["road-1072823_960_720.jpg"]}
                getImageUrl="https://cdn.pixabay.com/photo/2015/12/01/20/28"
                placeholder="Placeholder"
            />
        </>
    );
}
