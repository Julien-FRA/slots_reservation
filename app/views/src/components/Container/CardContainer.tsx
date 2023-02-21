import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BtnDelete from "../Button/BtnDelete";
import BtnEdit from '../Button/BtnEdit';

function CardContainer(props:any) {
    
    if (props.type === "shop") {
        return (
        <Row xs={1} md={2} className="g-4">
            {props.userShopData.map((item: any) => (
                
                    <Card border="dark" style={{ width: '18rem' }}>
                        <Card.Img variant="bottom" src={require('../../assets/no-image.png')}/>
                        <Card.Body>
                            <Card.Title> {item.name} </Card.Title>
                            <Card.Text> Address : {item.address} </Card.Text>
                            <Card.Text> Service : {item.service} </Card.Text>
                            <Card.Text> IdShop : {item.idShop} </Card.Text>
                            <Card.Text> IdUser : {item.idUser} </Card.Text>
                            <Card.Footer>
                                <Row>
                                    <BtnEdit idShop={item.idShop} updateOnDelete={props.updateOnDelete}/>
                                    <BtnDelete idShop={item.idShop} updateOnDelete={props.updateOnDelete}/>
                                </Row>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                
            ))}
        </Row>
        );
    } else if (props.type === "user") {
        return (
            <div>
                <h2>{props.userShopData.name}</h2>
                <p>{props.userShopData.bio}</p>
                <p>{props.userShopData.location}</p>
            </div>
        );
    } else {
        return null;
    }
}

export default CardContainer;