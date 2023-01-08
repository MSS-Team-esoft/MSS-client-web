import {Button, Card, CardBody, CardHeader, Col, Form, Input, Label, Row} from "reactstrap"
import EmployeeManagementTable from "./table/EmployeeManagementTable"
import {useFormik} from "formik"
import {useDispatch, useSelector} from "react-redux"
import {
    employeeActions,
    selectEmployeeCurrentlyEditing,
    selectEmployeeCurrentlyEditingData
} from "./slice/employeeSlice"
import {useEffect} from "react"

const EmployeeView = () => {
    const dispatch = useDispatch()
    const currentlyEditing = useSelector(selectEmployeeCurrentlyEditing)
    const currentlyEditingData = useSelector(selectEmployeeCurrentlyEditingData)
    
    useEffect(() => {
        dispatch(employeeActions.getEmployees())
    }, [dispatch])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: currentlyEditing ? currentlyEditingData.name : '',
            gender: currentlyEditing ? currentlyEditingData.gender : '',
            dob: currentlyEditing ? currentlyEditingData.dob : '',
            address: currentlyEditing ? currentlyEditingData.address : '',
            telNo: currentlyEditing ? currentlyEditingData.telephone_number : ''
        },
        onSubmit: (values) => {
            if (!currentlyEditing) {
                dispatch(employeeActions.addEmployee(values))
            } else {
                dispatch(employeeActions.editEmployee(values))
            }
        }
    })

    return <div>
        <Card>
            <CardHeader className='p-1 m-0 bg-gradient-primary font-large-1 f-Staatliches'>
                Manage Employees
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
                        <Col lg={3}>
                            <Label htmlFor='dob' className='text-small-extra'>Date of birth</Label>
                            <Input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.dob}
                                name='dob'
                                type='date' id='dob' placeholder='Enter description'/>
                        </Col>
                        <Col lg={3}>
                            <Label htmlFor='telNo' className='text-small-extra'>telephone no.</Label>
                            <Input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.telNo}
                                name='telNo'
                                type='tel' id='telNo' placeholder='Your telephone number'/>
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
                    <Row className='mt-4'>
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
                    </Row>
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
                        <button type="submit" className='btn btn-primary'>{currentlyEditing ? 'UPDATE' : 'REGISTER'}</button>
                    </div>
                </Form>
            </CardBody>
        </Card>
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
