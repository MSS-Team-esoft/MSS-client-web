import {Card, CardBody, CardHeader, Col, Form, Input, Label, Row} from "reactstrap"
import {useFormik} from "formik"
import InventorManagementTable from "./table/InventoryManagementTable"
import Select from "react-select"
import {METRIC_UNITS} from "../../DB/DB"
import {useDispatch} from "react-redux"
import {inventoryActions} from "./slice/inventorySlice"
import {useEffect} from "react"

const InventoryManagementView = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(inventoryActions.getItems())
    }, [dispatch])

    const formik = useFormik({
        initialValues: {
            item_name: '',
            serial_number: '',
            quantity: '',
            unit: '',
            warning_level: undefined,
            critical_level: undefined
        },
        onSubmit: (values) => {
            dispatch(inventoryActions.addItem(values))
        }
    })

    return <div>
        <Card>
            <CardHeader className='p-1 m-0 bg-gradient-primary font-large-1 f-Staatliches'>
                Manage Stock
            </CardHeader>
            <CardBody className='pt-2'>
                <Form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col lg={3}>
                            <Label htmlFor='item_name' className='text-small-extra'>Item name</Label>
                            <Input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.item_name}
                                name='item_name'
                                id='item_name'
                                placeholder='Enter item name'/>
                        </Col>
                        <Col lg={2}>
                            <Label htmlFor='serial_number' className='text-small-extra'>Serial Number</Label>
                            <Input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.serial_number}
                                name='serial_number'
                                type='text'
                                id='serial_number'
                                placeholder='Enter the serial'/>
                        </Col>
                        <Col lg={1}>
                            <Label htmlFor='quantity' className='text-small-extra'>Quantity</Label>
                            <Input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.quantity}
                                name='quantity'
                                type='number' id='quantity'
                                min={1}
                            />
                        </Col>
                        <Col lg={2}>
                            <Label htmlFor='telNo' className='text-small-extra'>Unit</Label>
                            <Select
                                options={METRIC_UNITS}
                                onChange={e => formik.setValues({
                                    ...formik.values,
                                    unit: e.value
                                })}
                                onBlur={formik.handleBlur}
                                value={formik.values.unit}
                                id='unit'
                                name='unit'
                            />
                        </Col>
                        <Col lg={2}>
                            <Label htmlFor='warning_level' className='text-small-extra'>Warning level</Label>
                            <Input
                                disabled={!formik.values.quantity}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.warning_level}
                                name='warning_level'
                                type='number' id='warning_level' placeholder='Warning level'
                                // min={formik.values.quantity}
                            />
                        </Col>
                        <Col lg={2}>
                            <Label htmlFor='critical_level' className='text-small-extra'>Critical level</Label>
                            <Input
                                disabled={!formik.values.quantity}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.critical_level}
                                name='critical_level'
                                type='number' id='critical_level' placeholder='Critical level'
                                // min={formik.values.quantity}
                            />
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
