import UnitCard from "../../components/WorkMonitoringDashboard/UnitCard"
import {Col} from "reactstrap"
import {useHistory} from "react-router-dom"

const WorkMonitoringView = () => {

    const history = useHistory()

    const routeToUnit = (id) => {
        history.push('/work-monitoring/unit-view', {
            data: {
                id
            }
        })
    }

    return <div>
        <h1 className='f-Staatliches font-large-1'>Work Monitoring Module</h1>
        <p className='mt-3 text-danger'>*Select an unit to proceed</p>
        <div className='d-flex gap-2 mt-2'>
            <Col onClick={() => routeToUnit(1)} lg={2}><UnitCard name='Unit 01'/></Col>
        </div>
    </div>
}

export default WorkMonitoringView
