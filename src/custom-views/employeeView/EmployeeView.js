import {Button, Card, CardBody, CardHeader, Col, Input, Label, Row} from "reactstrap"
import EmployeeManagementTable from "./table/EmployeeManagementTable"

const EmployeeView = () => {

    return <div>
        <Card>
            <CardHeader className='p-1 m-0 bg-gradient-primary font-large-1 f-Staatliches'>
                Manage Divisions
            </CardHeader>
            <CardBody className='pt-2'>
                <Row>
                    <Col lg={4}>
                        <Label htmlFor='divisionName' className='text-medium'>Division Name</Label>
                        <Input id='divisionName' placeholder='Enter division name'/>
                    </Col>
                    <Col lg={8}>
                        <Label htmlFor='divisionDescription' className='text-medium'>Description</Label>
                        <Input id='divisionDescription' placeholder='Enter description'/>
                    </Col>
                </Row>
                <div className='w-100 mt-2 d-flex justify-content-end'>
                    <button className='btn btn-primary'>CREATE</button>
                </div>
            </CardBody>
        </Card>
        <Card className='mt-2'>
            <CardHeader className='p-1 m-0 font-large-1 f-Staatliches'>
                DIVISIONS
            </CardHeader>
            <CardBody>
                <EmployeeManagementTable />
            </CardBody>
        </Card>
    </div>
}

export default EmployeeView
