const ChartBar = (props) => {
    let barFillHeight = '0%'

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className="text-sm">
            <div className="flex flex-col justify-end h-full w-5 bg-purple-300 border border-gray-600 rounded-xl">
                <div className="bg-indigo-700 w-full rounded-xl transition duration-200" style={{height: barFillHeight}}/>
            </div>
            <div>{props.label}</div>
        </div>
    );
}

export default ChartBar;