import React,{Component, Fragment} from 'react'
import Badge from '../../components/Badge'
import BadgeForm from '../../components/BadgeForm'
import './style.css'
import logo from '../../images/badge-header.svg'
class BadgeNew extends Component {


    constructor(props){
        super(props)
        this.state = {
            
            form:{
                firstName:'',
                lastName:'',
                email:'',
                jobtitle:'',
                twitter:''
            }
        }
    }

    handleChange =(event)=>{
        this.setState({
            form:{
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }
    

    render() {

    
          return(
              <Fragment>
           
              <div className="BadgeNew__hero">
               <img className="img-fluid" src={logo} alt="logo"/>
              </div>

              <div className="container">
                  <div className="row">
                      <div className="col-6">
                        <Badge data={this.state.form} />
                      </div>

                      <div className="col-5">
                         <BadgeForm  onChange={this.handleChange} formValues={this.state.form}/>
                      </div>
                  </div>

              </div>

              </Fragment>

          )
    }
    
}


export default BadgeNew