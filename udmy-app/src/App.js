import Costs from "./components/Costs";

function App() {
    const costs = [
        {
            date: new Date(2022, 11, 10),
            description: "Холодильник",
            amount: 999.99,
        },
        {
            date: new Date(2023, 8, 16),
            description: "Телевизор",
            amount: 999.99,
        },
        {
            date: new Date(2021, 10, 8),
            description: "Пылесос",
            amount: 999.99,
        },
        {
            date: new Date(2022, 9, 15),
            description: "Ноутбук",
            amount: 999.99,
        },
    ]

    return (
        <div>
            <h1>Start React lerning.</h1>
            <Costs costs={costs} />
        </div>
    );
}

export default App;
