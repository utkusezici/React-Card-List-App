import React, { useState } from "react";
import Cards from "../../Components/Cards";
import Forms from "../../Components/Forms";
import { Card } from "reactstrap";
import "./home.css";
function Home() {
    const [cardList, setCardList] = useState([]);
    const removeCard = (key) => {
        setCardList((card) => [...card].filter((_, _index) => _index !== key));
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <Card className="mb-5">
                        <div className="formContainer">
                            <Forms
                                cardList={cardList}
                                setCardList={(list) => setCardList(list)}
                            />
                        </div>
                    </Card>
                </div>
                <div className="col-sm-12 col-md-8">
                    <Card>
                        <div className="cardList">
                            {cardList.length !== 0 ? (
                                cardList.map((card, key) => (
                                    <Cards
                                        data={card}
                                        key={key}
                                        removeCard={() => removeCard(key)}
                                    />
                                ))
                            ) : (
                                <h1>Kart Eklenmemiş..</h1>
                            )}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Home;
