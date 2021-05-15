import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    // creates array of dataPoint month values
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); 
    // finds the max value -- `...` pulls all values and makes them standalone values (1, 2, etc)
    const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
