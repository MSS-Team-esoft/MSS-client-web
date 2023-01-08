import { Edit, Trash2 } from "react-feather"
import {useDispatch} from "react-redux"
import {employeeActions} from "../slice/employeeSlice"

export const employeeTableHandler = () => {
    const dispatch = useDispatch()

    const handleEdit = (data) => {
        dispatch(employeeActions.setCurrentlyEditing(data))
    }

    const handleDelete = (data) => {
        dispatch(employeeActions.deleteEmployee(data))
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
                return row.telephone_number
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
            name: 'ROLE',
            sortable: true,
            minWidth: '100px',
            selector: row => {
                return row?.role
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
