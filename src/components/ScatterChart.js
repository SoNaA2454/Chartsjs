import React from 'react'
import { Scatter } from 'react-chartjs-2'

const ScatterChart = () => {
    return (
        <div>
            <Scatter
        data={{
          labels: ['Color Intensity'],
          datasets: [
                        {
                            label: 'Hue',
                            data: [
                                {

                                    x: 2.29,
                                    y: 5.64,

                                },
                                {

                                    x: 1.28,
                                    y: 4.38,

                                },
                                {

                                    x: 2.81,
                                    y: 5.68,

                                },
                                {

                                    x: 2.18,
                                    y: 7.8,

                                },
                                {

                                    x: 1.82,
                                    y: 4.32,
                                },
                                {

                                    x: 1.97,
                                    y: 6.75,

                                },
                                {

                                    x: 1.98,
                                    y: 5.25,

                                },
                            ],
                            backgroundColor: 'rgb(255, 99, 132)'
                        },
                    ],
        }}

        height={500}
        width={600}
        
        options={{
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

export default ScatterChart
