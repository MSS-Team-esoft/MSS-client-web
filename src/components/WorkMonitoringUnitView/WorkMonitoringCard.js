import {Badge, Card, CardBody, CardFooter, Col, Modal, ModalBody, ModalHeader, Row} from "reactstrap"
import {useState} from "react"
import InventorManagementTable from "./table/table/InventoryManagementTable"

const WorkMonitoringCard = () => {

    const [open, setOpen] = useState(false)

    return <Card className='clickable-mini'>
        <CardBody onClick={() => setOpen(!open)}>
            <div className='d-flex justify-content-between'>
                <p className='text-small text-grey'>Created At: 2022/02/12</p>
                <p className='text-small text-grey'>Deadline At: 2022/02/12</p>
            </div>
            <p className='font-bold text-medium'>This is the title</p>
            <p className=''>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                demonstrate the...</p>
        </CardBody>
        <CardFooter className='d-flex justify-content-end gap-1'>
            <Badge color='light-primary clickable'>TODO</Badge>
            <Badge color='light-warning clickable'>ONGOING</Badge>
            <Badge color='light-success clickable'>FINISHED</Badge>
        </CardFooter>

        {/*---------------------*/}
        {/*----Modal started----*/}
        {/*---------------------*/}
        <Modal size="lg"
               className='modal-dialog-centered' isOpen={open} toggle={() => setOpen(!open)} backdrop={3}>
            <ModalHeader toggle={() => setOpen(!open)}>Jack Ryder's: Work Task</ModalHeader>
            <ModalBody className='pt-2'>
                <div className='d-flex gap-2'>
                    <p className='text-small text-grey'>Created At: 2022/02/12</p>
                    <p className='text-small text-grey'>Deadline At: 2022/02/12</p>
                </div>
                <Row>
                    <Col lg={10}>
                        <h3>This is the title</h3>
                    </Col>
                    <Col lg={2} className='d-flex justify-content-center align-items-baseline'>
                        <Badge color='light-primary clickable'>{'TODO'}</Badge>
                    </Col>
                </Row>
                <p className='mt-2'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                    visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be
                    used as a placeholder before final copy is available.</p>
                <h4 className='text-medium text-decoration-underline mt-3'>Assigned Materials</h4>
                <div className='mt-2'>
                    <InventorManagementTable />
                </div>
            </ModalBody>
        </Modal>
        {/*---------------------*/}
        {/*----Modal finished----*/}
        {/*---------------------*/}
    </Card>
}

export default WorkMonitoringCard
