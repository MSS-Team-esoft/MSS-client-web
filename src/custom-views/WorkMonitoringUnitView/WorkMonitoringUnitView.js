import {Card, CardBody, CardHeader, Col, Row} from "reactstrap"
import WorkMonitoringCard from "../../components/WorkMonitoringUnitView/WorkMonitoringCard"
import {useLocation} from "react-router-dom"

const WorkMonitoringUnitView = () => {

    const location = useLocation()

    console.log(location.state.data)

    return <div>
        <h1 className='f-Staatliches'>{location.state.data.name}'s: Tasks list</h1>
        <Row className='mt-2'>
            <Col lg={4}>
                <Card className='bg-light-grey'>
                    <CardHeader className='font-bold text-medium text-white bg-gradient-primary'>{'TODO'}</CardHeader>
                    <CardBody className='pt-2'>
                        <WorkMonitoringCard
                            title="Build 10 lock bearers"
                            description='Craft 10 lock bearers using the A-17 type cutter.
                            All the bearers must be sealed. After finish crafting...'
                            createdAt='2022/02/22'
                            deadlineAt='2022/02/25'
                        />

                        <WorkMonitoringCard
                            title="Craft safe door with FG-12 handle"
                            description='Use the FG-12 door for the safe. Reason for use this type
                            is because of its high level of...'
                            createdAt='2022/02/22'
                            deadlineAt='2022/02/27'
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col lg={4}>
                <Card className='bg-light-grey'>
                    <CardHeader className='font-bold text-medium text-dark bg-gradient-warning'>ONGOING</CardHeader>
                    <CardBody className='pt-2'>
                        <WorkMonitoringCard
                            title="Polish all the safe doors"
                            description='Black polish all the safe doors. Before polish them, first use a pressure gun to wash them'
                            createdAt='2022/02/22'
                            deadlineAt='2022/02/25'
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col lg={4}>
                <Card className='bg-light-grey'>
                    <CardHeader className='font-bold text-medium text-light bg-gradient-danger'>FINISHED</CardHeader>
                    <CardBody className='pt-2'>
                        <WorkMonitoringCard
                            title="Paint all the safe doors"
                            description='After paint a door, make sure to polish with a shiner.'
                            createdAt='2022/02/22'
                            deadlineAt='2022/02/25'
                        />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </div>
}

export default WorkMonitoringUnitView
