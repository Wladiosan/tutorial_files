import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Drawer.module.css'
import Backdrop from "../../UI/Backdrop/Backdrop";

// Масив элементов списка меню
const links = [
    {to: '/', label: 'Список', exact: true},
    {to: '/auth', label: 'Авторизация', exact: false},
    {to: '/quiz-creator', label: 'Создать тест', exact: false}
]

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose()
    }


    // Метод создание элементов списка меню
    renderLinks() {
        return (
            links.map((link, index) => (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exect={link.exact.toString()}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            ))
        )
    }

    render() {

        // Масив стилей
        const cls = [classes.Drawer]

        // Добавление стиля : анимация закрывание меню
        if (!this.props.isOpen) cls.push(classes.close)

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {/*Отображение всего списка элементов меню*/}
                        {this.renderLinks()}
                    </ul>
                </nav>
                {/*Отображение затемненного окна при открытом меню*/}
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </React.Fragment>
        )
    }
}

export default Drawer