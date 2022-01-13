import {useState} from "react";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnterTitle] = useState('');
    const [enteredAmount, setEnterAmount] = useState('');
    const [enteredDate, setEnterDate] = useState('');

    // TODO
    //
    // alternative


    // const [userInput, setUserInput] = useState(
    //     {
    //         enteredTitle: '',
    //         enteredAmount: '',
    //         enteredDate: ''
    //     }
    // );

    const dateNow = new Date().toISOString().slice(0, 10);

    const tittleChangeHandler = (e) => {

        setEnterTitle(e.target.value)

        // TODO
        //
        // alternative

        // setUserInput(
        //     {
        //         ...userInput,
        //         enteredTitle: e.target.value
        //     }
        // )
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: e.target.value,
        //     };
        // })
    }

    const amountChangeHandler = (e) => {

        setEnterAmount(e.target.value)

        // TODO
        //
        // alternative

        // setUserInput(
        //     {
        //         ...userInput,
        //         enteredAmount: e.target.value
        //     }
        // )
    }

    const dateChangeHandler = (e) => {

        setEnterDate(e.target.value)


        // TODO
        //
        // alternative

        // setUserInput(
        //     {
        //         ...userInput,
        //         enteredDate: e.target.value
        //     }
        // )
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    }

    return (
        <form
            onSubmit={submitHandler}
            className="bg-purple-400 border border-purple-600 rounded-xl p-10"
        >
            <div>
                <div className="flex">
                    <div className="w-1/2 pr-24">
                        <label className="w-full font-semibold">Title</label>
                        <input
                            className="w-full rounded-xl text-xl px-3 py-2 mt-2"
                            type="text"
                            value={enteredTitle}
                            onInput={tittleChangeHandler}
                        />
                    </div>
                    <div className="w-1/2 pr-24">
                        <label className="w-full font-semibold">Amount</label>
                        <input
                            className="w-full rounded-xl text-xl px-3 py-2 mt-2"
                            type="number" min="0.1"
                            step="0.1"
                            value={enteredAmount}
                            onInput={amountChangeHandler}
                        />
                    </div>
                </div>
                <div className="w-1/2 pr-24 mt-10">
                    <label className="w-full font-semibold">Date</label>
                    <input
                        className="w-full rounded-xl text-xl px-3 py-2 mt-2"
                        type="date"
                        min="2019-01-01"
                        max={dateNow}
                        value={enteredDate}
                        onInput={dateChangeHandler}
                    />
                </div>
                <div className="w-full flex justify-end pr-24 mt-10">
                    <button
                        type="submit"
                        className="text-xl font-semibold text-white border border-purple-900 px-6 py-3 bg-purple-800 rounded-xl hover:bg-purple-900 transition duration-200"
                    >
                        Add Expense
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm