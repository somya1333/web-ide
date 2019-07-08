import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './Navbar.css';
import iosd from "./img/iosd.PNG";

class Navbar extends Component {

// state = {
//   lang:'Language'
// };

//  changeLanguageHandeler = (props) => {
//     this.setState({lang:props});
//   }

  render() {
    let lang = 'Language';
    const Python = 'PYTHON';
    const Php = 'PHP';
    return (
      <div>
        <nav class="container"
        >
          <div className="navbar  navbar-expand-lg navbar-light bg-white" shadow>
          <img src={iosd} height="50px" />
          <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Contacts</a>
          <button 
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
               <li class="nav-item active dropdown ml-3 mr-3">
                 <a
                   class="nav-link dropdown-toggle"
                   href="#"
                   id="navbarDropdown"
                   role="button"
                   data-toggle="dropdown"
                   aria-haspopup="true"
                   aria-expanded="false"
                 >
                   Language
                   {console.log(lang)}
                 </a>
                 <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                   <Link className="dropdown-item" to="/python">
                    {" "}
                    <div>{lang = Python}</div> 
                   {console.log(lang)}
                   </Link>
                   <Link className="dropdown-item" to="/php" >
                     {" "}
                     <div>{lang = Php}</div>
                     {console.log(lang)}
                   </Link>
                 </div>
               </li>
            </ul>
           </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(Navbar);
