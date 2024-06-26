import Costs from "./components/Costs/Costs";
import NewCost from "./NewCost/NewCost";

import React, {useState} from "react";

const INITIAL_COSTS = [
    {
        id: "c1",
        date: new Date(2022, 11, 10),
        description: "Холодильник",
        amount: 999.99,
    },
    {
        id: "c2",
        date: new Date(2023, 8, 16),
        description: "Телевизор",
        amount: 999.99,
    },
    {
        id: "c3",
        date: new Date(2021, 10, 8),
        description: "Пылесос",
        amount: 999.99,
    },
    {
        id: "c4",
        date: new Date(2022, 9, 15),
        description: "Ноутбук",
        amount: 999.99,
    },
]

function App() {
    const [costs, setCosts] = useState(INITIAL_COSTS);

    const addCostHandler = (cost) => {
        setCosts(prevCosts => {
            return [...prevCosts, cost]
        });
    }

    return (
        <div>
            <NewCost onAddCost={addCostHandler}/>
            <Costs costs={costs}/>
        </div>
    );
}

export default App;
