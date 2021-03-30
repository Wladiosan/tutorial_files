import {onChangeCounterOne, onChangeCounterTwo} from './actionTypes'

export function onChangeCounter1(number) {
    return {
        type: onChangeCounterOne,
        payload: number
    }
}

export function onChangeCounter2(number) {
    return {
        type: onChangeCounterTwo,
        payload: number
    }
}

export function asyncAdd(number) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(onChangeCounter1(number))
        },3000)
    }
}