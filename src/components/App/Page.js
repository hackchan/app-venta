import React,{Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../../redux/store'

import NavBar from '../NavBar'

class Page extends Component{

    render() {
        return(
        <Provider store={store}>
          <BrowserRouter>
             <Switch>
              <Route exact path="/" component={NavBar}/> 
             </Switch>
          </BrowserRouter>
       </Provider>
        )
    }
}

export default Page

