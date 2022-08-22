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
                color: "var(--primary-white-color)"
            },
            '& button': {
                color: light ? "var(--primary-white-color)" : "var(--primary-black-color)",
                fontSize: "1rem",
                transition: "0.4s",
            },
            '& div': {
                color: light ? "var(--primary-white-color)" : "var(--primary-black-color)",
            },
            '& svg': {
                color: "var(--primary-color)",
            }
        }}
    />;
}
