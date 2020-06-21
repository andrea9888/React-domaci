import React from 'react';
import apiCall from "../services/apiCall";
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Home.css';
import {ReactComponent as Bear} from '../slike/medo.svg';
import {ReactComponent as Server1} from '../slike/server1.svg';
import server2 from '../slike/server2.svg';
import server3 from '../slike/server3.svg';

class Home extends React.Component {
    state = { 
        products: []
     }
    async componentDidMount() {
        const response = await apiCall.get('/products/marketing');
        const products = response.data;
        this.setState({products}) ;
        
    }
    
    createAdd = () =>{
        return this.state.products.map(elem =>{
            return (
            <div className="product" key={elem.id}>
                <h3>{elem.title}</h3>
                <p>{`${elem.description1} ${elem.minprice}€`}</p>
                <div className="illustr">
                    <Bear className="bear"/>
                    <Server1 className="server"/>
                </div>
                
            </div>
            )
        })
    }

    render() { 
        
        return ( 
            <div>
                <Carousel autoPlay showThumbs={false}>{this.createAdd()}</Carousel>
            </div>
         );
    }
}
 
export default Home;