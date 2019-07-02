import React from 'react';
import axios from "axios";
import Loader from 'react-loader-spinner';

const piJsonURL = "../json_files/pichart.json";
const barJsonURL = "../json_files/barchart.json";
const lineJsonURL = "../json_files/linechart.json";
const radarJsonURL = "../json_files/radarchart.json";



const MyHOC = (WrappedComponent) => {
    class NewComponent extends React.Component {


        constructor(props) {
            super(props);
            this.state = {
                data: "value coming from HOC",
                pichartData: [],
                barchartData: [],
                linechartData: [],
                radarchartData: [],
                isLoading: true
            }

        }

        componentDidMount() {
            this.loadAllData();
        }

        loadAllData() {
            setTimeout(() => {
                return axios.all([
                    axios.get(piJsonURL),
                    axios.get(barJsonURL),
                    axios.get(lineJsonURL),
                    axios.get(radarJsonURL)
                ])
                    .then(axios.spread((pichart, barchart, linechart, radarchart) => {
                        this.setState({
                            pichartData: pichart["data"].data,
                            barchartData: barchart["data"].data,
                            linechartData: linechart["data"].data,
                            radarchartData: radarchart["data"].data,

                        })
                        this.setState({ isLoading: false })
                    })
                    )
            }, 1000)


        }




        render() {
            // console.log(this.state.isLoading)
            const { pichartData, barchartData, linechartData, radarchartData, data, isLoading } = this.state;

            return this.state.isLoading ?
                <div className="loaderDiv">
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height="100"
                        width="100"
                    /></div>
                :
                <WrappedComponent
                    data={data}
                    pichartData={pichartData}
                    barchartData={barchartData}
                    linechartData={linechartData}
                    radarchartData={radarchartData}
                    isLoading={isLoading}
                    {...this.props} />
        }


    }

    return (NewComponent);
}

export default MyHOC;