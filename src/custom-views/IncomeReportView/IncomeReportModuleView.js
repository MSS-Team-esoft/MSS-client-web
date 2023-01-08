import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, Input, Label, Row} from "reactstrap"
import {Activity, AlertTriangle, Check, DollarSign, Dribbble, Star, Target, Upload} from "react-feather"
import IncomeReportTable from "./table/IncomeReportTable"
import {useEffect, useState} from "react"
import IncomeReportChart from "../../components/IncomerReportView/IncomeReportChart"
import {useDispatch, useSelector} from "react-redux"
import {incomeActions, selectIncomeMonth, selectIncomeYear} from "./slice/incomeReportSlice"

const IncomeReportModuleView = () => {
    const dispatch = useDispatch()
    const [calculatedYearIncome, setCalculatedYearIncome] = useState(0)
    const [calculatedMonthIncome, setCalculatedMonthIncome] = useState(0)
    const yearIncome = useSelector(selectIncomeYear)
    const monthIncome = useSelector(selectIncomeMonth)

    useEffect(() => {
        dispatch(incomeActions.getIncomeDetails())
    }, [dispatch])

    useEffect(() => {
        if (yearIncome) {
            let income = 0
            yearIncome.map((item) => {
                income += item.amount
            })
            setCalculatedYearIncome(income)
        }
    }, [yearIncome])

    useEffect(() => {
        if (monthIncome) {
            let income = 0
            monthIncome.map((item) => {
                income += item.amount
            })
            setCalculatedMonthIncome(income)
        }
    }, [monthIncome])

    // eslint-disable-next-line no-unused-vars
    const [file, setFile] = useState()

    const handleUpload = () => {
        dispatch(incomeActions.uploadIncomeSheet(file))
    }

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
                                <b className='text-large text-success'>{calculatedYearIncome}/=</b>
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
                                <b className='text-large text-warning'>{calculatedMonthIncome}/=</b>
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
                                <b className='text-large text-danger'>{monthIncome.length}</b>
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
                            <Label htmlFor='incomeUpload' className='btn btn-outline-success f-Staatliches text-medium d-flex align-items-end justify-content-center'>
                                Choose File
                            </Label>
                            <Input
                              onChange={e => {
                                  setFile(e?.target?.files[0])
                              }}
                              hidden
                              id='incomeUpload'
                              type='file'
                              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                            />
                        </Col>
                        <Col>
                            <Input placeholder='your file will be show in here...' value={file?.name} disabled/>
                        </Col>
                        <Col lg={2}>
                            <Button
                              className='btn btn-success f-Staatliches text-medium d-flex align-items-end justify-content-center'
                              onClick={handleUpload}
                            >
                                <Upload size={20} className='mr-1'/>
                                Upload
                            </Button>
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
