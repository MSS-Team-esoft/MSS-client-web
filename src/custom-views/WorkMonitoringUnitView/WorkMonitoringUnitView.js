import {Card, CardBody, CardHeader, Col, Row} from "reactstrap"
import WorkMonitoringCard from "../../components/WorkMonitoringUnitView/WorkMonitoringCard"
import {useLocation} from "react-router-dom"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {createWorkActions, selectTasks, selectUserId} from "../WorkCreateUnitView/slice/createWorkSlice"

const WorkMonitoringUnitView = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const {id, name} = location.state.data
    const tasks = useSelector(selectTasks)
    const userId = useSelector(selectUserId)

    useEffect(() => {
        dispatch(createWorkActions.setUserId(id))
    }, [id])

    useEffect(() => {
        if (userId) {
            dispatch(createWorkActions.getTaskData())
        }
    }, [userId])

    return <div>
        <h1 className='f-Staatliches'>{name}'s: Tasks list</h1>
        <Row className='mt-2'>
            <Col lg={4}>
                <Card className='bg-light-grey'>
                    <CardHeader className='font-bold text-medium text-white bg-gradient-primary'>{'TODO'}</CardHeader>
                    <CardBody className='pt-2'>
                        {
                            tasks.map(item => {
                                if (item.status === 'todo') {
                                    return (
                                      <WorkMonitoringCard
                                        key={item.id}
                                        id={item.id}
                                        title={item?.work_monitoring_task_id?.title}
                                        description={item?.work_monitoring_task_id?.description}
                                        createdAt={new Date(item?.work_monitoring_task_id?.created_at).toLocaleDateString()}
                                        deadlineAt={new Date(item?.work_monitoring_task_id?.updated_at).toLocaleDateString()}
                                      />
                                    )
                                }
                            })
                        }
                    </CardBody>
                </Card>
            </Col>
            <Col lg={4}>
                <Card className='bg-light-grey'>
                    <CardHeader className='font-bold text-medium text-dark bg-gradient-warning'>ONGOING</CardHeader>
                    <CardBody className='pt-2'>
                        {
                            tasks.map(item => {
                                if (item.status === 'ongoing') {
                                    return (
                                      <WorkMonitoringCard
                                        key={item.id}
                                        id={item.id}
                                        title={item?.work_monitoring_task_id?.title}
                                        description={item?.work_monitoring_task_id?.description}
                                        createdAt={new Date(item?.work_monitoring_task_id?.created_at).toLocaleDateString()}
                                        deadlineAt={new Date(item?.work_monitoring_task_id?.updated_at).toLocaleDateString()}
                                      />
                                    )
                                }
                            })
                        }
                    </CardBody>
                </Card>
            </Col>
            <Col lg={4}>
                <Card className='bg-light-grey'>
                    <CardHeader className='font-bold text-medium text-light bg-gradient-danger'>FINISHED</CardHeader>
                    <CardBody className='pt-2'>
                        {
                            tasks.map(item => {
                                if (item.status === 'complete') {
                                    return (
                                      <WorkMonitoringCard
                                        key={item.id}
                                        id={item.id}
                                        title={item?.work_monitoring_task_id?.title}
                                        description={item?.work_monitoring_task_id?.description}
                                        createdAt={new Date(item?.work_monitoring_task_id?.created_at).toLocaleDateString()}
                                        deadlineAt={new Date(item?.work_monitoring_task_id?.updated_at).toLocaleDateString()}
                                      />
                                    )
                                }
                            })
                        }
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </div>
}

export default WorkMonitoringUnitView
