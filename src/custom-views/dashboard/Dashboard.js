import {Card, CardBody, CardFooter, CardHeader, Col, Row} from "reactstrap"
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis} from "recharts"
import {ITEM_LEVEL_CHART} from "../../DB/CHART_DB"
import {Activity, AlertTriangle, Check, DollarSign, Target} from "react-feather"
import IncomeReportChart from "../../components/IncomerReportView/IncomeReportChart"

const Dashboard = () => {

    return <div>
        <h1 className='f-Staatliches mb-2'>Inventory Section</h1>
        <Row>
            <div style={{width: '30%'}}>
                <Card style={{height: '40vh'}}>
                    <CardBody>
                        <ResponsiveContainer>
                            <BarChart data={ITEM_LEVEL_CHART}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Legend />
                                <Bar barSize={40} dataKey="good" fill="rgba(46, 213, 115, 0.6)"/>
                                <Bar barSize={40} dataKey="warning" fill="rgba(255, 165, 2, 0.6)"/>
                                <Bar barSize={40} dataKey="critical" fill="rgba(235, 77, 75, 0.6)"/>
                            </BarChart>
                        </ResponsiveContainer>
                    </CardBody>
                </Card>
            </div>
            <div style={{
                width: '70%'
            }}>
                <Row>
                    <Col lg={4}>
                        <Card style={{height: '40vh'}}>
                            <CardHeader className='text-medium font-bold'>LEVEL: GOOD</CardHeader>
                            <CardBody className='d-center flex-column'>
                                <div>
                                    <Check size={100} color='rgba(46, 213, 115,1.0)'/>
                                </div>
                                <div>
                                    <b className='text-large text-success'>20 ITEMS</b>
                                </div>
                            </CardBody>
                            <CardFooter className='d-center'>
                                Click to see items
                            </CardFooter>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card style={{height: '40vh'}}>
                            <CardHeader className='text-medium font-bold'>LEVEL: WARNING</CardHeader>
                            <CardBody className='d-center flex-column'>
                                <div>
                                    <AlertTriangle size={100} color='#fbc531'/>
                                </div>
                                <div>
                                    <b className='text-large text-warning'>50 ITEMS</b>
                                </div>
                            </CardBody>
                            <CardFooter className='d-center'>
                                Click to see items
                            </CardFooter>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card style={{height: '40vh'}}>
                            <CardHeader className='text-medium font-bold'>LEVEL: CRITICAL</CardHeader>
                            <CardBody className='d-center flex-column'>
                                <div>
                                    <Activity size={100} color='#eb4d4b'/>
                                </div>
                                <div>
                                    <b className='text-large text-danger'>40 ITEMS</b>
                                </div>
                            </CardBody>
                            <CardFooter className='d-center'>
                                Click to see items
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Row>
        <Row className='d-flex align-items-baseline'>
            <Col lg={4}>
                <Card className='btn'>
                    <CardBody className='d-center align-items-baseline'>
                        <p className='text-medium m-0 p-0'>This month added items :</p>
                        <h4 className='ml-2 mb-0 p-0 font-bold'>12 items</h4>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={3}>
                <Card className='btn btn-gradient-primary'>
                    <CardBody className='d-center align-items-baseline'>
                        <p className='text-medium m-0 p-0'>Generate Stock Report</p>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <hr />
        <h1 className='f-Staatliches mb-3 mt-3'>Income Section</h1>
        <Row>
            <Col lg={3}>
                <Card style={{height: '25vh'}}>
                    <CardHeader className='text-medium font-bold'>Total income this Month</CardHeader>
                    <CardBody className='d-center flex-column'>
                        {/*<div className='mb-1'>*/}
                        {/*    <DollarSign size={25} color='rgba(46, 213, 115,1.0)'/>*/}
                        {/*</div>*/}
                        <div>
                            <b style={{
                                fontSize: 25
                            }} className='text-success'>$ 20000/=</b>
                        </div>
                    </CardBody>
                    <CardFooter className='d-center text-grey'>
                        Based on the system uploaded sales
                    </CardFooter>
                </Card>

                <Card style={{height: '25vh'}}>
                    <CardHeader className='text-medium font-bold'>Total sales this month</CardHeader>
                    <CardBody className='d-center flex-column'>
                        {/*<div className='mb-1'>*/}
                        {/*    <Target size={25} color='#7468f0'/>*/}
                        {/*</div>*/}
                        <div>
                            <b style={{
                                fontSize: 25
                            }} className='text-primary'>145</b>
                        </div>
                    </CardBody>
                    <CardFooter className='d-center text-grey'>
                        Based on the system uploaded sales
                    </CardFooter>
                </Card>

                    <Card className='btn btn-gradient-primary'>
                        <CardBody className='d-center align-items-baseline'>
                            <p className='text-medium m-0 p-0'>Generate This month Income Report</p>
                        </CardBody>
                    </Card>

                    <Card className='btn btn-gradient-success'>
                        <CardBody className='d-center align-items-baseline'>
                            <p className='text-medium m-0 p-0'>Generate income movement</p>
                        </CardBody>
                    </Card>

            </Col>
            <Col lg={9}>
                <IncomeReportChart />
            </Col>
        </Row>
    </div>
}

export default Dashboard
