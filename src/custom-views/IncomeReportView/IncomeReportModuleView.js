import {Card, CardBody, CardFooter, CardHeader, Col, Row} from "reactstrap"
import {Activity, AlertTriangle, Check} from "react-feather"
import IncomeReportTable from "./table/IncomeReportTable"

const IncomeReportModuleView = () => {

    return <div>
        <div className='w-100'>
            <Row>
                <Col lg={4}>
                    <Card style={{height: '40vh'}}>
                        <CardHeader className='text-medium font-bold'>Total income this year</CardHeader>
                        <CardBody className='d-center flex-column'>
                            <div>
                                <Check size={100} color='rgba(46, 213, 115,1.0)'/>
                            </div>
                            <div>
                                <b className='text-large text-success'>20 ITEMS</b>
                            </div>
                        </CardBody>
                        <CardFooter className='d-center text-grey'>
                            Based on the system uploaded sales
                        </CardFooter>
                    </Card>
                </Col>

                <Col lg={4}>
                    <Card style={{height: '40vh'}}>
                        <CardHeader className='text-medium font-bold'>This month income</CardHeader>
                        <CardBody className='d-center flex-column'>
                            <div>
                                <AlertTriangle size={100} color='#fbc531'/>
                            </div>
                            <div>
                                <b className='text-large text-warning'>50 ITEMS</b>
                            </div>
                        </CardBody>
                        <CardFooter className='d-center text-grey'>
                            Based on the system uploaded sales
                        </CardFooter>
                    </Card>
                </Col>

                <Col lg={4}>
                    <Card style={{height: '40vh'}}>
                        <CardHeader className='text-medium font-bold'>Total sales this month</CardHeader>
                        <CardBody className='d-center flex-column'>
                            <div>
                                <Activity size={100} color='#eb4d4b'/>
                            </div>
                            <div>
                                <b className='text-large text-danger'>40 ITEMS</b>
                            </div>
                        </CardBody>
                        <CardFooter className='d-center text-grey'>
                            Based on the system uploaded sales
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>
        <Card className='mt-2'>
            <CardHeader className='bg-gradient-primary f-Staatliches font-large-1'>
                Company income logs
            </CardHeader>
            <CardBody className='pt-2'>
                <IncomeReportTable />
            </CardBody>
        </Card>
    </div>
}

export default IncomeReportModuleView
