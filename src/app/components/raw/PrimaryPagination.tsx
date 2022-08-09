import { Pagination } from '@mui/material';

export interface Props {
    pagesCount: number,
    onChange?: ({ e, page }: OnChangeData) => void,
    light?: boolean,
}

export interface OnChangeData {
    e?: React.ChangeEvent<unknown>,
    page?: number,
}

export default function PrimaryPagination({ pagesCount, onChange = () => { }, light = false }: Props) {
    return <Pagination
        count={pagesCount}
        onChange={(event, page) => onChange({ e: event, page: page })}
    />;
}