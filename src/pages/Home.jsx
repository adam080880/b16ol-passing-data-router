import React, {Component} from 'react'

import Navbar from '../components/Navbar'

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="bg-light" style={{height: "500px"}}>
          <div className="container d-flex h-100 flex-row align-items-center">
            <div className="control">
              <h1>Muhamad Adam</h1>
              <h5 className="text-secondary">Fullstack Developer</h5>
              <button className="btn btn-primary mt-3" onClick={e => this.props.history.push('/contact-me')}>Contact Me</button>
            </div>
          </div>
        </div>
        <div className="container px-0">
        </div>
      </>
    )
  }
}
