import React from 'react'
import classes from './CounterTwo.module.css'
import {connect} from 'react-redux'
import {onChangeCounter2} from "../../redux/actions/actions";

const CounterTwo = props => {
    return (
        <div className={classes.CounterTwo}>
            <h1>Счетчик <strong>{props.counter}</strong></h1>
            <hr/>
            <div className={classes.Action}>
                <button onClick={() => props.onChangeCounterTwo(1)}>Добавить 1</button>
                <button onClick={() => props.onChangeCounterTwo(-1)}>Отнять 1</button>
                <button onClick={() => props.onChangeCounterTwo(10)}>Добавить 10</button>
                <button onClick={() => props.onChangeCounterTwo(-10)}>Отнять 10</button>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        counter: state.counter2.counter2
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeCounterTwo: number => dispatch(onChangeCounter2(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterTwo)
