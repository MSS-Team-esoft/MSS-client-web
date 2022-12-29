import {Card, CardBody, CardHeader, Col, Input, Label, Row} from "reactstrap"
import {useState} from "react"
import WorkItemsTable from "./table/WorkItemsTable"
import Select from "react-select"
import {PlusSquare} from "react-feather"

const WorkCreateUnitView = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [item, setItem] = useState('')
    const [qty, setQty] = useState(0)

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
                    />
                </Col>

                <Col lg={3}>
                    <Label htmlFor='endDate' className='text-small-extra'>End Date</Label>
                    <Input
                        name='endDate'
                        type='date'
                        id='endDate'
                    />
                </Col>
            </Row>
            <Row className='mt-5'>
                <h3 className='f-Staatliches'>Add items for the task</h3>
            </Row>
            <div className='mt-3 d-flex align-items-end gap-2'>
                <Col lg={3}>
                    <Label htmlFor='item' className='text-small-extra'>Select Item</Label>
                    <Select
                        id='item'
                        onChange={e => setItem(e.value)}
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
                    <button className='btn btn-primary'>
                        <PlusSquare />
                    </button>
                </Col>
            </div>
            <Row className='mt-2'>
                <WorkItemsTable />
            </Row>
        </CardBody>
    </Card>
}

export default WorkCreateUnitView
