import React from 'react'
import { Bar } from 'react-chartjs-2'

// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ['Malic Acid'],
          datasets: [
            { 
              label:'Alchol',
              
              data: [14.23, 13.2, 13.16, 14.37, 13.24, 14.2, 14.39,14.06, 14.83, 13.86,14.1,14.12, 
              13.75,14.75,14.38,13.63, 14.3,  13.83, 14.19, 13.64, 14.06, 12.93, 13.71, 12.85, 13.05, 14.13],
              borderWidth: 2
            },
          ],
        }}

        height={500}
        width={600}
        
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default BarChart
