

import { createStore } from 'redux'

let initialState = {
    sum :0
}

function reducer(state=initialState, action){
    switch(action.type){
        case "Inc": 
            return{sum: state.sum+1}
            
        case "Dec":
            return{ sum:state.sum-1}

        default:
            return state
    }
}

let store = createStore(reducer)

console.log(store.getState())

export default store



let plusFiveInitialState = {
  value:0
}

function plusFiveReducer(state= plusFiveInitialState, action){
  switch(action.type){
    case "inc5":
    return {value : state.value +5}

    case "dec5":
      return {value: state.value-5}

      default:
        return state
  }
}