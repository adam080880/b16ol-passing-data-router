import React, {Component} from 'react'

import {
  Link
} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand navbar-dark bg-dark shadow-sm">
        <div className="container">
          <Link to="/" className="navbar-brand">Hello</Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/project">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-me">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
