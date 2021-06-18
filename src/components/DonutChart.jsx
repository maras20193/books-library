import React from 'react'
import ReactApexChart from 'react-apexcharts'


export default class DonutChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: props.data.map(item => item.numberOfBooks),
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: props.data.map(item => item.category),
          legend:{
            position: 'bottom',
            fontSize: '16px'
          },
          title: {
            text: 'All read books by category (All time)',
            align: 'left',
            margin: 40,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize:  '24px',
              fontWeight:  'bold',
              fontFamily:  'quicksand',
              color:  'rgba(0, 0, 0, 0.54)'
            },
        },
          responsive: [{
            breakpoint: 780,
            options: {
              chart: {
                width: 460
              },
              legend: {
                position: 'bottom'
              }
            },
            title: {
              align: 'center',
              style: {
                fontSize:  '16px',
              },
          },
          }],
          colors: props.data.map(item => item.color),
        },

      
      };
    }

  

    render() {
      return (
  <div id="chart">
<ReactApexChart 
options={this.state.options} 
series={this.state.series} 
type="pie" 
width={480} />
</div>


      );
    }
  }
