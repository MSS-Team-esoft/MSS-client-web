import {Badge, Card, CardBody, CardFooter, Modal, ModalBody, ModalHeader} from "reactstrap"
import {useState} from "react"

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
            <ModalHeader toggle={() => setOpen(!open)}>Modal title</ModalHeader>
            <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
        </Modal>
        {/*---------------------*/}
        {/*----Modal finished----*/}
        {/*---------------------*/}
    </Card>
}

export default WorkMonitoringCard
