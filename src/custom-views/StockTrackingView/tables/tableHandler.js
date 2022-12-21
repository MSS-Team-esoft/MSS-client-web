import { Edit, Trash2 } from "react-feather"

export const trackingTableHandler = () => {

    return  [
        {
            name: 'NAME',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.name
            }
        },
        {
            name: 'DOB',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row.dob
            }
        },
        {
            name: 'GENDER',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.gender
            }
        },
        {
            name: 'telephone No.',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row.telNo
            }
        },
        {
            name: 'ADDRESS',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row.address
            }
        },
        {
            name: 'ACTIONS',
            sortable: true,
            minWidth: '100px',
            selector: () => {
                return <div>
                    <button className='btn clickable'><Edit size={15}/></button>
                    <button
                        className='btn clickable'>
                        <Trash2  size={15} color='crimson'/>
                    </button>
                </div>
            }
        }
    ]
}
