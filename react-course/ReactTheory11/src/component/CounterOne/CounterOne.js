import React from 'react'
import classes from './CounterOne.module.css'
import {connect} from 'react-redux'
import {onChangeCounter1, asyncAdd} from "../../redux/actions/actions";

const CounterOne = props => {
    return (
        <div className={classes.CounterOne}>
            <h1>Счетчик <strong>{props.counter}</strong></h1>
            <hr/>
            <div className={classes.Action}>
                <button onClick={() => props.onChangeCounterOne(1)}>Добавить 1</button>
                <button onClick={() => props.onChangeCounterOne(-1)}>Отнять 1</button>
                <button onClick={() => props.onChangeCounterOne(10)}>Добавить 10</button>
                <button onClick={() => props.onChangeCounterOne(-10)}>Отнять 10</button>
                <button onClick={() => props.onAsyncAdd(100)}>Асинхрон +100</button>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        counter: state.counter1.counter1
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeCounterOne: number => dispatch(onChangeCounter1(number)),
        onAsyncAdd: number => dispatch(asyncAdd(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterOne)
