import { Edit, Trash2 } from "react-feather"

export const workshopTableHandler = () => {

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
            name: 'DESCRIPTION',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row.description
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
