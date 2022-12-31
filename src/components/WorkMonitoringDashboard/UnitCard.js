import {Card, CardBody, Col} from "reactstrap"
import Avatar from "../../@core/components/avatar"

const UnitCard = ({name}) => {

    return <Card className='clickable-mini'>
        <CardBody className='d-flex'>
            <Col lg={3}>
                <Avatar img='https://media.istockphoto.com/id/1397556857/vector/avatar-13.jpg?b=1&s=170667a&w=0&k=20&c=1GR7K88AV_az799CO-ecA9bwoEKgHzuB-mtE0YBF00s='/>
            </Col>
            <Col className='d-flex align-items-center'>
                <h5 className='p-0 m-0'>{name}</h5>
            </Col>
        </CardBody>
    </Card>
}

export default UnitCard
