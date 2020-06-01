import React from 'react'

const Search = (props) => {

  return (
    <div className="container">
      <div className="row">
        <section className="col s4 offset-s4">
          <form action="" onSubmit={props.handleSubmit}>
            <div className="input-filed">
              <input type="text" placeholder="buscar por filmes" onChange={props.handleChange} />
            </div>
          </form>

        </section>
      </div>
    </div>
  )
}
