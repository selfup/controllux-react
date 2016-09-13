import React, {Component} from 'react'
import App from './App'

class Store extends Component {
  constructor(controllux) {
    super()
    this.state = controllux
  }

  render() {
    return (
      <div>
        <App />
      </div>
    )
  }
}

export default Store