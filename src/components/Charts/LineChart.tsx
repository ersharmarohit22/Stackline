// src/components/LineChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
} from 'chart.js';

ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
)

interface LineChartProps {
  data: {
    labels: string[]; // Array of month names
    datasets: {
      label?: string;
      data: number[];
      fill?: boolean;
      borderColor?: string;
      tension?: number;
    }[];
  };
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  return <Line style={{width:'98%'}} data={data}/>;
};

export default LineChart;
