import { Edit, Trash2 } from "react-feather"

export const incomeReportTableHandler = () => {

    return  [
        {
            name: 'DESCRIPTION',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.description
            }
        },
        {
            name: 'AMOUNT',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.amount
            }
        },
        {
            name: 'LOG DATE',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return new Date(row?.log_date).toLocaleString()
            }
        },
        {
            name: 'CREATED AT',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return new Date(row?.created_at).toLocaleString()
            }
        },
        {
            name: 'UPDATED AT',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return new Date(row?.updated_at).toLocaleString()
            }
        }
    ]
}
