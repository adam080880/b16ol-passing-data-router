import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Image from '../s.jpg'

export default class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      phone: '',
      gender: '',
      address: ''
    }
  }

  render() {
    const {name, phone, gender, address} = this.state
    return (
      <div className="bg-light min-vh-100 mb-0 d-flex flex-row align-items-center justify-content-center">
        <div className="card rounded my-5 border-0 shadow-sm bg-white" style={{width: "1000px"}}>
          <div className="card-body p-0">
            <div className="row">
              <div className="col-sm-4 text-white d-flex justify-content-center py-5 flex-column" style={{backgroundImage: `url(${Image})`, backgroundSize: 'cover'}}>
                <h1 className="font-weight-bold">Coding Everytime</h1>
                <h5 style={{opacity: 0.6}}>Coding Community</h5>
              </div>
              <div className="col-sm px-4 pr-5 py-5">
                <form action="" method="post">
                  <div className="d-flex align-items-center flex-row justify-content-between mb-4">
                    <h3 className="font-weight-bold mb-0">Register</h3>
                    <Link to="/login">Login</Link>
                  </div>
                  <div className="form-group">
                    <label className="label-control">Name</label>
                    <input type="text" placeholder="Ex: Muhamad Adam" onChange={e => this.setState({ name: e.target.value })} className="form-control"/>
                  </div>
                  <div className="form-group">
                    <label className="label-control">Phone</label>
                    <input type="text" placeholder="Ex: +628xxxxxx" onChange={e => this.setState({ phone: e.target.value })} className="form-control"/>
                  </div>
                  <div className="form-group">
                    <label className="label-control">Gender</label>
                    <div className="form-control">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" onChange={e => this.setState({gender: e.target.value})} value="m" id="m" name="gender"/>
                        <label className="form-check-label" htmlFor="m">Man</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" onChange={e => this.setState({gender: e.target.value})}  value="w" id="w" name="gender"/>
                        <label className="form-check-label" htmlFor="w">Woman</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label-control">Address</label>
                    <textarea className="form-control" placeholder="Ex: perum arkademy no 3" onChange={e => this.setState({ address: e.target.value })} cols="30" rows="2"></textarea>
                  </div>
                  <button onClick={e => this.props.history.push('/profile', {name, address, gender, phone})} className="btn btn-outline-primary">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
