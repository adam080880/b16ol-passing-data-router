import React, {Component} from 'react'

import qs from 'querystring'

import Navbar from '../components/Navbar'
import CardProject from '../components/CardProject'

export default class Project extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({data: this.fetching('example_url').get().data})
  }

  fetching = () => ({
    get: (url) => ({
      status: true,
      data: [
        {
          id: 1,
          title: "Lorem Ipsum",
          description: "Lorem ipsum dolor sit..."
        },
        {
          id: 2,
          title: "Lorem Ipsum",
          description: "Lorem ipsum dolor sit..."
        },
        {
          id: 3,
          title: "Lorem Ipsum",
          description: "Lorem ipsum dolor sit..."
        },
      ]
    })
  })

  renderProject = (val, index) => (
    <div key={index} className="col-md-4">
      <CardProject title={val.title} description={val.description} clickHandler={e => this.props.history.push(`/detail-project?${qs.stringify({id: val.id})}`, {id: val.id, title: val.title, description: val.description})} />
    </div>
  )

  render() {
    return (
      <>
        <Navbar/>
        <div className="container mt-4 px-lg-2 px-0">
          <div className="row">
            {this.state.data.map(this.renderProject)}
          </div>
        </div>
      </>
    )
  }
}