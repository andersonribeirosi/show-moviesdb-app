import React from 'react'
// import { withRouter } from 'react-router-dom'

class Card extends React.Component {

  render() {
    return (
      <>
        <div className="card mb-3">
          <h3 className="card-header" id="title">{this.props.title}</h3>
          <div className="card-body">{this.props.children}</div>
        </div>
      </>
    )
  }
}

export default Card