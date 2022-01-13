import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)

    return (
        <div className="flex justify-between py-10 px-16 bg-purple-200 rounded-xl h-48">
            {
                props.dataPoints.map(dataPoint => (
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMaximum}
                        label={dataPoint.label}
                    />
                ))
            }
        </div>
    );
}

export default Chart;