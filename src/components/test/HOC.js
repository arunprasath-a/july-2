import React from 'react';
import axios from "axios";


const MyHOC = (WrappedComponent) =>{
    class NewComponent extends React.Component{


        constructor(props){
            super(props);
            this.state={
                data:"value coming from HOC",
                pichartData:[]
            }
            
        }

        componentDidMount(){
            this.loadPiChartData();
          
        }

       loadPiChartData() {
         
           
                return axios.get("../json_files/pichart.json")
                    .then((response) => {
                     
                        this.setState({
                            pichartData:response.data.data
                        })
                    })
                   
        }


       
        render(){
       
           return <WrappedComponent data={this.state.data}   pichartData={this.state.pichartData}   
            {...this.props}/>
        }
       

    }

    return (NewComponent);
}

export default MyHOC;