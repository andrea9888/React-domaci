import React from 'react';
import { Radio } from 'antd';
import  Hosting  from './Hosting.js'
import  RandM  from './RandM.js'


class List extends React.Component{
    state={
        radioValue: "project"
    }
 onChangeRadio = e => {
    this.setState({
      radioValue: e.target.value,
    });
}
  
  render() {
      return (
        
        <React.Fragment >
            <div style={{ textAlign: "center", paddingTop: 50, height: 'fit-content'  }}>
            <Radio.Group onChange={this.onChangeRadio} defaultValue="project" >
                <Radio.Button value="project" name="radio">Project</Radio.Button>
                <Radio.Button value="rAndM" name="radio">Rick and Morty</Radio.Button>
            </Radio.Group>
        
        {this.state.radioValue==="project"?<Hosting />:<RandM/>}
        </div>
      </React.Fragment>
      );
      }
  };
  
  export default List;