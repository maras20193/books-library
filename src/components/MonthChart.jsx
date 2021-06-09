import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Read',
          data: props.data.map(item => item.numberOfBooks)
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          title: {
            text: `All read books by month (${new Date().getFullYear()})`,
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
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: true
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
        //   yaxis: {
        //     title: {
        //       text: 'Number of books read'
        //     }
        //   },
          fill: {
            opacity: 0.8
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return  val + " books"
              }
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        <div id="chart">
            <ReactApexChart 
            options={this.state.options} 
            series={this.state.series} 
            type="bar" 
            height={350} />
        </div>
      );
    }

}