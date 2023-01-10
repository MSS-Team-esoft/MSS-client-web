import {Badge, Card, CardBody, CardHeader, Col, Input, Label, Modal, ModalBody, ModalHeader, Row} from "reactstrap"
import {useEffect, useState} from "react"
import WorkItemsTable from "./table/WorkItemsTable"
import Select from "react-select"
import {Circle, PlusSquare} from "react-feather"
import EmployeeStatChart from "../../components/EmployeeStatChart/EmployeeStatChart"
import {EMPLOYEE_DROP_DOWN} from "../../DB/DB"
import {useDispatch, useSelector} from "react-redux"
import {inventoryActions, selectInventoryItems} from "../InventoryManagementView/slice/inventorySlice"
import {dropdownPopulate, fireAlertError} from "../../utility/customUtils"
import {createWorkActions, selectWorkers} from "./slice/createWorkSlice"

const sheet = {
    effBanner: {
        backgroundColor: 'rgba(255, 121, 121, 0.2)',
        borderRadius: 5,
        padding: 10
    }
}

const WorkCreateUnitView = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [startDate, setStartDate] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [endDate, setEndDate] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [item, setItem] = useState()
    const [qty, setQty] = useState(0)
    // eslint-disable-next-line no-unused-vars
    const [worker, setWorker] = useState()
    const [open, setOpen] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [options, setOptions] = useState([])

    const [workItems, setWorkItems] = useState([])

    const dispatch = useDispatch()

    const stockItems = useSelector(selectInventoryItems)
    const workers = useSelector(selectWorkers)

    useEffect(() => {
        dispatch(inventoryActions.getItems())
        dispatch(createWorkActions.getData())
    }, [])

    useEffect(() => {
        setOptions(dropdownPopulate(stockItems, "item_name", "id"))
    }, [stockItems])

    const addItems = () => {
        if (qty === 0) fireAlertError('Not enough quantity', "You have to add more quantity for the item")
        else setWorkItems(workItems.concat(stockItems[item]))
    }

    const handleSubmit = () => {
        const items = workItems.map(item => {
            return {item: item.id, quantity: Number(item.quantity)}
        })

        dispatch(createWorkActions.createTask({
            title,
            description,
            startDate,
            endDate,
            employee_id: worker,
            items
        }))
    }

    return <Card>
        <CardHeader className='bg-gradient-primary f-Staatliches font-large-1'>
            Create Tasks: Unit 01
        </CardHeader>
        <CardBody className='pt-2'>
            <Col>
                <Label className='text-small-extra'>Task title</Label>
                <Input
                    name='title'
                    id='title'
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                />
            </Col>
            <Col className='mt-3'>
                <Label className='text-small-extra'>Description</Label>
                <Input
                    type='textarea'
                    name='description'
                    id='description'
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                />
            </Col>
            <Row className='mt-3'>
                <Col lg={3}>
                    <Label htmlFor='startDate' className='text-small-extra'>Start Date</Label>
                    <Input
                        name='startDate'
                        type='date'
                        id='startDate'
                        onChange={e => setStartDate(e.target.value)}
                    />
                </Col>

                <Col lg={3}>
                    <Label htmlFor='endDate' className='text-small-extra'>End Date</Label>
                    <Input
                        name='endDate'
                        type='date'
                        id='endDate'
                        onChange={e => setEndDate(e.target.value)}
                    />
                </Col>

                <Col lg={3}>
                    <Label htmlFor='assignWorker' className='text-small-extra'>Assign Worker</Label>
                    <Select
                        options={workers.map(worker => {
                            return {
                                value: worker.id,
                                label: worker.name
                            }
                        })}
                        onChange={e => setWorker(e.value)}
                        name='assignWorker'
                        id='assignWorker'
                    />
                </Col>

                <Col className='d-flex align-items-end'>
                    <button onClick={() => setOpen(!open)} className='btn btn-danger'>STATS</button>
                </Col>
            </Row>
            <Row className='mt-5'>
                <h3 className='f-Staatliches'>Add items for the task</h3>
            </Row>
            <div className='mt-3 d-flex align-items-end gap-2'>
                <Col lg={3}>
                    <Label htmlFor='item' className='text-small-extra'>Select Item</Label>
                    <Select
                        options={options}
                        id='item'
                        onChange={e => setItem(e.index)}
                    />
                </Col>

                <Col lg={3}>
                    <Label htmlFor='endDate' className='text-small-extra'>quantity</Label>
                    <Input
                        name='quantity'
                        type='number'
                        id='quantity'
                        min={0}
                        onChange={e => setQty(e.target.value)}
                        value={qty}
                    />
                </Col>
                <Col>
                    <button
                        onClick={addItems}
                        className='btn btn-primary'>
                        <PlusSquare />
                    </button>
                </Col>
            </div>
            <Row className='mt-2'>
                <WorkItemsTable data={workItems}/>
            </Row>
            <div className='mt-2 d-flex justify-content-end'>
                <button
                    className='f-Staatliches btn text-large btn-gradient-primary'
                    onClick={handleSubmit}
                >
                    CREATE NEW TASK
                </button>
            </div>
        </CardBody>

        {/*---------------------*/}
        {/*----Modal started----*/}
        {/*---------------------*/}
        <Modal size="lg"
               className='modal-dialog-centered' isOpen={open} toggle={() => setOpen(!open)} backdrop={3}>
            <ModalHeader toggle={() => setOpen(!open)}>
                <h3 className='m-0 p-0 f-Staatliches'>Jack Ryder's stats</h3>
            </ModalHeader>
            <ModalBody className='pt-2'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex align-items-baseline gap-1'>
                        <Circle color='red' size={14} style={{
                            paddingTop: 3
                        }}/>
                        <h6>Works Assigned</h6>
                    </div>
                    <h4>08</h4>
                </div>

                <div className='d-flex justify-content-between mt-1'>
                    <div className='d-flex align-items-baseline gap-1'>
                        <Circle color='blue' size={14} style={{
                            paddingTop: 3
                        }}/>
                        <h6>Works Ongoing</h6>
                    </div>
                    <h4>10</h4>
                </div>

                <div className='d-flex justify-content-between mt-1'>
                    <div className='d-flex align-items-baseline gap-1'>
                        <Circle color='green' size={14} style={{
                            paddingTop: 3
                        }}/>
                        <h6>Total Works Done</h6>
                    </div>
                    <h4>12</h4>
                </div>

                <div style={sheet.effBanner} className='d-flex justify-content-between mt-1 f-Staatliches'>
                    <h3 className='m-0 p-0'>Work Efficiency</h3>
                    <h1 className='m-0 p-0'>23.4 %</h1>
                </div>
                <p className='text-grey text-small' style={{
                    marginTop: 5
                }}>(Based on how many tasks had done from the tasks given in the last month)</p>
                <div className='mt-3'>
                    <h4 className='mb-2 text-decoration-underline f-Staatliches'>Worker Efficiency in last 5 months</h4>
                    <EmployeeStatChart />
                </div>
            </ModalBody>
        </Modal>
        {/*---------------------*/}
        {/*----Modal finished----*/}
        {/*---------------------*/}
    </Card>
}

export default WorkCreateUnitView
