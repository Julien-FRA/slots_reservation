import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import BtnDelete from "../Button/BtnDelete";
import BtnEdit from '../Button/BtnEdit';

function CardContainer(props:any) {
    //debugger;
    if (props.type === "shop") {
        return (
        <>
            {props.userShopData.map((item: any) => (
                    <Card key={item.idShop} border="dark" style={{ position: 'relative', width: '100%', height: '30rem', margin: '10px 0px' }}>
                        <Card.Img variant="bottom" src={require('../../assets/noImage3.png')} style={{ padding:'10px', position: 'relative', width: '100%', height:'10rem' }}/>
                        <Card.Body>
                            <Card.Title> {item.name} </Card.Title>
                            <Card.Text> Address : {item.address} </Card.Text>
                            <Card.Text> Service : {item.service} </Card.Text>
                            <Card.Text> IdShop : {item.idShop} </Card.Text>
                            <Card.Text> IdUser : {item.idUser} </Card.Text>
                            <Card.Footer style={{ display: 'flex', justifyContent: 'space-evenly'}}>                             
                                <BtnEdit setIdShop={props.setIdShop} idShop={item.idShop} setHasShop={props.setHasShop} setShopRequestType={props.setShopRequestType}/>
                                <BtnDelete idShop={item.idShop} setHasShop={props.setHasShop}/>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                
            ))}
        </>
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