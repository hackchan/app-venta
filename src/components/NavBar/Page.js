import React,{Component,Fragment} from 'react'
import logo from '../../images/logo.svg'
import './style.css'

class Page extends Component {

    render() {

        return (
            <Fragment>
              <div className='Navbar'>
                  <div className="container-fluid">
                  <a className="Navbar__brand" href="/">
                      <img className="Navbar__brand-logo" src={logo} alt="logo"/>
                      <span className="font-weight-light">Fanel</span>
                      <span className="font-weight-bold"> Soft</span>
                  </a>
                  </div>

              </div>
            </Fragment>
        )
    }
}

export default Page