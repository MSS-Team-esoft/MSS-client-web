import UnitCard from "../../components/WorkMonitoringDashboard/UnitCard"
import {Col} from "reactstrap"
import {useHistory} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {employeeActions, selectEmployees} from "../employeeView/slice/employeeSlice"
import {useEffect} from "react"

const WorkMonitoringView = () => {

    const employees = useSelector(selectEmployees)

    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(employeeActions.getEmployees())
    }, [dispatch])

    const routeToUnit = (id, name) => {
        history.push('/work-monitoring/unit-view', {
            data: {
                name,
                id
            }
        })
    }

    return <div>
        <h1 className='f-Staatliches font-large-1'>Work Monitoring Module</h1>
        <p className='mt-3 text-primary'>*Select an employee to proceed</p>
        <div className='d-flex gap-1 mt-2 justify-content-start flex-wrap'>
            {
                employees?.map((e) => {
                    return e.role === 'employee' && <Col key={e?.id} onClick={() => routeToUnit(e?.id, e?.name)} lg={2}><UnitCard name={e?.name}/></Col>
                })
            }
        </div>
    </div>
}

export default WorkMonitoringView
