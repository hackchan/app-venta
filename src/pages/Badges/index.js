import React, { Component,Fragment } from 'react'
import {Link} from 'react-router-dom'

import BadgesList from '../../components/BadgesList'
import PageLoading from '../../components/PageLoading'
import confLogo from '../../images/badge-header.svg'
import './style.css'
export default class Badges extends Component {

    constructor(props){
        console.log('1).COnstructor')
        super(props)

        this.state = {
            loading:true,
            error:null,
            data: undefined
        }
        
    }

     componentDidMount() {
         console.log('didmount 3')
        this.fetchData()
           
        
     }

     fetchData = () => {
        this.setState({ loading:true, error:null, data:undefined})
        
        try{
        this.timeId= setTimeout(() => {
              this.setState({loading:false, error:null,
                data: [
                    {
                        "id": "5bd7de32-0014-4789-b432-371e8e8c5a52",
                        "firstName": "Fabio",
                        "lastName": "Rojas",
                        "email": "fabiorojas7@gmail.com",
                        "jobTitle": "Senior Interactions Manager",
                        "twitter": "hackchan77",
                        "avatarUrl": "https://www.gravatar.com/avatar/3c43e0ab0cac3aa5380bcce387218165?d=identicon"
                    },
                    {
                        "id": "88b5680f-ce75-4565-8c65-68fc3d43f7c8",
                        "firstName": "Bridgette",
                        "lastName": "Hane",
                        "email": "Lurline.Macejkovic52@gmail.com",
                        "jobTitle": "National Paradigm Agent",
                        "twitter": "BridgetteHane71196-8309",
                        "avatarUrl": "https://www.gravatar.com/avatar/19a301936532cebc2349896aa1633d4f?d=identicon"
                    },
                    {
                        "id": "19f19352-f8e9-424e-832d-2e774616d865",
                        "firstName": "Natalia",
                        "lastName": "Marvin",
                        "email": "Eldridge40@yahoo.com",
                        "jobTitle": "Legacy Directives Associate",
                        "twitter": "NataliaMarvin85835-5701",
                        "avatarUrl": "https://www.gravatar.com/avatar/f73d75d4c505b5f3f7ff3c243a85065f?d=identicon"
                    }
                ]
              })
        
        },1000)
       
     }

     catch(err){
         console.log('ok')
     }

    }
     componentDidUpdate(prevProps, preState){
        console.log('5).componentDidUpdate')
        console.log({
            prevProps:prevProps,
            preState:preState
        })

        console.log({
            props:this.props,
            state:this.state
        })

     }

     componentWillUnmount(){
        console.log('6).componentWillUnmount')
        clearTimeout(this.timeId)
     }

    render() { 
        console.log('2/4 Render.')
        if(this.state.loading === true) {
            return (
             <PageLoading />)
        }
       
        return (
            <Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo}  alt="Conf Logo
                            "/>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge </Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList data={this.state.data}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}


