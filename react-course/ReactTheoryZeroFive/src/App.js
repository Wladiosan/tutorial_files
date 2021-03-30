import React, {Component} from "react";
import './App.css';
import Car from "./Car/Car";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

export const ClickedContext = React.createContext(false)

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cars: [
                {name: 'Ford', year: 2018},
                {name: 'Audi', year: 2016},
                {name: 'Mazda', year: 2010}
            ],
            pageTitle: 'React components',
            showCars: false,
            clicked: false
        }
    }

    toggleCarsHandler = () => {
        this.setState({showCars: !this.state.showCars})
    }

    handlerInput = (event) => {
        this.setState({pageTitle: event.target.value})
    }

    onChangeName = (name, index) => {
        const car = this.state.cars[index]
        car.name = name
        const cars = [...this.state.cars]
        this.setState({cars})
    }

    onDelete = (index) => {
        // Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван принимая аргументы
        const cars = this.state.cars.concat()
        cars.splice(index, 1)
        this.setState({cars})
    }

    render() {
        console.log('App run Render')
        const divStyle = {
            textAlign: 'center'
        }
        let cars = null
        if (this.state.showCars) {

            cars = this.state.cars.map((car, index) => {
                return (
                    <ErrorBoundary
                        key={index}
                    >
                        <Car
                            index={index}
                            name={car.name}
                            year={car.year}
                            onChangeName={(event) => {
                                this.onChangeName(event.target.value, index)
                            }}
                            onDelete={() => {
                                this.onDelete(index)
                            }}
                        />
                    </ErrorBoundary>
                )
            })
        }

        return (
            <div className="App" style={divStyle}>
                <h1>{this.state.pageTitle}</h1>

                <ClickedContext.Provider value={this.state.clicked}>
                    <Counter />
                </ClickedContext.Provider>
                <hr/>

                <button className={'btnToggle'} onClick={() => {
                    this.toggleCarsHandler()
                }}>Toggle cars
                </button>
                <hr/>
                <button className={'btnToggle'} onClick={() => {
                    if (this.state.clicked === !true) {
                        this.setState({clicked: true})
                    } else this.setState({clicked: false})
                }}>Change click
                </button>
                <hr/>
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    paddingTop: '20px'
                }}>
                    {cars}
                </div>
            </div>
        )
    }
}