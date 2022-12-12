export let initialState = {
    search: {
        isShow: false,
        value: ""
    },
    category : {
        isShow: false,
        value: "all"
    },
    price: {
        isShow: false,
        value: 0
    },
    main: {
        isShow: false
    }
}


export const filterReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_VALUE" :
            console.log(state)
            return {
                ...state,
                [action.payload.name]: {
                    ...state[action.payload.name],
                    value: action.payload.value
                }
                
            }
        case "CHANGE_SHOW" :
            
            return {
                ...state,
                [action.payload] : {
                    ...state[action.payload],
                    isShow: !state[action.payload].isShow
                }
            }    
        }
}