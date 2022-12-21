import {Card, CardBody, CardFooter, CardHeader, Col, Row} from "reactstrap"
import {Bar, CartesianGrid, ResponsiveContainer, XAxis, YAxis, BarChart, Legend} from "recharts"
import {ITEM_LEVEL_CHART} from "../../DB/CHART_DB"
import {Activity, AlertTriangle, Check} from "react-feather"
import TrackingTable from "./tables/TrackingTable"
import Select from "react-select"
import {useState} from "react"

const StockTrackingView = () => {

    const [division, setDivision] = useState()

    return <div>
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
        <Row className='mt-2'>
            <TrackingTable />
        </Row>
        <Card>
            <CardHeader className='p-1 m-0 font-large-1 f-Staatliches'>DIVISION WISE DISTRIBUTION</CardHeader>
            <CardBody>
                <Row className='mt-2'>
                    <Col lg={3}>
                        <label className='mb-1'>Select a division to see the details</label>
                        <Select
                            onChange={e => setDivision(e.value)}
                        />
                    </Col>
                </Row>
                <div className='mt-2 d-center'>
                    {
                        division ? <TrackingTable /> : <i className='font-large-1 text-grey f-Staatliches'>
                            SELECT A DIVISION TO GET STOCKS
                        </i>
                    }
                </div>
            </CardBody>
        </Card>
    </div>
}

export default StockTrackingView
