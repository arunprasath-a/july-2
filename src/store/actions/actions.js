
import axios from "axios";

export const onLogOut = () => {
    return {
        type: "ON_LOGOUT"
    }
}

export const onNameChange = (event) => {
    return {
        type: "NAME_CHANGE", nameValue: event.target.value
    }
}

export const onPassChange = (event) => {
    return {
        type: "PASS_CHANGE", passValue: event.target.value
    }
}


export const onLogIn = () => {
    return {
        type: "ON_LOG_IN"
    }
}



export function loadAgGridData() {


    return (dispatch) => {

        return axios.get("../json_files/test.json")
            .then((response) => {
                dispatch(agGridData(response.data))
            })
    }

}


export function agGridData(gridData) {
    return {
        type: "AG_GRID_DATA",
        payload: gridData
    }
}


//using settimeout
export function loadPiChartData() {
    return (dispatch) => {
        setTimeout( ()=>{
        return axios.get("../json_files/pichart.json")
            .then((response) => {
                dispatch(piChartData(response.data))
            })
            .catch((err) => {
                dispatch({type: "ACTION_FAIL", payload: err });
            });
        },2000)
    }
}


// export function loadPiChartData() {
//     return (dispatch) => {
//         return axios.get("../json_files/pichart.json")
//             .then((response) => {
//                 dispatch(piChartData(response.data))
//             })

//     }
// }


export function piChartData(pichartData) {
    return {
        type: "PI_CHART_DATA",
        payload: pichartData
    }
}


export function loadbarChartData() {
    return (dispatch) => {
        setTimeout( ()=>{
        return axios.get("../json_files/barchart.json")
            .then((response) => {
                dispatch(barChartData(response.data))
            }) },2000)
    }
}

// export function loadbarChartData() {
//     return (dispatch) => {
//         return axios.get("../json_files/barchart.json")
//             .then((response) => {
//                 dispatch(barChartData(response.data))
//             })
//     }
// }


export function barChartData(barchartData) {
    return {
        type: "BAR_CHART_DATA",
        payload: barchartData
    }
}


export function loadlineChartData() {
    return (dispatch) => {
        setTimeout( ()=>{
        return axios.get("../json_files/linechart.json")
            .then((response) => {
                dispatch(lineChartData(response.data))
            }) },2000)
    }
}

// export function loadlineChartData() {
//     return (dispatch) => {
//         return axios.get("../json_files/linechart.json")
//             .then((response) => {
//                 dispatch(lineChartData(response.data))
//             })
//     }
// }


export function lineChartData(linechartData) {
    return {
        type: "LINE_CHART_DATA",
        payload: linechartData
    }
}


export function loadradarChartData() {
    return (dispatch) => {
        setTimeout( ()=>{
        return axios.get("../json_files/radarchart.json")
            .then((response) => {
                dispatch(radarChartData(response.data))
            }) },2000)
    }
}

// export function loadradarChartData() {
//     return (dispatch) => {
//         return axios.get("../json_files/radarchart.json")
//             .then((response) => {
//                 dispatch(radarChartData(response.data))
//             })
//     }
// }


export function radarChartData(radarchartData) {
    return {
        type: "RADAR_CHART_DATA",
        payload: radarchartData
    }
}

//---------------------------------------------------------------------


// import axios from "axios";

// export const onLogOut = () => {
//     return {
//         type: "ON_LOGOUT"
//     }
// }

// export const onNameChange = (event) => {
//     return {
//         type: "NAME_CHANGE", nameValue: event.target.value
//     }
// }

// export const onPassChange = (event) => {
//     return {
//         type: "PASS_CHANGE", passValue: event.target.value
//     }
// }


// export const onLogIn = () => {
//     return {
//         type: "ON_LOG_IN"
//     }
// }


// export function loadAllData() {
//     return (dispatch) => {
//         return axios.all([
//             axios.get('../json_files/test.json'),
//             axios.get("../json_files/pichart.json"),
//             axios.get("../json_files/barchart.json"),
//             axios.get("../json_files/linechart.json"),
//             axios.get("../json_files/radarchart.json")
//           ])
//           .then(axios.spread((agGrid,pichart,barchart,linechart,radarchart) => {
//              dispatch(agGridData(agGrid["data"]))
//              dispatch(piChartData(pichart["data"]))
//              dispatch(barChartData(barchart["data"]))
//              dispatch(lineChartData(linechart["data"]))
//              dispatch(radarChartData(radarchart["data"]))
//           })
//           )
//         }

// }

// export function agGridData(gridData) {
//     return {
//         type: "AG_GRID_DATA",
//         payload: gridData
//     }
// }



// export function piChartData(pichartData) {
//     return {
//         type: "PI_CHART_DATA",
//         payload: pichartData
//     }
// }

// export function barChartData(barchartData) {
//     return {
//         type: "BAR_CHART_DATA",
//         payload: barchartData
//     }
// }

// export function lineChartData(linechartData) {
//     return {
//         type: "LINE_CHART_DATA",
//         payload: linechartData
//     }
// }

// export function radarChartData(radarchartData) {
//     return {
//         type: "RADAR_CHART_DATA",
//         payload: radarchartData
//     }
// }
