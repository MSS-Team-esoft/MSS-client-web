export const inventoryTableHandler = () => {
    return  [
        {
            name: 'NAME',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.item_name
            }
        },
        {
            name: 'SERIAL NUMBER',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row.serial_number
            }
        },
        {
            name: 'QUANTITY',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return `${row?.quantity}`
            }
        }
    ]
}
