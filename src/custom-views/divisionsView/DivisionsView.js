import {Button, Card, CardBody, CardHeader, Col, Form, Input, Label, Row} from "reactstrap"
import DivisionManagementTable from "./table/DivisionManagementTable"
import {useFormik} from "formik"
import {useDispatch, useSelector} from "react-redux"
import {
    departmentActions,
    selectDepartmentCurrentlyEditing,
    selectDepartmentCurrentlyEditingData, selectDepartments
} from "./slice/departmentSlice"
import {useEffect} from "react"
import * as xlsx from "sheetjs-style"

const DivisionsView = () => {
    const dispatch = useDispatch()
const currentlyEditing = useSelector(selectDepartmentCurrentlyEditing)
    const currentlyEditingData = useSelector(selectDepartmentCurrentlyEditingData)

    const departments = useSelector(selectDepartments)

    useEffect(() => {
        dispatch(departmentActions.getDepartments())
    }, [dispatch])

    const generateDepartmentReport = (fileName) => {
        const workbook = xlsx.utils.book_new()
        const ws = xlsx.utils.json_to_sheet(departments)
        xlsx.utils.book_append_sheet(workbook, ws, "Results")
        xlsx.writeFile(workbook, `${fileName}.xlsx`, {type: 'file'})
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: currentlyEditing ? currentlyEditingData.name : '',
            description: currentlyEditing ? currentlyEditingData.description : ''
        },
        onSubmit: (values) => {
            if (!currentlyEditing) {
                dispatch(departmentActions.addDepartment(values))
            } else {
                dispatch(departmentActions.editDepartment(values))
            }
        }
    })

    return <div>
        <Card>
            <CardHeader className='p-1 m-0 bg-gradient-primary'>
                <div className='d-flex w-100 justify-content-between align-items-center'>
                    <p className='m-0 p-0 font-large-1 f-Staatliches'>Manage Departments</p>
                    <button
                        onClick={() => generateDepartmentReport('department-report')}
                        className='font-medium-1 btn btn-light'>Department report</button>
                </div>
            </CardHeader>
            <CardBody className='pt-2'>
                <Form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col lg={4}>
                            <Label htmlFor='name' className='text-small-extra'>Division Name</Label>
                            <Input
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.name}
                              id='name'
                              name='name'
                              placeholder='Enter division name'
                            />
                        </Col>
                        <Col lg={8}>
                            <Label htmlFor='description' className='text-small-extra'>Description</Label>
                            <Input
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.description}
                              id='description'
                              name='description'
                              placeholder='Enter description'
                            />
                        </Col>
                    </Row>
                    <div className='w-100 mt-2 d-flex justify-content-end'>
                        {
                          currentlyEditing &&
                          <button
                            type='button'
                            className='btn btn-danger mr-2'
                            onClick={() => {
                                dispatch(departmentActions.editDepartmentFailure())
                            }}
                          >
                              Cancel
                          </button>
                        }
                        <button type="submit" className='btn btn-primary'>{currentlyEditing ? 'UPDATE' : 'CREATE'}</button>
                    </div>
                </Form>
            </CardBody>
        </Card>
        <Card className='mt-2'>
            <CardHeader className='p-1 m-0 font-large-1 f-Staatliches'>
                DEPARTMENTS
            </CardHeader>
            <CardBody>
                <DivisionManagementTable />
            </CardBody>
        </Card>
    </div>
}

export default DivisionsView
