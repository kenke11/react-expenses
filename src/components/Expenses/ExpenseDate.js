const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
       <div className="flex flex-col justify-between items-center text-white border-2 border-white rounded-xl w-28 py-3 bg-gray-800">
           <div className="text-base font-semibold">
               {month}
           </div>
           <div className="text-xs">
               {year}
           </div>
           <div className="mt-2 text-2xl font-semibold">
               {day}
           </div>
       </div>
    )
}

export default ExpenseDate;