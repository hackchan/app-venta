import React, { Component } from 'react'
import twitter  from '../../images/twitter.svg'
import Gravatar from '../Gravatar'
import './style.css'
export default class index extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <ul className="list-unstyled">
             {this.props.data.map((badge)=>{
                 return (
                      <li key={badge.id}>
                          <div className="BadgesListItem ">
                            <div >
                              <Gravatar className="BadgesListItem__avatar" email={badge.email}/>
                            </div>
                            <div>
                              <p className="Username">{badge.firstName} {badge.LastName}</p>
                              <img src={twitter} alt="Twitter" /><span className="Twitter">@{badge.twitter}</span>
                              <p className="Job">{badge.jobTitle}</p>
                            </div>
                          </div>
                          
                      </li>
                        )
                })}
            </ul>
        )
    }
}

