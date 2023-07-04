const initialState = {
    tasks:[]
}

const LoginFormReducer = (state = initialState, action : any) => {
    switch(action.type){
        case 'ADD_LOGIN_DATA' :
            // eslint-disable-next-line no-case-declarations
            // const data = [...state.tasks];
            // // eslint-disable-next-line no-case-declarations
            // const value = [...data,action.payload]
            // console.log("data=>",data);
            // console.log("value=>",value);
            
            return{
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: action.payload.id,
                        ...action.payload.data
                    }
                ]
            }
        default:
            return state;
    }
}

export default LoginFormReducer
