import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Red', 'Blue'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        '#ADC5EB',
        '#F995AA',
      ],
      borderColor: [
        '#ADC5EB',
        '#F995AA',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Expected Return/ Risk',
        position:'top'
      },
    },
};

const VerticalBar = () => (
  <>
    <Bar data={data} options={options} 
    height={235}
    />
  </>
);

export default VerticalBar;