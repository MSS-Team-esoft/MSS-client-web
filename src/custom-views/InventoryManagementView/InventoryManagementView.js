import {Card, CardBody, CardHeader, Col, Form, Input, Label, Row} from "reactstrap"
import {useFormik} from "formik"
import InventorManagementTable from "./table/InventoryManagementTable"
import Select from "react-select"
import {METRIC_UNITS} from "../../DB/DB"
import {useDispatch, useSelector} from "react-redux"
import {inventoryActions, selectInventoryCurrentlyEditing, selectInventoryEditingData} from "./slice/inventorySlice"
import {useEffect, useState} from "react"

const InventoryManagementView = () => {
  const dispatch = useDispatch()
  const currentlyEditing = useSelector(selectInventoryCurrentlyEditing)
  const currentlyEditingData = useSelector(selectInventoryEditingData)
  const [selectedUnit, setSelectedUnit] = useState(null)

  useEffect(() => {
    dispatch(inventoryActions.getItems())
  }, [dispatch])

  useEffect(() => {
    if (currentlyEditing) {
      setSelectedUnit({
        label: currentlyEditingData.unit,
        value: currentlyEditingData.unit
      })
    } else {
      setSelectedUnit(null)
    }
  }, [currentlyEditingData])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      item_name: currentlyEditing ? currentlyEditingData.item_name : '',
      serial_number: currentlyEditing ? currentlyEditingData.serial_number : '',
      quantity: currentlyEditing ? currentlyEditingData.quantity : '',
      unit: currentlyEditing ? currentlyEditingData.unit : '',
      warning_level: currentlyEditing ? currentlyEditingData.warning_level : 0,
      critical_level: currentlyEditing ? currentlyEditingData.critical_level : 0
    },
    onSubmit: (values) => {
      if (!currentlyEditing) {
        dispatch(inventoryActions.addItem({
          ...values,
          quantity: values.quantity.toString(),
          warning_level: values.warning_level.toString(),
          critical_level: values.critical_level.toString()
        }))
      } else {
        dispatch(inventoryActions.editItem({
          ...values,
          quantity: values.quantity.toString(),
          warning_level: values.warning_level.toString(),
          critical_level: values.critical_level.toString()
        }))
      }
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
                onChange={e => {
                  formik.setValues({
                    ...formik.values,
                    unit: e.value
                  })
                  setSelectedUnit(e)
                }}
                onBlur={formik.handleBlur}
                value={selectedUnit}
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
                min={1}
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
                min={1}
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
                  dispatch(inventoryActions.editItemFailure())
                }}
              >
                Cancel
              </button>
            }
            <button type='submit' className='btn btn-primary'>{currentlyEditing ? 'UPDATE' : 'ADD ITEM'}</button>
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
