import {Card, CardBody, CardHeader, Col, Form, Input, Label, Row} from "reactstrap"

const StockRequestingView = () => {

    return <Card>
        <CardHeader className='font-large-1 bg-gradient-primary f-Staatliches'>Requesting stocks</CardHeader>
        <CardBody>
            <Form>
                <Row>
                    <Col>
                        <Label>Title</Label>
                        <Input />
                    </Col>
                </Row>
            </Form>
        </CardBody>
    </Card>
}

export default StockRequestingView
