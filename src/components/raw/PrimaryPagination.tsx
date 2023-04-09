import { Pagination } from "@mui/material"

export interface Props {
  page: number
  pagesCount: number
  onChange?: (page: number) => void
  siblingCount?: number
  selectedBackgroundColor?: string
  selectedColor?: string
  buttonColor?: string
  svgColor?: string
}

export default function PrimaryPagination({
  page,
  pagesCount,
  onChange = () => {},
  siblingCount = 1,
  selectedBackgroundColor = "var(--fastdo-primary-color)",
  selectedColor = "var(--fastdo-light-color)",
  buttonColor = "var(--fastdo-dark-color)",
  svgColor = "var(--fastdo-primary-color)",
}: Props) {
  return (
    <Pagination
      page={page}
      count={pagesCount}
      siblingCount={siblingCount}
      onChange={(_event, page) => onChange(page)}
      sx={{
        "& .Mui-selected": {
          backgroundColor: selectedBackgroundColor + " !important",
          color: selectedColor,
        },
        "& button": {
          color: buttonColor,
          fontSize: "1rem",
          transition: "0.4s",
        },
        "& svg": {
          color: svgColor,
        },
      }}
    />
  )
}
