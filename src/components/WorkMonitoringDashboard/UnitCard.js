import {Card, CardBody} from "reactstrap"

const UnitCard = ({name}) => {

    return <Card className='clickable-mini'>
        <CardBody className='d-center'>
            <h5 className='p-0 m-0'>{name}</h5>
        </CardBody>
    </Card>
}

export default UnitCard
