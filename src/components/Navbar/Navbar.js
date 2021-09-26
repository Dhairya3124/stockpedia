import React, { Component } from 'react';
import {MenuItems} from './MenuItems'
import {Button} from '../Button'
import './Navbar.css'
class Navbar extends Component {
    state = {clicked: false}
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked }) 
    }
    render() {
        return (
            <nav class = "NavbarItems">
                <h1 className = "stockpedia-logo">Stockpedia<i class="fas fa-chart-line"></i></h1>
                <div className = "menu-icon" onClick = {this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' :'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {
                        MenuItems.map((item,index) => 
                        {
                            return (
                            <li key = {index}>
                                <a href={item.url} className = {item.cName}>
                                    {item.title}</a></li>
                                    )})
                    }


                </ul>
                <Button>Sign Up</Button>
             </nav>
        )
    }
}
export default Navbar
