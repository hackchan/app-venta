import React, { Component, Fragment } from 'react'

export default class index extends Component {

    constructor(props) {
       super(props)
      
    }
/*
    handleChange = (event) => {
          console.log({
              name: event.target.name,
              value: event.target.value
          })

          this.setState({
               [event.target.name]: event.target.value
          })
    }
*/

    handleClick = (event) => {
        //event.preventDefault()
        console.log('the button wes press on')
        console.log(this.props.formValues)
       
    }

    render() {
        return (
            <Fragment>
            <div>
                <h1>Nuevo Producto</h1>
                <form> 
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" id="firstName" value={this.props.formValues.firstName}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" id="lastName" value={this.props.formValues.lastName}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" id="email" value={this.props.formValues.email}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="jobtitle">jobtitle</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobtitle" id="jobtitle" value={this.props.formValues.jobtitle} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="twitter">twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" id="twitter" value={this.props.formValues.twitter}/>
                    </div>

                    <button type="button" onClick={this.handleClick} className="btn btn-primary">Save </button>

                </form>
            </div>
            </Fragment>
        )
    }
}
