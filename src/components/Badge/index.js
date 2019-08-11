import React, {Component,Fragment} from 'react'
import confLogo from '../../images/badge-header.svg'
import './style.css'
import md5 from 'md5'
class Badge extends Component {
   
    constructor(props){
        super(props)
    }

    render() {
        const datos = this.props.data
        return(
            <Fragment>
                <div className="Badge">
                    <div className="Badge_header">
                        <img src={confLogo} alt="Logo de la conferencia"/>
                    </div>

                    <div className="Badge_section-name">
                        <img className="Badge_avatar" src={`https://s.gravatar.com/avatar/${md5(datos.email)}?s=80`} alt="Avatar" />
                        <h1>{datos.firstName} <br/>{datos.lastName}</h1>
                    
                    </div>

                    <div className="Badge_section-info">
                        <h3>{datos.jobtitle}</h3>
                        <span>@{datos.twitter}</span>
                    </div>

                    <div className="Badge_footer">
                        {'#hackers colombia'}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Badge