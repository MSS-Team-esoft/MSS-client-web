import {Card, CardBody, CardFooter, CardHeader, Col, Modal, ModalBody, ModalHeader, Row} from "reactstrap"
import {Bar, CartesianGrid, ResponsiveContainer, XAxis, YAxis, BarChart, Legend} from "recharts"
import {Activity, AlertTriangle, Check} from "react-feather"
import TrackingTable from "./tables/TrackingTable"
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {
    inventoryTrackingActions, selectDashboardCriticalInventory,
    selectDashboardGoodInventory, selectDashboardWarningInventory
} from "./slice/inventoryTrackingSlice"
import InventorManagementTable from "../InventoryManagementView/table/InventoryManagementTable"

const StockTrackingView = () => {
    const dispatch = useDispatch()
    const goodItems = useSelector(selectDashboardGoodInventory)
    const warningItems = useSelector(selectDashboardWarningInventory)
    const criticalItems = useSelector(selectDashboardCriticalInventory)

    const [goodOpen, setGoodOpen] = useState(false)
    const [warningOpen, setWarningOpen] = useState(false)
    const [criticalOpen, setCriticalOpen] = useState(false)

    useEffect(() => {
        dispatch(inventoryTrackingActions.getDashboardDetails())
    }, [])

    return <div>
        <Row>
            <div style={{width: '30%'}}>
                <Card style={{height: '40vh'}}>
                    <CardBody>
                        <ResponsiveContainer>
                            <BarChart data={[
                                {
                                    name: "Track level",
                                    good: goodItems.length,
                                    warning: warningItems.length,
                                    critical: criticalItems.length
                                }
                            ]}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Legend />
                                <Bar barSize={40} dataKey="good" fill="rgba(46, 213, 115, 0.6)"/>
                                <Bar barSize={40} dataKey="warning" fill="rgba(255, 165, 2, 0.6)"/>
                                <Bar barSize={40} dataKey="critical" fill="rgba(235, 77, 75, 0.6)"/>
                            </BarChart>
                        </ResponsiveContainer>
                    </CardBody>
                </Card>
            </div>
            <div style={{
                width: '70%'
            }}>
                <Row>
                    <Col lg={4}>
                        <Card style={{height: '40vh'}}>
                            <CardHeader className='text-medium font-bold'>LEVEL: GOOD</CardHeader>
                            <CardBody className='d-center flex-column'>
                                <div>
                                    <Check size={100} color='rgba(46, 213, 115,1.0)'/>
                                </div>
                                <div>
                                    <b className='text-large text-success'>{goodItems.length} ITEM(S)</b>
                                </div>
                            </CardBody>
                            <CardFooter onClick={() => setGoodOpen(!goodOpen)} className='d-center'>
                                Click to see items
                            </CardFooter>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card style={{height: '40vh'}}>
                            <CardHeader className='text-medium font-bold'>LEVEL: WARNING</CardHeader>
                            <CardBody className='d-center flex-column'>
                                <div>
                                    <AlertTriangle size={100} color='#fbc531'/>
                                </div>
                                <div>
                                    <b className='text-large text-warning'>{warningItems.length} ITEM(S)</b>
                                </div>
                            </CardBody>
                            <CardFooter onClick={() => setWarningOpen(!warningOpen)} className='d-center'>
                                Click to see items
                            </CardFooter>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card style={{height: '40vh'}}>
                            <CardHeader className='text-medium font-bold'>LEVEL: CRITICAL</CardHeader>
                            <CardBody className='d-center flex-column'>
                                <div>
                                    <Activity size={100} color='#eb4d4b'/>
                                </div>
                                <div>
                                    <b className='text-large text-danger'>{criticalItems.length} ITEM(S)</b>
                                </div>
                            </CardBody>
                            <CardFooter onClick={() => setCriticalOpen(!criticalOpen)} className='d-center'>
                                Click to see items
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Row>
        <Row className='mt-2'>
            <TrackingTable />
        </Row>

        {/*--------------------------------------*/}
        {/*----Good level items modal started----*/}
        {/*--------------------------------------*/}
        <Modal size="xl"
               className='modal-dialog-centered' isOpen={goodOpen} toggle={() => setGoodOpen(!goodOpen)} backdrop={3}>
            <ModalHeader toggle={() => setGoodOpen(!goodOpen)}>
                <h3 className='m-0 p-0 f-Staatliches'>STOCK LEVEL: GOOD</h3>
            </ModalHeader>
            <ModalBody>
                <InventorManagementTable stockItems={goodItems}/>
            </ModalBody>
        </Modal>
        {/*---------------------*/}
        {/*----Good level items modal finished----*/}
        {/*---------------------*/}

        {/*--------------------------------------*/}
        {/*----Good level items modal started----*/}
        {/*--------------------------------------*/}
        <Modal size="xl"
               className='modal-dialog-centered' isOpen={warningOpen} toggle={() => setWarningOpen(!warningOpen)} backdrop={3}>
            <ModalHeader toggle={() => setWarningOpen(!warningOpen)}>
                <h3 className='m-0 p-0 f-Staatliches'>STOCK LEVEL: WARNING</h3>
            </ModalHeader>
            <ModalBody>
                <InventorManagementTable stockItems={warningItems}/>
            </ModalBody>
        </Modal>
        {/*---------------------*/}
        {/*----Good level items modal finished----*/}
        {/*---------------------*/}

        {/*--------------------------------------*/}
        {/*----Good level items modal started----*/}
        {/*--------------------------------------*/}
        <Modal size="xl"
               className='modal-dialog-centered' isOpen={criticalOpen} toggle={() => setCriticalOpen(!criticalOpen)} backdrop={3}>
            <ModalHeader toggle={() => setCriticalOpen(!criticalOpen)}>
                <h3 className='m-0 p-0 f-Staatliches'>STOCK LEVEL: CRITICAL</h3>
            </ModalHeader>
            <ModalBody>
                <InventorManagementTable stockItems={goodItems}/>
            </ModalBody>
        </Modal>
        {/*---------------------*/}
        {/*----Good level items modal finished----*/}
        {/*---------------------*/}
    </div>
}

export default StockTrackingView

