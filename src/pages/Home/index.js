import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import astronautas from '../../images/astronauts.svg'
import logo from '../../images/platziconf-logo.svg'
import './style.css'

class Home extends Component {

    render() {
        return(
            <Fragment>
            <div className="BadgeNew__hero_home">
                <div className="BadgeTitulo">
                  <div>
                    <img className="img-fluid " src={logo} alt="logo" />
                  </div>
                  <div className="message">
                    
                    <p>Badge</p>
                    <p>Management</p>
                    <p>System</p>
                  
                  </div>
                  <div >
                      <Link  to="/badges/new" className="btn btn-primary">
                          Start
                      </Link>

                 </div>
                </div>
                
                <div>
                  <img className="img-fluid astro" src={astronautas} alt="logo" />
                </div>
            </div>
            </Fragment>
        )
    }

}

export default Home