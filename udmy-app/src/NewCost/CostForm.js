import './CostForm.css';
import React, {useState} from "react";

const CostForm = (props) => {
    const [inputName, setInputName] = useState("");
    const [inputCost, setInputCost] = useState("");
    const [inputDate, setInputDate] = useState("");

    // const [formInput, setFormInput] = useState({
    //     name: '',
    //     cost: "0.01",
    //     date: ""
    // });


    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
        // setFormInput({
        //     ...formInput,
        //     name: event.target.value
        // })
        // setFormInput((prevState) => {
        //     return {
        //         ...prevState,
        //         name: event.target.value
        //     }
        // })
    };

    const costChangeHandler = (event) => {
        setInputCost(event.target.value);
        // setFormInput({
        //     ...formInput,
        //     cost: event.target.value
        // })
        // setFormInput((prevState) => {
        //     return {
        //         ...prevState,
        //         cost: event.target.value
        //     }
        // })
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
        // setFormInput({
        //     ...formInput,
        //     date: event.target.value
        // })
        // setFormInput((prevState) => {
        //     return {
        //         ...prevState,
        //         date: event.target.value
        //     }
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const formData = {
            name: inputName,
            cost: inputCost,
            date: new Date(inputDate)
        };

        props.onSaveCostData(formData);
        setInputName("");
        setInputCost("");
        setInputDate("");
    };

    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Название</label>
                <input type="text" value={inputName} onChange={nameChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Сумма</label>
                <input type="number" value={inputCost} min="0.01" step="0.01" onChange={costChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Дата</label>
                <input type="date" value={inputDate} min="2020-01-01" max="2030-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-cost__actions">
            <button type="submit">Добавить расход</button>
        </div>
    </form>
}

export default CostForm;