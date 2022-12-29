import {Button, Card, CardBody, CardHeader, Col, Input, Label, Row} from "reactstrap"
import DivisionManagementTable from "./table/DivisionManagementTable"

const DivisionsView = () => {

    return <div>
        <Card>
            <CardHeader className='p-1 m-0 bg-gradient-primary font-large-1 f-Staatliches'>
                Manage Divisions
            </CardHeader>
            <CardBody className='pt-2'>
                <Row>
                    <Col lg={4}>
                        <Label htmlFor='divisionName' className='text-small-extra'>Division Name</Label>
                        <Input id='divisionName' placeholder='Enter division name'/>
                    </Col>
                    <Col lg={8}>
                        <Label htmlFor='divisionDescription' className='text-small-extra'>Description</Label>
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
                <DivisionManagementTable />
            </CardBody>
        </Card>
    </div>
}

export default DivisionsView
