import React,{Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../../redux/store'

import NavBar from '../NavBar'
import Badge from '../Badge'
import Layout from '../Layout'
import Ricky from '../RickyMorty'

//pages
import BadgeNew from '../../pages/BadgeNew'
import Badges from '../../pages/Badges'
import NotFound from '../../pages/NotFound'
import Home from '../../pages/Home'

class Page extends Component{

    

    render() {
        let BadgeProps = {
            firstName:'Daniel',
            lastName:'Rojas',
            email:'fabiorojas7@gmail.com',
            jobTitle:'Developer Frontend full stack JavaScript.',
            twitter:'hackchan77',
            hashtag:'hacker Usa'
        }
        return(
        <Provider store={store}>
          <BrowserRouter>
           <Layout>
             <Switch>
         <Route exact path="/" component={ Home }/>   
         <Route exact path="/ricky" component={ Ricky }/>   
         <Route exact path="/badges" component={() => <Badges />}/> 
         <Route exact path="/badges/new" component={() => <BadgeNew />}/> 
         <Route exact path="/navbar" component={() => <NavBar  />}/> 
         <Route component={NotFound}/>
            
             </Switch>
             </Layout>  
          </BrowserRouter>
       </Provider>
        )
    }
}

export default Page

