import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <header className="fixed top-0 left-0 w-full z-100 flex items-center justify-between bg-transparent p-5 text-navbar-font-color">
                <a className="text-2xl font-bold ">Rahul.</a>
                <nav className="flex">
                    <a href="#" className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-navbar-font-hover">Home</a>
                    <a href="#" className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-navbar-font-hover">About</a>
                    <a href="#" className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-navbar-font-hover">Service</a>
                    <a href="#" className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-navbar-font-hover">Portfolio</a>
                    <a href="#" className="text-lg font-medium       transition-colors duration-300 hover:text-navbar-font-hover">Contact</a>
                </nav>
            </header>
        )
    }
}

export default Navbar