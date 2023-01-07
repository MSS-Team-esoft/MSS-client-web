import {Badge} from "reactstrap"
import {Edit, Trash2} from "react-feather"

export const divisionStockTableHandler = () => {

    const handleTrackState = (qty, warning, crit) => {

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
        // {
        //     name: 'ACTIONS',
        //     sortable: true,
        //     minWidth: '100px',
        //     selector: () => {
        //         return <div>
        //             <button className='btn clickable'><Edit size={15}/></button>
        //             <button
        //                 className='btn clickable'>
        //                 <Trash2  size={15} color='crimson'/>
        //             </button>
        //         </div>
        //     }
        // }
    ]
}
