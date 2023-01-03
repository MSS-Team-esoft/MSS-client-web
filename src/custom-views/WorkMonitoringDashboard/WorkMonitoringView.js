import UnitCard from "../../components/WorkMonitoringDashboard/UnitCard"
import {Col} from "reactstrap"
import {useHistory} from "react-router-dom"

const WorkMonitoringView = () => {

    const history = useHistory()

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
            <Col onClick={() => routeToUnit(1, 'Jack Ryder')} lg={2}><UnitCard name='Jack Ryder'/></Col>
            <Col onClick={() => routeToUnit(1, 'Jack Ryder')} lg={2}><UnitCard name='Ryan Jacob'/></Col>
            <Col onClick={() => routeToUnit(1, 'Jack Ryder')} lg={2}><UnitCard name='David Peterson'/></Col>
            <Col onClick={() => routeToUnit(1, 'Jack Ryder')} lg={2}><UnitCard name='Json Riley'/></Col>
            <Col onClick={() => routeToUnit(1, 'Jack Ryder')} lg={2}><UnitCard name='Anne Kentuky'/></Col>
            <Col onClick={() => routeToUnit(1, 'Jack Ryder')} lg={2}><UnitCard name='Gathsara Umesh'/></Col>
        </div>
    </div>
}

export default WorkMonitoringView
