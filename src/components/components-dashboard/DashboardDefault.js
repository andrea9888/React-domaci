import  React  from "react";
import { Line } from 'react-chartjs-2';

class DashboardDefault extends React.Component{
    state={
        chart: {
            labels: ['January', 'February', 'March',
                     'April', 'May', 'June', 'July', 'August', 'September', 'October'],
            datasets: [
              {
                label: 'Euros',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(24,144,255,1)',
                borderColor: 'rgba(24,144,255,1)',
                borderWidth: 2,
                data: [650, 590, 1800, 1081, 1056, 900, 1200, 1340, 1200, 2000]
              }
            ]
          }
    }


    render(){
        return(
            <React.Fragment>
                <Line
                    data={this.state.chart}
                    options={{
                        title:{
                        display:true,
                        text:'Profit per month',
                        fontSize:20
                        },
                        legend:{
                        display:true,
                        position:'right'
                        }
                    }}
                />

            </React.Fragment>
        
        );


}


}

export default DashboardDefault;