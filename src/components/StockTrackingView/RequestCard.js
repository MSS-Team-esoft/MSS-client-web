import {Card, CardBody, CardHeader, Col, Row} from "reactstrap"

const RequestCard = () => {

    return <Card>
        <CardHeader className='pb-0'>
            <p style={{
                fontSize: 20
            }}>
                To Request 10 units of lock barrels
            </p>
            <p className='mt-1'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used
                as a placeholder before final copy is available.</p></CardHeader>
        <hr/>
        <CardBody>
            <Row>
                <Col lg={2}>
                    <h5>Item: <span className='font-bold'>Lock Barrel (Large)</span></h5>
                </Col>
                <Col lg={4}>
                    <h5>Quantity: <span className='font-bold'>18 units</span></h5>
                </Col>
            </Row>
            <div className='w-100 mt-2 d-flex justify-content-end'>
                <Col lg={1}>
                    <button className='btn btn-danger'>REJECT</button>
                </Col>
                <Col lg={1}>
                    <button className='btn btn-primary'>APPROVE</button>
                </Col>
            </div>
        </CardBody>
    </Card>
}

export default RequestCard
