import './CostItem.css';
import CostDate from "./CostDate";
import Card from "../UI/Card";

import React, {useState} from "react";

function CostItem(props) {
    const [description, setDescription] = useState(props.description);

    const changeDescription = () => {
        setDescription("New Description");
    };

    return (
        <Card className='cost-item'>
            <CostDate date={props.date} />
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>{props.amount}</div>
            </div>
            <button onClick={changeDescription}>Изменить описание</button>
            <hr/>

        </Card>
    );
}

export default CostItem;