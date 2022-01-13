import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: 1,
        title: 'Mouse',
        amount: 32.32,
        date: new Date(2020, 5, 12)
    },
    {
        id: 2,
        title: 'Keyboard',
        amount: 52.42,
        date: new Date(2020, 11, 12)
    },
    {
        id: 3,
        title: 'Monitor',
        amount: 322.52,
        date: new Date(2021, 6, 23)
    },
]

function App() {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses]
        });
    }

    return (
        <div className="bg-gray-700 py-14">

            <NewExpense onAddExpense={addExpenseHandler} />

            <div className="flex w-5/6 mx-auto border border-gray-900 bg-gray-800 rounded-xl mt-14 px-10 py-14">
                <Expenses items={expenses}/>
            </div>
        </div>
    );
}

export default App;
