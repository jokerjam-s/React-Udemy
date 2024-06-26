import './Costs.css';
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "../Filter/CostsFilter";
import React, {useState} from "react";

const Costs = (props) => {
    const [year, setYear] = useState(2021);

    const onChangeYear = (newYear) => {
        setYear(newYear);
        console.log(newYear);
    }

    const filteredCosts = (cost) => {
        return cost.date.year === year;
    }

    return (
        <div>
            <Card className="costs">
                <CostsFilter year={year} onChangeYear={onChangeYear}/>
                {props.costs.filter((filteredCosts) => {
                    if (filteredCosts.date.year === year) {
                        return <CostItem
                            key={filteredCosts.id}
                            date={filteredCosts.date}
                            description={filteredCosts.description}
                            amount={filteredCosts.amount}
                        />
                    }
                })}
            </Card>
        </div>
    )

export default Costs;
