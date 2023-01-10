import {Button, Card, CardBody, CardHeader, Col, Form, Input, Label, Row} from "reactstrap"
import EmployeeManagementTable from "./table/EmployeeManagementTable"
import {useFormik} from "formik"
import {useDispatch, useSelector} from "react-redux"
import {
    employeeActions,
    selectEmployeeCurrentlyEditing,
    selectEmployeeCurrentlyEditingData, selectEmployees
} from "./slice/employeeSlice"
import {useEffect, useState} from "react"
import Select from "react-select"
import * as xlsx from "sheetjs-style"

const EmployeeView = () => {
    const dispatch = useDispatch()
    const currentlyEditing = useSelector(selectEmployeeCurrentlyEditing)
    const currentlyEditingData = useSelector(selectEmployeeCurrentlyEditingData)

    const [role, setRole] = useState('employe')

    const employees = useSelector(selectEmployees)

    useEffect(() => {
        dispatch(employeeActions.getEmployees())
    }, [dispatch])

    const options = [
        {
            label: 'employee',
            value: 'employee'
        },
        {
            label: 'stock manager',
            value: 'stock'
        },
        {
            label: 'supervisor',
            value: 'supervisor'
        },
        {
            label: 'admin',
            value: 'admin'
        }
    ]

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: currentlyEditing ? currentlyEditingData.name : '',
            gender: currentlyEditing ? currentlyEditingData.gender : '',
            dob: currentlyEditing ? currentlyEditingData.dob : '',
            address: currentlyEditing ? currentlyEditingData.address : '',
            telephone_number: currentlyEditing ? currentlyEditingData.telephone_number : '',
            email: currentlyEditing ? currentlyEditingData.email : ''
        },
        onSubmit: (values) => {
            if (!currentlyEditing) {
                dispatch(employeeActions.addEmployee({
                    ...values,
                    role
                }))
            } else {
                dispatch(employeeActions.editEmployee(values))
            }
        }
    })

    const generateEmployeeReport = (fileName) => {
        const workbook = xlsx.utils.book_new()
        const ws = xlsx.utils.json_to_sheet(employees)
        xlsx.utils.book_append_sheet(workbook, ws, "Results")
        xlsx.writeFile(workbook, `${fileName}.xlsx`, {type: 'file'})
    }

    return <div>
        <Card>
            <CardHeader className='p-1 m-0 bg-gradient-primary font-large-1 f-Staatliches'>
                <div className='d-flex w-100 justify-content-between align-items-center'>
                    <p className='m-0 p-0 font-large-1 f-Staatliches'>Manage Employees</p>
                    <button onClick={() => generateEmployeeReport("employee-all-report")} className='font-medium-1 btn btn-light'>
                        Employee report
                    </button>
                </div>
            </CardHeader>
            <CardBody className='pt-2'>
                <Form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col lg={4}>
                            <Label htmlFor='name' className='text-small-extra'>Full Name</Label>
                            <Input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                name='name'
                                id='name' placeholder='Enter your name'/>
                        </Col>
                        <Col lg={2}>
                            <Label htmlFor='dob' className='text-small-extra'>Date of birth</Label>
                            <Input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.dob}
                                name='dob'
                                type='date' id='dob' placeholder='Enter description'/>
                        </Col>
                        <Col lg={2}>
                            <Label htmlFor='telephone_number' className='text-small-extra'>telephone no.</Label>
                            <Input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.telephone_number}
                                name='telephone_number'
                                type='tel' id='telephone_number' placeholder='Your telephone number'/>
                        </Col>
                        <Col lg={3}>
                            <Label htmlFor='role' className='text-small-extra'>Add role</Label>
                            <Select
                                onChange={e => setRole(e.value)}
                                id='role' options={options}/>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col>
                            <Label htmlFor='address' className='text-small-extra'>Permanent address</Label>
                            <Input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.address}
                                name='address'
                                type='textarea' id='address'/>
                        </Col>
                    </Row>
                    <div className='mt-4 d-flex align-items-end gap-3'>
                        <Col lg={3}>
                            <Label
                                htmlFor='email' className='text-small-extra'>Email</Label>
                            <Input
                                placeholder='demo@example.com'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                name='email'
                                id='email'/>
                        </Col>
                        <Col lg={1}>
                            <Input
                                checked={formik.values.gender === 'male'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name='gender' id='male' value="male" type='radio'/>
                            <Label htmlFor='male' className='text-small-extra ml-1'>Male</Label>
                        </Col>
                        <Col lg={1}>
                            <Input
                                checked={formik.values.gender === 'female'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name='gender' id='female' value="female" type='radio'/>
                            <Label htmlFor='female' className='text-small-extra ml-1'>Female</Label>
                        </Col>
                    </div>
                    <div className='w-100 mt-2 d-flex justify-content-end'>
                        {
                            currentlyEditing &&
                            <button
                                type='button'
                                className='btn btn-danger mr-2'
                                onClick={() => {
                                    dispatch(employeeActions.editEmployeeFailure())
                                }}
                            >
                                Cancel
                            </button>
                        }
                        <button type="submit"
                                className='btn btn-primary'>{currentlyEditing ? 'UPDATE' : 'REGISTER'}</button>
                    </div>
                </Form>
            </CardBody>
        </Card>
        <div className='d-flex gap-1 w-100 justify-content-end'>
            <div>
                <button className='btn btn-gradient-primary f-Staatliches font-medium-5'>Male employees Report</button>
            </div>
            <div>
                <button className='btn btn-gradient-success f-Staatliches font-medium-5'>Female employees Report</button>
            </div>
            <div>
                <button className='btn btn-gradient-danger f-Staatliches font-medium-5'>Admin employees Report</button>
            </div>
            <div>
                <button className='btn btn-gradient-warning f-Staatliches font-medium-5'>Supervisor employees Report</button>
            </div>
        </div>
        <Card className='mt-2'>
            <CardHeader className='p-1 m-0 font-large-1 f-Staatliches'>
                EMPLOYEES
            </CardHeader>
            <CardBody>
                <EmployeeManagementTable/>
            </CardBody>
        </Card>
    </div>
}

export default EmployeeView
