import React from 'react'
// import { withRouter } from 'react-router-dom'

class Card extends React.Component {

  // btnBackNavigation = () => {
  //   this.props.history.push('/home')
  // }

  render() {
    return (
      <>
        <div className="card mb-3">
          <h3 className="card-header" id="title">{this.props.title}</h3>
          <div className="card-body">{this.props.children}</div>
          {/* <button className="btn btn-info btn-back" onClick={this.btnBackNavigation}>Voltar</button> */}
        </div>
      </>
    )
  }
}

export default Card