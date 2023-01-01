import {Button, Card, CardBody, CardHeader, Col, Input, Label, Row} from "reactstrap"
import WorkshopManagementTable from "./table/WorkshopManagementTable"

const ManageWorkshopView = () => {

    return <div>
        <Card>
            <CardHeader className='p-1 m-0 bg-gradient-primary font-large-1 f-Staatliches'>
                Manage Workshops
            </CardHeader>
            <CardBody className='pt-2'>
                <Row>
                    <Col lg={4}>
                        <Label htmlFor='name' className='text-small-extra'>Workshop Name</Label>
                        <Input id='name' placeholder='Enter workshop name'/>
                    </Col>
                    <Col lg={8}>
                        <Label htmlFor='description' className='text-small-extra'>Description</Label>
                        <Input id='description' placeholder='Enter description'/>
                    </Col>
                </Row>
                <div className='w-100 mt-2 d-flex justify-content-end'>
                    <button className='btn btn-primary'>CREATE</button>
                </div>
            </CardBody>
        </Card>
        <Card className='mt-2'>
            <CardHeader className='p-1 m-0 font-large-1 f-Staatliches'>
                Workshops
            </CardHeader>
            <CardBody>
                <WorkshopManagementTable />
            </CardBody>
        </Card>
    </div>
}

export default ManageWorkshopView
