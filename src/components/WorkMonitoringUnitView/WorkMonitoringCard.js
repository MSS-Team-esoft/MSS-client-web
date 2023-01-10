import {Badge, Card, CardBody, CardFooter, Col, Modal, ModalBody, ModalHeader, Row} from "reactstrap"
import {useState} from "react"
import InventorManagementTable from "./table/table/InventoryManagementTable"
import {useDispatch} from "react-redux"
import {createWorkActions} from "../../custom-views/WorkCreateUnitView/slice/createWorkSlice"

const WorkMonitoringCard = ({title, description, createdAt, deadlineAt, id, status, items}) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    const changeState = (state) => {
        dispatch(createWorkActions.changeTaskStatus({state, id}))
    }

    return <Card className='clickable-mini'>
        <CardBody onClick={() => setOpen(!open)}>
            <div className='d-flex justify-content-between'>
                <p className='text-small text-grey'>Created At: {createdAt}</p>
                <p className='text-small text-grey'>Deadline At: {deadlineAt}</p>
            </div>
            <p className='font-bold text-medium'>{title}</p>
            <p className=''>{description}</p>
        </CardBody>
        <CardFooter className='d-flex justify-content-end gap-1'>
            <Badge color='light-primary clickable' onClick={() => changeState(0)}>TODO</Badge>
            <Badge color='light-warning clickable' onClick={() => changeState(1)}>ONGOING</Badge>
            <Badge color='light-success clickable' onClick={() => changeState(2)}>FINISHED</Badge>
        </CardFooter>

        {/*---------------------*/}
        {/*----Modal started----*/}
        {/*---------------------*/}
        <Modal size="lg"
               className='modal-dialog-centered' isOpen={open} toggle={() => setOpen(!open)} backdrop={3}>
            <ModalHeader toggle={() => setOpen(!open)}>Jack Ryder's: Work Task</ModalHeader>
            <ModalBody className='pt-2'>
                <div className='d-flex gap-2'>
                    <p className='text-small text-grey'>Created At: {createdAt}</p>
                    <p className='text-small text-grey'>Deadline At: {deadlineAt}</p>
                </div>
                <Row>
                    <Col lg={10}>
                        <h3>{title}</h3>
                    </Col>
                    <Col lg={2} className='d-flex justify-content-center align-items-baseline'>
                        {
                            status === 'todo' && <Badge color='light-primary clickable text-uppercase'>{status}</Badge>
                        }
                        {
                            status === 'ongoing' && <Badge color='light-warning clickable text-uppercase'>{status}</Badge>
                        }
                        {
                            status === 'complete' && <Badge color='light-danger clickable text-uppercase'>{status}</Badge>
                        }
                    </Col>
                </Row>
                <p className='mt-2'>{description}</p>
                <h4 className='text-medium text-decoration-underline mt-3'>Assigned Materials</h4>
                <div className='mt-2'>
                    <InventorManagementTable data={items}/>
                </div>
            </ModalBody>
        </Modal>
        {/*---------------------*/}
        {/*----Modal finished----*/}
        {/*---------------------*/}
    </Card>
}

export default WorkMonitoringCard
