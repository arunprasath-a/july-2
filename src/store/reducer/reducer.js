

const initialState = {
    userName: "",
    password: "",
    headerData: [],
    rowData: [],
    pichartData: [],
    barchartData: [],
    linechartData: [],
    radarchartData: [],
    errMessage:"",
   
   
}



const reducer = (state = initialState, action) => {


    const newState = { ...state };


    switch (action.type) {
        case "NAME_CHANGE":
            return Object.assign({}, newState, { userName: action.nameValue });

        case "PASS_CHANGE":
            return Object.assign({}, newState, { password: action.passValue });

        case "ON_LOGOUT":
            return Object.assign({}, newState, { userName: "", password: "" })

        case "AG_GRID_DATA":
            return Object.assign({}, newState, {
                headerData: action.payload[0].columnDefs,
                rowData: action.payload[0].rowData,
            })
        case "PI_CHART_DATA":
            return Object.assign({}, newState, { pichartData: action.payload,isLoading:false})

        case "BAR_CHART_DATA":
            return Object.assign({}, newState, { barchartData: action.payload })

        case "LINE_CHART_DATA":
            return Object.assign({}, newState, { linechartData: action.payload })

        case "RADAR_CHART_DATA":
            return Object.assign({}, newState, { radarchartData: action.payload })

        case "ACTION_FAIL":
            return Object.assign({}, newState, { errMessage: action.payload })
        
           
        default:
            return newState;
            

    }
    

}

export default reducer;