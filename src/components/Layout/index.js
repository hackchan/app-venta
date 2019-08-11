import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
export default function layout(props) {
    const divStyle = {
        flex: 1,
        background:444
    }
    return (
        <div>
           <NavBar />
         
           {props.children}
           
           <Footer />
        </div>
    )
}
