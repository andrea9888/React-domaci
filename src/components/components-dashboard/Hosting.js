import React from 'react';
import apiCall from '../../services/apiCall.js'
import { Select } from 'antd';
import { Card } from 'antd';

import '../../styles/Hosting.css';



const { Option } = Select;


class Hosting extends React.Component{
    state={
        pack: ["vps", "shared", "dedicated", "cloud"],
        current: ""
    }
    async call(name){
        await apiCall.get(`/products/${name}`).then(res => {
            let cardsList = res.data;
            cardsList = cardsList.map(a => Object.assign({}, a));
            this.setState({ cardsList:  cardsList.map((a, index) => 
            {
                return (
            <Card title={a.productname} className="card" extra={<button>Order now</button> } key={`card_${index}`}>
                <p>{a.description1}</p>
                <p>{a.description2}</p>
                <p >{a.price1}/{a.pricedescription.slice(0, 1)}</p>

            </Card>);
            }
            )
        })
        }, () => {
            alert("Doslo je do greske! Pokusajte ponovo");
        });
    
}

    handleClick = (e) =>{
        if(e !== this.state.current){
            this.call(e);
        }
    }
    
  render() {
      return (
        
        <React.Fragment>

                <h1>Odaberite opciju:</h1>
                <Select style={{ width: 120 }} onChange={this.handleClick}>
                    <Option value="vps">VPS</Option>
                    <Option value="dedicated">Dedicated</Option>
                    <Option value="shared">Shared</Option>
                    <Option value="cloud">ME cloud</Option>
                </Select>
                <div className="cards">
                    {this.state.cardsList}
                </div>
        
      </React.Fragment>
      );
      }
  };
  
  export default Hosting;