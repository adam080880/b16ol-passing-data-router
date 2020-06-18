import React, {Component} from 'react'

export default class Detail extends Component {
  constructor(props) {
    super(props)

    if (!this.props.location.state) {
      this.state = { id: '', title: '', description: '' }
      this.props.history.push('/project')
    } else {
      const {id, title, description} = this.props.location.state
      this.state = { id, title, description }
    }

  }
  render() {
    return (
      <>
        <h6>#{this.state.id}</h6>
        <h1>{this.state.title}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus architecto modi aliquam nisi totam nostrum, iure incidunt neque. Voluptatem dolor voluptatum et, error eligendi recusandae magni soluta aperiam aliquid!</p>
      </>
    )
  }
}
