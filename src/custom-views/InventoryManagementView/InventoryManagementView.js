import {Card, CardBody, CardHeader, Col, Form, Input, Label, Row} from "reactstrap"
import {useFormik} from "formik"
import InventorManagementTable from "./table/InventoryManagementTable"

const InventoryManagementView = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            serial: '',
            quantity: '',
            warningLevel: 0
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return <div>
        <Card>
            <CardHeader className='p-1 m-0 bg-gradient-primary font-large-1 f-Staatliches'>
                Manage Division Stock
            </CardHeader>
            <CardBody className='pt-2'>
                <Form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col lg={3}>
                            <Label htmlFor='name' className='text-small-extra'>Item name</Label>
                            <Input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                name='name'
                                id='name' placeholder='Enter your name'/>
                        </Col>
                        <Col lg={3}>
                            <Label htmlFor='serial' className='text-small-extra'>Serial Number</Label>
                            <Input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.serial}
                                name='serial'
                                type='text' id='serial' placeholder='Enter the serial'/>
                        </Col>
                        <Col lg={2}>
                            <Label htmlFor='quantity' className='text-small-extra'>Quantity</Label>
                            <Input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.quantity}
                                name='quantity'
                                type='number' id='quantity' />
                        </Col>
                        <Col lg={1}>
                            <Label htmlFor='telNo' className='text-small-extra'>Unit</Label>
                            <Input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.quantity}
                                name='telNo'
                                type='number' id='quantity' />
                        </Col>
                        <Col lg={3}>
                            <Label htmlFor='warningLevel' className='text-small-extra'>Warning level</Label>
                            <Input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.warningLevel}
                                name='warningLevel'
                                type='number' id='warningLevel' placeholder='Warning level'/>
                        </Col>
                    </Row>
                    <div className='w-100 mt-2 d-flex justify-content-end'>
                        <button type='submit' className='btn btn-primary'>ADD ITEM</button>
                    </div>
                </Form>
            </CardBody>
        </Card>
        <Card className='mt-2'>
            <CardHeader className='p-1 m-0 font-large-1 f-Staatliches'>
                STOCK
            </CardHeader>
            <CardBody>
                <InventorManagementTable/>
            </CardBody>
        </Card>
    </div>
}

export default InventoryManagementView
