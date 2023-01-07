import { Edit, Trash2 } from "react-feather"
import {useDispatch} from "react-redux"
import {workshopActions} from "../slice/workshopSlice"

export const workshopTableHandler = () => {
    const dispatch = useDispatch()

    const handleEdit = (data) => {
        dispatch(workshopActions.setCurrentlyEditing(data))
    }

    const handleDelete = (data) => {
        dispatch(workshopActions.deleteWorkshop(data))
    }

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
            selector: (row) => {
                return <div>
                    <button
                      className='btn clickable'
                      onClick={() => handleEdit(row)}
                    >
                        <Edit size={15}/>
                    </button>
                    <button
                      className='btn clickable'
                      onClick={() => handleDelete(row)}
                    >
                        <Trash2  size={15} color='crimson'/>
                    </button>
                </div>
            }
        }
    ]
}
