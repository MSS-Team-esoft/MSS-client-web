import {Card, CardBody, CardFooter, CardHeader, Col, Input, Label, Row} from "reactstrap"
import {Activity, AlertTriangle, Check, DollarSign, Dribbble, Star, Target, Upload} from "react-feather"
import IncomeReportTable from "./table/IncomeReportTable"
import {useState} from "react"
import IncomeReportChart from "../../components/IncomerReportView/IncomeReportChart"

const IncomeReportModuleView = () => {

    // eslint-disable-next-line no-unused-vars
    const [file, setFile] = useState()

    return <div>
        <div className='w-100'>
            <Row>
                <Col lg={4}>
                    <Card style={{height: '40vh'}}>
                        <CardHeader className='text-medium font-bold'>Total income this year</CardHeader>
                        <CardBody className='d-center flex-column'>
                            <div className='mb-1'>
                                <DollarSign size={70} color='rgba(46, 213, 115,1.0)'/>
                            </div>
                            <div>
                                <b className='text-large text-success'>$ 20000/=</b>
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
                            <div className='mb-1'>
                                <Target size={70} color='#fbc531'/>
                            </div>
                            <div>
                                <b className='text-large text-warning'>$ 18000/=</b>
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
                            <div className='mb-1'>
                                <Star size={70} color='#eb4d4b'/>
                            </div>
                            <div>
                                <b className='text-large text-danger'>$ 55000/=</b>
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
            <CardHeader className='f-Staatliches font-large-1'>
                UPLOAD INCOME SHEET
            </CardHeader>
            <CardBody>
                <Row>
                    <Col lg={2}>
                        <Label htmlFor='incomeUpload' className='btn btn-success f-Staatliches text-medium d-flex align-items-end justify-content-center'>
                            <Upload size={20} className='mr-1'/>
                            UPLOAD
                        </Label>
                        <Input
                            onChange={e => {
                                setFile(e?.target?.files[0])
                            }}
                            hidden id='incomeUpload' type='file'/>
                    </Col>
                    <Col>
                        <Input placeholder='your file will be show in here...' value={file?.name} disabled/>
                    </Col>
                </Row>
            </CardBody>
        </Card>
        <Card className='mt-2'>
            <CardHeader className='bg-gradient-primary f-Staatliches font-large-1'>
                Company income logs
            </CardHeader>
            <CardBody className='pt-2'>
                <IncomeReportTable />
            </CardBody>
        </Card>
        <Card className='mt-2'>
            <CardHeader className='f-Staatliches font-large-1'>INCOME CHART IN LAST 10 MONTHS</CardHeader>
            <IncomeReportChart />
        </Card>
    </div>
}

export default IncomeReportModuleView
