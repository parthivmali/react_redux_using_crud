export const addLoginData = (data: any) => {
    return{
        type: 'ADD_LOGIN_DATA',
        payload: {
            id: new Date().getTime(),
            data: data,
        }
    }
}