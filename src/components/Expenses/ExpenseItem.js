import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    return (
        <div className="flex items-center justify-between bg-gray-700 px-5 py-5 rounded-xl">
            <div className="flex items-center space-x-7">
                <ExpenseDate date={props.date}/>
                <h2 className="font-semibold text-white text-3xl">{props.title}</h2>
            </div>
            <div className="flex space-x-5">
                <div className="border border-white rounded-xl px-5 py-3 text-white font-semibold bg-purple-900">
                    ${props.amount}
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;