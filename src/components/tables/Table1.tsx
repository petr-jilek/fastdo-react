import styles from "./Table1.module.css"
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"
import CheckBox from "../raw/CheckBox"
import Card from "../cards/Card"
import { useState } from "react"
import { AiFillFilter } from "react-icons/ai"
import PrimaryCircularProgress from "../raw/PrimaryCircularProgress"

export interface Props {
  headers: HeaderItem[]
  items?: any[][]
  loadingItems?: boolean
}

export interface HeaderItem {
  id: string
  name: string
  element?: any
  sort?: boolean
  sortProps?: SortProps
  filter?: boolean
  filterProps?: FilterProps
}

export interface SortProps {
  sortDescending: boolean
  onChange?: () => void
}

export interface FilterProps {
  // type: "checkbox" | "radio"
  options: FilterOption[]
  allOption: boolean
  allLabel?: string
  onChange?: (values: any[]) => void
}

export interface FilterOption {
  name: string
  value: any
  selected: boolean
}

export default function Table1({ headers, items, loadingItems }: Props) {
  const [showFiltersIds, setShowFiltersIds] = useState<string[]>([])

  const toggleShowFilter = (id: string) => {
    if (showFiltersIds.includes(id)) setShowFiltersIds(showFiltersIds.filter((filterId) => filterId !== id))
    else setShowFiltersIds([...showFiltersIds, id])
  }

  return (
    <div className={styles.component}>
      {/* <TextField value={orderCode} onTextChange={({ value }) => setOrderCode(value)} label="Hledat kód objednávky" />
      <Spacer /> */}
      <div className={styles.tableDiv}>
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header.name}>
                  <div className={styles.thActionDiv}>
                    {header.element ? header.element : <p>{header.name}</p>}
                    {header.sort && (
                      <div className={styles.sortIconsDiv}>
                        <MdKeyboardArrowUp className={styles.sortIcon} />
                        <MdKeyboardArrowDown className={styles.sortIcon} />
                      </div>
                    )}
                    {header.filter && (
                      <AiFillFilter className={styles.filterIcon} onClick={() => toggleShowFilter(header.id)} />
                    )}
                  </div>
                  {header.filter && showFiltersIds.includes(header.id) && (
                    <div className={styles.filterOptionsModalPinningDiv}>
                      <div className={styles.filterOptionsModal}>
                        <Card style={{ padding: "14px 10px" }}>
                          <>
                            {header.filterProps?.allOption && (
                              <CheckBox
                                label={header.filterProps?.allLabel || "All"}
                                value={header.filterProps.options.filter((opt) => opt.selected === false).length === 0}
                                onChange={() => {
                                  if (header.filterProps?.options.filter((opt) => opt.selected === false).length === 0)
                                    header.filterProps?.onChange?.([])
                                  else
                                    header.filterProps?.onChange?.(header.filterProps.options.map((opt) => opt.value))
                                }}
                              />
                            )}
                            {header.filterProps?.options?.map((option) => (
                              <CheckBox
                                key={option.value}
                                label={option.name}
                                value={option.selected}
                                onChange={() => {
                                  const newOptions = header.filterProps?.options?.map((opt) => {
                                    if (opt.value === option.value) return { ...opt, selected: !opt.selected }
                                    return opt
                                  })
                                  header.filterProps?.onChange?.(
                                    newOptions?.filter((opt) => opt.selected).map((opt) => opt.value) || [],
                                  )
                                }}
                              />
                            ))}
                          </>
                        </Card>
                      </div>
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loadingItems === false &&
              items?.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, index2) => (
                    <td key={index2}>{cell}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        {loadingItems && (
          <div style={{ height: "350px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <PrimaryCircularProgress size={100} />
          </div>
        )}
      </div>
    </div>
  )
}
