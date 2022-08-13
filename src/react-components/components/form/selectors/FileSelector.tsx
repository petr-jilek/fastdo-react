import { Button } from "@mui/material";

export interface Props {
    label: string,
    acceptedFileTypes: string[],
    mutlipleFiles?: boolean,
    onChange?: (file: File) => void,
    onMutlipleChange?: (files: FileList) => void,
}

export default function FileSelector({
    label,
    acceptedFileTypes,
    mutlipleFiles = false,
    onChange = () => { },
    onMutlipleChange = () => { }
}: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (mutlipleFiles) {
            if (e?.target?.files?.length! > 0) {
                onMutlipleChange(e!.target!.files!);
            }
        }
        else {
            if (e?.target?.files?.length! > 0) {
                var file = e!.target!.files![0]
                onChange(file);
            }
        }
    }

    return (
        <div>
            <input
                accept={acceptedFileTypes.join(",")}
                style={{ display: 'none' }}
                id="raised-button-file"
                type="file"
                multiple={mutlipleFiles}
                onChange={handleChange}
            />
            <label htmlFor="raised-button-file">
                <Button
                    variant="contained"
                    component="span"
                    style={{
                        backgroundColor: "var(--primary-color)",
                        borderRadius: "20rem", padding: "0.8rem 2rem",
                        textTransform: "none",
                        fontSize: "1rem"
                    }}>
                    {label}
                </Button>
            </label>
        </div>
    );
}
