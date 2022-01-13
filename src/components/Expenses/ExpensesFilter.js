const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (e) => {
        props.onChangeFilter(e.target.value)
    }

    return (
        <div>
            <div className="flex justify-between items-center pb-5">
                <label className="font-semibold text-3xl text-white">Filter by year</label>

                <select
                    className="text-xl px-9 py-2 bg-white rounded-md"
                    value={props.selected}
                    onChange={dropdownChangeHandler}
                >
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
}

export default ExpensesFilter;