// import logo from './logo.svg';
// import './App.css';
import { Line } from 'react-chartjs-2';
import React from 'react';

const data = require('./data.json');

const App = () => {
  const state = {
    // labels: [
    //   'January',
    //   'February',
    //   'March',
    //   'April',
    //   'May',
    //   'Jun',
    //   'Jul',
    //   'Aug',
    //   'Sep',
    //   'Oct',
    //   'Nov',
    //   'Dec',
    // ],
    
    datasets: [
      {
        label: 'BPM Monthly',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 79, 80, 81, 120, 76, 86, 139, 144, 67, 112, 114],
      },
    ],
  };

  return (
    <div>
      <div>
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: 'Heart BPM Monthly',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'right',
            },
          }}
        />
      </div>
    </div>
  );
};

export default App;
