import {Card, CardBody, CardHeader, Col, Row} from "reactstrap"
import WorkMonitoringCard from "../../components/WorkMonitoringUnitView/WorkMonitoringCard"

const WorkMonitoringUnitView = () => {

    return <div>
        <h1 className='f-Staatliches'>UNIT 01: Tasks list</h1>
        <Row className='mt-2'>
            <Col lg={4}>
                <Card className='bg-light-grey'>
                    <CardHeader className='font-bold text-medium text-primary'>{'TODO'}</CardHeader>
                    <CardBody>
                        <WorkMonitoringCard />
                    </CardBody>
                </Card>
            </Col>
            <Col lg={4}>
                <Card className='bg-light-grey'>
                    <CardHeader className='font-bold text-medium text-purple'>ONGOING</CardHeader>
                    <CardBody></CardBody>
                </Card>
            </Col>
            <Col lg={4}>
                <Card className='bg-light-grey'>
                    <CardHeader className='font-bold text-medium text-success'>FINISHED</CardHeader>
                    <CardBody></CardBody>
                </Card>
            </Col>
        </Row>
    </div>
}

export default WorkMonitoringUnitView
