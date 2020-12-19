import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
} from "reactstrap";
import noImage from '../../Assets/noImageAvailable.jpg';
import "./card.css"
function Cards({data , key ,removeCard}) {
    return (
        <div className="cardContainer">
            <Card className="pt-3">
                <CardImg
                    top
                    src={data.file ? data.file : noImage}
                    alt="Card image cap"
                    style={{ width:150 , height:150 , margin:"auto"}}
                />
                <CardBody>
                    <CardTitle tag="h5">{data.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                        {data.subTitle}
                    </CardSubtitle>
                    <CardText>
                        {data.description}
                    </CardText>
                    <Button color="danger" onClick={() =>removeCard(key)}>Sil</Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default Cards;
