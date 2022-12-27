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
                return row?.date
            }
        },
        {
            name: 'CREATED AT',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.createdAt
            }
        },
        {
            name: 'UPDATED AT',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.updatedAt
            }
        }
    ]
}
