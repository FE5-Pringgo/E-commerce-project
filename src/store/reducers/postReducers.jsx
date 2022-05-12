const initialState = []

export const postReducers = (state = initialState, action ) =>{
    // if (action.type = 'SET_POST') {
    //     return action?.payload ?? state;
    // }

    // return state;

    const {type} = action
    switch (type) {
        case 'SET_POST':
            return action.payload
        default:
            return state
    }

}

export default postReducers;