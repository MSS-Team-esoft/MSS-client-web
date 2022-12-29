import {Card, CardBody, CardHeader, Col, Form, Input, Label, Row} from "reactstrap"
import {useFormik} from "formik"
import Select from "react-select"

const MotherDistributionManagementView = () => {

    const formik = useFormik({
        initialValues: {
            item: '',
            quantity: '',
            division: ''
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return <div>
        <Card>
            <CardHeader className='p-1 m-0 bg-gradient-primary font-large-1 f-Staatliches'>
                Manage Distribution
            </CardHeader>
            <CardBody className='pt-2'>
                <Form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col lg={4}>
                            <Label className='text-small-extra'>Select item</Label>
                            <Select />
                        </Col>
                        <Col lg={4}>
                            <Label htmlFor='quantity' className='text-small-extra'>Quantity</Label>
                            <Input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.quantity}
                                name='quantity' id='quantity'
                            />
                        </Col>
                        <Col lg={4}>
                            <Label className='text-small-extra'>Select division</Label>
                            <Select />
                        </Col>
                        <div className='d-flex justify-content-end w-100 mt-2'>
                                <button className='btn btn-primary'>ADD STOCK</button>
                        </div>
                    </Row>
                </Form>
                <hr />
            </CardBody>
        </Card>
    </div>
}

export default MotherDistributionManagementView
