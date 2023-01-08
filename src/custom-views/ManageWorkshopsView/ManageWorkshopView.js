import {Button, Card, CardBody, CardHeader, Col, Form, Input, Label, Row} from "reactstrap"
import WorkshopManagementTable from "./table/WorkshopManagementTable"
import {useFormik} from "formik"
import {
    selectWorkshopCurrentlyEditing,
    selectWorkshopCurrentlyEditingData,
    workshopActions
} from "./slice/workshopSlice"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"

const ManageWorkshopView = () => {
    const dispatch = useDispatch()
const currentlyEditing = useSelector(selectWorkshopCurrentlyEditing)
    const currentlyEditingData = useSelector(selectWorkshopCurrentlyEditingData)

    useEffect(() => {
        dispatch(workshopActions.getWorkshops())
    }, [dispatch])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: currentlyEditing ? currentlyEditingData.name : '',
            description: currentlyEditing ? currentlyEditingData.description : ''
        },
        onSubmit: (values) => {
            if (!currentlyEditing) {
                dispatch(workshopActions.addWorkshop(values))
            } else {
                dispatch(workshopActions.editWorkshop(values))
            }
        }
    })

    return <div>
        <Card>
            <CardHeader className='p-1 m-0 bg-gradient-primary font-large-1 f-Staatliches'>
                Manage Workshops
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
                                dispatch(workshopActions.editWorkshopFailure())
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
                Workshops
            </CardHeader>
            <CardBody>
                <WorkshopManagementTable />
            </CardBody>
        </Card>
    </div>
}

export default ManageWorkshopView
