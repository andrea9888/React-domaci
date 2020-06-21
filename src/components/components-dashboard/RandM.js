import React from 'react';
import RandMCall from '../../services/RandMCall.js'
import { Select, Radio, Button, Table } from 'antd';


import '../../styles/RandM.css';



const { Option } = Select;


class RandM extends React.Component{
    state={
        radioValue: "character",
        showTable: false,
        dataSource: [],
        columns: []
    }

    onChangeRadio = e => {
        this.setState({
          radioValue: e.target.value
        });
    }

    helper = (link) =>{
        return(
            <img src={link} className="table-image" />
        );
    }

    async callFunc(){
        await RandMCall.get(`/${this.state.radioValue}`).then(res => {
            if(this.state.radioValue === "character"){
                var link;
                this.setState({ dataSource:  res.data.results.map((elem, index) => 
                {   
                    link = this.helper(elem.image)
                    
                    return (
                            {
                                key: index,
                                name: elem.name,
                                status: elem.status,
                                species: elem.species,
                                image: link
                            }
                        );
                    }
                    )
                }
            )
        //set Columns
        let columns = [{
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
            },{
              title: 'Status',
              dataIndex: 'status',
              key: 'status',
            },{
              title: 'Species',
              dataIndex: 'species',
              key: 'species',
            },{
                title: 'image',
                dataIndex: 'image',
                key: 'image',
              }
          ];
        this.setState({columns})
        
        }else if(this.state.radioValue === "location"){
            this.setState({ dataSource:  res.data.results.map((elem, index) => 
                {   
                    return (
                            {
                                key: index,
                                name: elem.name,
                                type: elem.type,
                                dimension: elem.dimension
                            }
                        );
                    }
                    )
                }
            )
        //set Columns
        let columns = [{
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
            },{
              title: 'Type',
              dataIndex: 'type',
              key: 'type',
            },{
              title: 'Dimension',
              dataIndex: 'dimension',
              key: 'dimension',
            }
          ];
        this.setState({columns})
        }else {
            this.setState({ dataSource:  res.data.results.map((elem, index) => 
                {   
    
                    return (
                            {
                                key: index,
                                name: elem.name,
                                air_date: elem.air_date,
                                episode: elem.episode
                            }
                        );
                   }
                    )
                }
            )
        //set Columns
        let columns = [{
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
            },{
              title: 'Air date',
              dataIndex: 'air_date',
              key: 'air_date',
            },{
              title: 'Episode',
              dataIndex: 'episode',
              key: 'episode',
            }
          ];
        this.setState({columns})
        }
        this.setState({showTable: true});
        }, () => {
            alert("Doslo je do greske! Pokusajte ponovo");
        });
    }

    searchFunc = () => {
        this.callFunc();
    }

    
  render() {
    
      
      
      return (
        
        <React.Fragment>

            <div style={{ marginTop: 50  }}>
                <h3>Search by:</h3>
                <Radio.Group onChange={this.onChangeRadio} defaultValue="character" >
                    <Radio.Button value="character" name="radio">Characters</Radio.Button>
                    <Radio.Button value="location" name="radio">Locations</Radio.Button>
                    <Radio.Button value="episode" name="radio">Episodes</Radio.Button>
                </Radio.Group>
            
            </div>

            <Button type="primary" htmlType="submit" style={{ marginTop: 30  }} onClick={this.searchFunc}>
            Search
            </Button>
            {this.state.showTable?<Table dataSource={this.state.dataSource} columns={this.state.columns} style={{ margin: 20  }}/>:""}

      </React.Fragment>
      );
      }
  };
  
  export default RandM;