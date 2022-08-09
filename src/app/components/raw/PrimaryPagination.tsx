import { Pagination } from '@mui/material';

export interface Props {
    page: number,
    pagesCount: number,
    onChange?: (page: number) => void,
    light?: boolean,
}

export default function PrimaryPagination({ page, pagesCount, onChange = () => { }, light = false }: Props) {
    return <Pagination
        page={page}
        count={pagesCount}
        onChange={(_event, page) => onChange(page)}
        sx={{
            '& .Mui-selected': {
                backgroundColor: 'var(--primary-color) !important',
                color: "white"
            },
            '& button': {
                color: light ? "white" : "var(--default-black-color)",
                fontSize: "1rem",
                transition: "0.4s",
            },
            '& div': {
                color: "white",
            },
            '& svg': {
                color: "var(--primary-color)",
            }
        }}
    />;
}
