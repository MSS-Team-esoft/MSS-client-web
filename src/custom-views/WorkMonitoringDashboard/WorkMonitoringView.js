import UnitCard from "../../components/WorkMonitoringDashboard/UnitCard"
import {Col} from "reactstrap"

const WorkMonitoringView = () => {

    return <div>
        <h1 className='f-Staatliches font-large-1'>Work Monitoring Module</h1>
        <p className='mt-3 text-danger'>*Select an unit to proceed</p>
        <div className='d-flex gap-2 mt-2'>
            <Col lg={2}><UnitCard name='Unit 01'/></Col>
        </div>
    </div>
}

export default WorkMonitoringView
