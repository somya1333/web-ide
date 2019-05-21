import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from  'prop-types'
import {connect} from 'react-redux'


class Navbar extends Component {


  render() {



    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark  mb-4" style={{backgroundColor:"black"}}>
    <div className="container mb-2 mt-1">
      <Link className="navbar-brand" to="/"><b>IOSD IDE</b></Link>
      <button value="toggle" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/php"> PHP
            </Link>
          </li>
          <li>
          <Link className="nav-link" to="/python"> PYTHON
          </Link>
          </li>
     
        </ul>

      </div>
    </div>
  </nav>

      </div>
    )
  }
}


export default connect(null,{})(Navbar);