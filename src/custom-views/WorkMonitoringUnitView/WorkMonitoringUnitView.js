import {Card, CardBody, CardHeader, Col, Row} from "reactstrap"
import WorkMonitoringCard from "../../components/WorkMonitoringUnitView/WorkMonitoringCard"
import {useLocation} from "react-router-dom"
import * as xlsx from "sheetjs-style"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {createWorkActions, selectTasks, selectUserId} from "../WorkCreateUnitView/slice/createWorkSlice"

const WorkMonitoringUnitView = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const {id, name} = location.state.data
    const tasks = useSelector(selectTasks)
    const userId = useSelector(selectUserId)

    const generateEmployeeTaskReport = () => {
        const updatedTasks = tasks.map(item => {
            return {
                id: item?.id,
                status: item?.status,
                title: item?.work_monitoring_task_id.title,
                description:  item?.work_monitoring_task_id.description,
                created_at: new Date(item?.work_monitoring_task_id?.created_at).toLocaleDateString(),
                updated_at: new Date(item?.work_monitoring_task_id?.updated_at).toLocaleDateString()
            }
        })
        const workbook = xlsx.utils.book_new()
        const ws = xlsx.utils.json_to_sheet(updatedTasks)
        xlsx.utils.book_append_sheet(workbook, ws, "Results")
        xlsx.writeFile(workbook, `employee-tasks.xlsx`, {type: 'file'})
    }

    const generateTodo = () => {
        const updatedTasks = tasks.filter((fil) => fil.status === 'todo').map(item => {
            return {
                id: item?.id,
                status: item?.status,
                title: item?.work_monitoring_task_id.title,
                description:  item?.work_monitoring_task_id.description,
                created_at: new Date(item?.work_monitoring_task_id?.created_at).toLocaleDateString(),
                updated_at: new Date(item?.work_monitoring_task_id?.updated_at).toLocaleDateString()
            }
        })
        const workbook = xlsx.utils.book_new()
        const ws = xlsx.utils.json_to_sheet(updatedTasks)
        xlsx.utils.book_append_sheet(workbook, ws, "Results")
        xlsx.writeFile(workbook, `todoTask.xlsx`, {type: 'file'})
    }

    const generateOngoing = () => {
        const updatedTasks = tasks.filter((fil) => fil.status === 'ongoing').map(item => {
            return {
                id: item?.id,
                status: item?.status,
                title: item?.work_monitoring_task_id.title,
                description:  item?.work_monitoring_task_id.description,
                created_at: new Date(item?.work_monitoring_task_id?.created_at).toLocaleDateString(),
                updated_at: new Date(item?.work_monitoring_task_id?.updated_at).toLocaleDateString()
            }
        })
        const workbook = xlsx.utils.book_new()
        const ws = xlsx.utils.json_to_sheet(updatedTasks)
        xlsx.utils.book_append_sheet(workbook, ws, "Results")
        xlsx.writeFile(workbook, `ongoingTask.xlsx`, {type: 'file'})
    }

    const generateComplete = () => {
        const updatedTasks = tasks.filter((fil) => fil.status === 'complete').map(item => {
            return {
                id: item?.id,
                status: item?.status,
                title: item?.work_monitoring_task_id.title,
                description:  item?.work_monitoring_task_id.description,
                created_at: new Date(item?.work_monitoring_task_id?.created_at).toLocaleDateString(),
                updated_at: new Date(item?.work_monitoring_task_id?.updated_at).toLocaleDateString()
            }
        })
        const workbook = xlsx.utils.book_new()
        const ws = xlsx.utils.json_to_sheet(updatedTasks)
        xlsx.utils.book_append_sheet(workbook, ws, "Results")
        xlsx.writeFile(workbook, `completedTask.xlsx`, {type: 'file'})
    }

    useEffect(() => {
        dispatch(createWorkActions.setUserId(id))
    }, [id])

    useEffect(() => {
        if (userId) {
            dispatch(createWorkActions.getTaskData())
        }
    }, [userId])

    return <div>
        <div className='d-flex justify-content-between'>
            <h1 className='f-Staatliches'>{name}'s: Tasks list</h1>
            <button
              className='btn btn-outline-primary'
              onClick={() => generateEmployeeTaskReport()}
            >
                EMPLOYEE TASKS REPORT
            </button>
        </div>
        <Row className='mt-2'>
            <Col lg={4}>
                <Card className='bg-light-grey'>
                    <CardHeader className='font-bold text-medium text-white bg-gradient-primary align-items-center'>
                        <div className='w-100 d-flex justify-content-between'>
                            <p className='mt-1'>{'TODO'}</p>
                            <button
                              className='btn btn-primary'
                              onClick={() => generateTodo()}
                            >
                                {"TODO"} ITEMS REPORT
                            </button>
                        </div>
                    </CardHeader>
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
                    <CardHeader className='font-bold text-medium text-dark bg-gradient-warning'>
                        <div className='w-100 d-flex justify-content-between'>
                            <p className='mt-1'>ONGOING</p>
                            <button
                              className='btn btn-danger'
                              onClick={() => generateOngoing()}
                            >
                                ONGOING ITEMS REPORT
                            </button>
                        </div>
                    </CardHeader>
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
                    <CardHeader className='font-bold text-medium text-light bg-gradient-danger'>
                        <p className='mt-1'>FINISHED</p>
                        <button
                          className='btn btn-primary'
                          onClick={() => generateComplete()}
                        >
                            FINISHED ITEMS REPORT
                        </button>
                    </CardHeader>
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
