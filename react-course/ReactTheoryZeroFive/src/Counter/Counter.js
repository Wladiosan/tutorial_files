import React, {Component} from 'react'
import Auxiliary from "../hoc/Auxiliary";
import Counter2 from "../Counter2/Counter2";

export default class Counter extends Component {
    state = {
        counter: 0
    }

    addCounter = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    minCounter = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        })
    }

// Использование Псевдо-компонента (Auxiliary) вручную созданым для невидимой обертки элементов.
    render() {
        return (
            <Auxiliary>
                <h1 key='1'>Counter {this.state.counter}</h1>
                <Counter2 />
                <button key='2' onClick={this.addCounter}>+</button>
                <span> or </span>
                <button key='3' onClick={this.minCounter}>-</button>
            </Auxiliary>
        )
    }

// использование зарезервированого название реактом <React.Flagment />
    /* return (
         <React.Fragment>
             <h1 key='1'>Counter {this.state.counter}</h1>
             <button key='2' onClick={this.addCounter}>+</button>
             <button key='3' onClick={this.minCounter}>-</button>
         </React.Fragment>
     ) */


// Использование без блокового режима с помощью складывание элементов отрисовки JSX в масив
    /* return [
            <h1 key='1'>Counter {this.state.counter}</h1>,
            <button key='2' onClick={this.addCounter}>+</button>,
            <button key='3'onClick={this.minCounter}>-</button>
    ]
    */
}