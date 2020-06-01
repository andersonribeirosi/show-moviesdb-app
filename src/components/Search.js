import React from 'react'
import Card from '../components/Card'

const Search = (props) => {

  return (
    <>
      <Card title="Consulta de Filmes">
        <div className="row">
          <div className="col-md-6">
            <div className="bs-component">
              <form action="" onSubmit={props.handleSubmit}>
                <div className="form-group">
                  <input
                    name="input"
                    className="form-control"
                    id="inputMovie"
                    type="text"
                    placeholder="buscar por filmes"
                    onChange={props.handleChange}
                  />
                  <button className="btn btn-success" onSubmit={props.handleSubmit}>Pesquisar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Card>
    </>
  )
}

export default Search
