import React, {Component} from 'react'
import classes from './Layout.module.css'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import Drawer from "../../components/Navigation/Drawer/Drawer";

class Layout extends Component {

    state = {
        menu: false /* стейт положение меню */
    }

    // Переключатель меню : открыто / закрыто
    toggleMenuHandler = () => {
        this.setState({menu: !this.state.menu})
    }

    // Закрытие меню при нажатии на затимненное поле
    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        return (
            <div className={classes.Layout}>

                {/*Иконка меню*/}
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />

                {/*Контент меню*/}
                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.menuCloseHandler}
                />

                {/*Контент страницы*/}
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout