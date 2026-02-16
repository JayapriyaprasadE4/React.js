export const initialState = {
    role: "",
    isLoggedIn : false,
    loading: false,
}

export function reducer(state,action){
    switch(action.type){
        case "SELECT ROLE":
            return{
                
              
                role:action.payload,
                isLoggedIn:state.isLoggedIn,
                loading: state.loading
            }

            case "LOGIN START":

            return{
                 role:state.role,
                isLoggedIn:false,
                loading: true

             

            }

            case "LOGIN SUCCESS":
                return{
                    role:state.role,
                    loading:false,
                    isLoggedIn:true
                }

            case "LOGOUT":
                return{
                   role:"",
                    isLoggedIn:false,
                    loading:false
                }
            case "RESTORE":
                return{
                    role:action.payload,
                    // role:action.payload,
                    isLoggedIn:true,
                    loading:false
                }

            default:
                return state
    }
}