
import React from 'react';
import LineChart from './Charts/LineChart';
import Card from "./Card";

const generateDataSet = (data:any) => {
  let dataHash = data.reduce((hash:any,val:any)=>{
    hash[val.weekEnding] = val.retailSales;
    return hash;
  },{});
  return dataHash
}

interface ChartData {
  jsonData  :any;
}

const ChartView : React.FC<ChartData> = ({jsonData})=>{
  
  let dataSet = generateDataSet(jsonData.sales);
  let dataArray : number[] = Object.values(dataSet); 
  const chartData = {
    labels: Object.keys(dataSet),
    datasets: [
      {
        label: 'Retail Sales',
        data: dataArray,
        fill: false,
        borderColor: 'rgb(18, 108, 255)',
        tension:0.4
      }
    ]
  };

  return(
    <div>
      <Card>
        <LineChart data={chartData} />
      </Card>
      
    </div>
  )
}

export default ChartView;