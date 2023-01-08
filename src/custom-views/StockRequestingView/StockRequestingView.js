import {Card, CardBody, CardHeader, Col, Form, Input, Label, Row} from "reactstrap"
import Select from "react-select"
import DivisionStockTable from "./tables/DivisionStockTable"
import {useFormik} from "formik"
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react"
import {requestingActions, selectRequestingItems} from "./slice/requestingSlice"

const StockRequestingView = () => {
    const dispatch = useDispatch()
    const items = useSelector(selectRequestingItems)
    const [selectItems, setSelectItems] = useState([])
    
    useEffect(() => {
        dispatch(requestingActions.getItems())
    }, [dispatch])

    useEffect(() => {
        const temp = items.map(data => {
            return {value: data.id, label: data.item_name}
        })
        setSelectItems(temp)
    }, [items])

    const formik = useFormik({
        initialValues: {
            item: '',
            quantity: 0,
            title: '',
            description: ''
        },
        onSubmit: values => {
            console.log(values)
        }
    })

    const cleanState = () => {
        formik.resetForm()
    }

    return <div>
        <Card>
            <CardHeader className='font-large-1 bg-gradient-primary f-Staatliches'>Requesting stocks</CardHeader>
            <CardBody className='pt-2'>
                <Form onSubmit={formik.handleSubmit} onReset={cleanState}>
                    <Row>
                        <Col lg={3}>
                            <Label className='text-small-extra'>Select Item</Label>
                            <Select options={selectItems} name='item' id='item' onChange={e => {
                                formik.setValues({
                                    ...formik.values,
                                    item: e.value
                                })
                            }}/>
                        </Col>
                        <Col lg={3}>
                            <Label htmlFor='quantity' className='text-small-extra'>Enter quantity</Label>
                            <Input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.quantity}
                                name='quantity'
                                id='quantity'
                                type='number'/>
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col>
                            <Label className='text-small-extra'>Title</Label>
                            <Input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.title}
                                name='title'
                                id='title'
                            />
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col>
                            <Label htmlFor='description' className='text-small-extra'>Description</Label>
                            <Input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.description}
                                name='description'
                                id='description'
                                type='textarea'/>
                        </Col>
                    </Row>
                    <div className='mt-2 d-flex justify-content-end'>
                        <button type='submit' className='btn btn-primary f-Staatliches text-medium mr-1'>REQUEST</button>
                        <button type='reset' onClick={() => formik.setValues({})} className='btn btn-danger f-Staatliches text-medium'>RESET</button>
                    </div>
                </Form>
            </CardBody>
        </Card>
        <Card className='mt-3'>
            <CardBody>
                <DivisionStockTable />
            </CardBody>
        </Card>
    </div>
}

export default StockRequestingView
