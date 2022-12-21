import {Badge} from "reactstrap"

export const trackingTableHandler = () => {

    const handleTrackState = (qty, warning, crit) => {

        console.log(qty)
        console.log(warning)
        console.log(crit)
        console.log(qty <= warning && qty > crit)
        console.log('')

        if (qty > warning) return <Badge color='light-success'>good</Badge>
        else if (qty <= warning && qty > crit) return <Badge color='light-warning'>warning</Badge>

        return <Badge color='light-danger'>critical</Badge>
    }

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
                return `${row?.quantity} ${row?.unit}`
            }
        },
        {
            name: 'CRITICAL LEVEL',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row.track_level
            }
        },
        {
            name: 'WARNING LEVEL',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row.warning_level
            }
        },
        {
            name: 'ITEM STATUS',
            sortable: true,
            minWidth: '100px',
            selector: (row) => {
                return handleTrackState(row?.quantity, row.warning_level, row.track_level)
            }
        }
    ]
}
