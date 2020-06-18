import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Image from '../s.jpg'

export default class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      phone: '',
      gender: '',
      address: '',
      loading: true
    }

    if (!this.props.location.state) {
      this.props.history.push('/register')
    } else {
      const {name, phone, address, gender} = this.props.location.state

      if (name === '' || phone === '' || address === '' || gender === '') {
        this.props.history.push('/register')
      }

      this.state = { ...this.state, name, phone, address, gender }
    }

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false})
    }, 2000)
  }

  render() {
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
                {this.state.loading && (
                  <div className="d-flex h-100 justify-content-center align-items-center">
                    <div className="spinner-border text-primary">
                      <span className="sr-only">Loading...</span>
                    </div>
                    <span className="ml-3 text-secondary">Loading</span>
                  </div>
                )}
                {!this.state.loading && (<form action="" method="post">
                  <div className="d-flex align-items-center flex-row justify-content-between mb-4">
                    <h3 className="font-weight-bold mb-0">Profile</h3>
                    <Link to="/login">Login</Link>
                  </div>
                  <div className="form-group">
                    <label className="label-control">Name</label>
                    <input type="text" placeholder="Ex: Muhamad Adam" value={this.state.name} className="form-control"/>
                  </div>
                  <div className="form-group">
                    <label className="label-control">Phone</label>
                    <input type="text" placeholder="Ex: +628xxxxxx" value={this.state.phone}  className="form-control"/>
                  </div>
                  <div className="form-group">
                    <label className="label-control">Gender</label>
                    <div className="form-control">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" checked={this.state.gender === 'm'} value="m" id="m" name="gender"/>
                        <label className="form-check-label" htmlFor="m">Man</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" checked={this.state.gender === 'w'}  value="w" id="w" name="gender"/>
                        <label className="form-check-label" htmlFor="w">Woman</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label-control">Address</label>
                    <textarea className="form-control" placeholder="Ex: perum arkademy no 3" value={this.state.address} cols="30" rows="2"></textarea>
                  </div>
                  <button onClick={e => this.props.history.push('/register')} className="btn btn-outline-primary">Re-register</button>
                </form>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
