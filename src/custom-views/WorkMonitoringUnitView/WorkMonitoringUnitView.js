import {Card, CardBody, CardHeader, Col, Row} from "reactstrap"
import WorkMonitoringCard from "../../components/WorkMonitoringUnitView/WorkMonitoringCard"
import {useLocation} from "react-router-dom"
import * as xlsx from "sheetjs-style"
// import * as xlsx from "sheetjs-style"

const WorkMonitoringUnitView = () => {

    const location = useLocation()

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

    return <div>
        <div className='d-flex justify-content-between'>
            <h1 className='f-Staatliches'>{location.state.data.name}'s: Tasks list</h1>
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
                    <CardHeader className='font-bold text-medium text-dark bg-gradient-warning'>
                        <div className='w-100 d-flex justify-content-between'>
                            <p className='mt-1'>ONGOING</p>
                            <button className='btn btn-danger'>ONGOING ITEMS REPORT</button>
                        </div>
                    </CardHeader>
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
                    <CardHeader className='font-bold text-medium text-light bg-gradient-danger'>
                        <p className='mt-1'>FINISHED</p>
                        <button className='btn btn-primary'>FINISHED ITEMS REPORT</button>
                    </CardHeader>
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
