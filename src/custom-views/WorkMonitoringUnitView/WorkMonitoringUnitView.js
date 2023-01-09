import {Card, CardBody, CardHeader, Col, Row} from "reactstrap"
import WorkMonitoringCard from "../../components/WorkMonitoringUnitView/WorkMonitoringCard"
import {useLocation} from "react-router-dom"
import * as xlsx from "sheetjs-style"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {createWorkActions, selectTasks, selectUserId} from "../WorkCreateUnitView/slice/createWorkSlice"
// import * as xlsx from "sheetjs-style"

const WorkMonitoringUnitView = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const {id, name} = location.state.data
    const tasks = useSelector(selectTasks)
    const userId = useSelector(selectUserId)

    // eslint-disable-next-line no-unused-vars
    const generateTodo = (fileName) => {
        const workbook = xlsx.utils.book_new()
        const ws = xlsx.utils.json_to_sheet(incomeStats)
        xlsx.utils.book_append_sheet(workbook, ws, "Results")
        xlsx.writeFile(workbook, `${fileName}.xlsx`, {type: 'file'})
    }

    // eslint-disable-next-line no-unused-vars
    const generateWarning = (fileName) => {
        const workbook = xlsx.utils.book_new()
        const ws = xlsx.utils.json_to_sheet(incomeStats)
        xlsx.utils.book_append_sheet(workbook, ws, "Results")
        xlsx.writeFile(workbook, `${fileName}.xlsx`, {type: 'file'})
    }

    // eslint-disable-next-line no-unused-vars
    const generateSuccess = (fileName) => {
        const workbook = xlsx.utils.book_new()
        const ws = xlsx.utils.json_to_sheet(incomeStats)
        xlsx.utils.book_append_sheet(workbook, ws, "Results")
        xlsx.writeFile(workbook, `${fileName}.xlsx`, {type: 'file'})
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
            <button className='btn btn-outline-primary'>EMPLOYEE TASKS REPORT</button>
        </div>
        <Row className='mt-2'>
            <Col lg={4}>
                <Card className='bg-light-grey'>
                    <CardHeader className='font-bold text-medium text-white bg-gradient-primary align-items-center'>
                        <div className='w-100 d-flex justify-content-between'>
                            <p className='mt-1'>{'TODO'}</p>
                            <button className='btn btn-primary'>{"TODO"} ITEMS REPORT</button>
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
                            <button className='btn btn-danger'>ONGOING ITEMS REPORT</button>
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
                        <button className='btn btn-primary'>FINISHED ITEMS REPORT</button>
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
