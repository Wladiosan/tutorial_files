import React from 'react'
import classes from './App.module.css'
import CounterOne from './component/CounterOne/CounterOne'
import CounterTwo from './component/CounterTwo/CounterTwo'

class App extends React.Component {
    render() {
        return (
            <div className={classes.App}>
                <CounterOne/>
                <CounterTwo/>
            </div>
        )
    }
}

export default App
