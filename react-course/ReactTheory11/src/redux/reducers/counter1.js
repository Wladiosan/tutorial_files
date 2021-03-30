import {onChangeCounterOne} from '../actions/actionTypes'

const initialState = {
    counter1: 0
}

export default function counter1(state = initialState, action) {
    switch (action.type) {
        case onChangeCounterOne :
            return {
                counter1: state.counter1 + action.payload
            }
        default: return state
    }
}