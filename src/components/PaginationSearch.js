import React from 'react'
import 'bootswatch/dist/flatly/bootstrap.css'
import 'materialize-css/dist/css/materialize.min.css'

const PaginationSearch = (props) => {

  const pageLinks = []

  for (let i = 1; i <= props.pages + 1; i++) {
    let active = props.currentPage === i ? 'active' : '';

    pageLinks.push(<li className={`waves-effect ${active}`} key={i}
      onClick={() => props.nextPage(i)}><a href="#">{i}></a></li>)
    console.log(i);

  }

  return (
    <div className="container">
      <div className="row">
        <ul className="pagination">
          {pageLinks}
        </ul>
      </div>
    </div>
  )

}

export default PaginationSearch