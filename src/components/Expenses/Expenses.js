import Card from "../Ui/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <Card >
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />

            <ExpensesChart expenses={filteredExpenses} />

            {
                filteredExpenses.length === 0
                    ? <p className="text-white">No expenses found.</p>
                    : filteredExpenses.map(expense => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))
            }
        </Card>
    )
}

export default Expenses;