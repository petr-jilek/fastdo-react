import { useState } from "react";
import { Button } from "../../../lib/components/form/buttons/Button";
import FileSelector from "../../../lib/components/form/selectors/FileSelector";
import ImageSelector from "../../../lib/components/form/selectors/ImageSelector";
import TextArea from "../../../lib/components/form/text/TextArea";
import TextField from "../../../lib/components/form/text/TextField";
import TextFieldButtonRow from "../../../lib/components/form/TextFieldButtonRow";
import TextSelect, { Option } from "../../../lib/components/form/TextSelect";

export default function FormPage() {
    const [showImageSelector, setShowImageSelector] = useState(false)

    const [textSelectItems, setTextSelectItems] = useState<Option[]>([]);

    return (
        <>
            <h1>Form</h1>
            <hr />

            <h2>Buttons</h2>

            <h3>Button</h3>

            <div>
                <Button label="Label" />
            </div>
            <br />
            <div>
                <Button label="Label" leftBorderRadius={false} rightBorderRadius={false} />
            </div>

            <h2>Selectors</h2>

            <h3>FileSelector</h3>

            <FileSelector label="Upload file (.png)" acceptedFileTypes={[".png"]} />

            <h3>ImageSelector</h3>

            <ImageSelector
                imageNames={["road-1072823_960_720.jpg"]}
                getImageUrl="https://cdn.pixabay.com/photo/2015/12/01/20/28"
                show={showImageSelector}
                onClose={() => setShowImageSelector(false)}
                onSelect={() => setShowImageSelector(false)}
            />
            <div>
                <Button label="Open ImageSelector" onClick={() => setShowImageSelector(true)} />
            </div>

            <h2>Text</h2>

            <h3>TextArea</h3>
            <TextArea label="Label" placeholder="Placeholder" />

            <h3>TextField</h3>
            <TextField label="Label" placeholder="Placeholder" />
            <br />
            <TextField label="Label Password" placeholder="Placeholder" type="password" />
            <br />
            <TextField label="Label Number" placeholder="Placeholder" type="number" />

            <h3>TextFieldButtonRow</h3>
            <TextFieldButtonRow buttonLabel="label" placeholder="Placeholder" />

            <h3>TextSelect</h3>
            <TextSelect
                options={[
                    { label: "Label1", value: "Value1" },
                    { label: "Label2", value: "Value2" },
                    { label: "Label3", value: "Value3" },
                ]}
                selected={textSelectItems}
                onChange={(value) => {
                    setTextSelectItems([...textSelectItems, ...value])
                }}
            />
            <br />


        </>
    );
} 