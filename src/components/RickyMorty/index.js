import React, { Component,Fragment } from 'react'
import './style.css'
import logo from '../../images/rickandmorty.png'

function CharacterCard(props) {
    const { character } = props;
  
    return (
      <div className="CharacterCard" style={{ backgroundImage: `url(${character.image})` }}>
        <div className="CharacterCard__name-container text-truncate">
          {character.name}
        </div>
      </div>
    );
  }


class RickyMorty extends Component {

   constructor(props){
       super(props)

       this.state = {
        loading: true,
        error: null,
        data: {
          info: {},
          results: []
        },
        nextPage: 1
       }
   }

   componentDidMount(){
       this.fetchCharacters()
   }

   fetchCharacters = async() => {
       this.setState({loading:true, error:null})
       try{
       const response = await fetch('https://rickandmortyapi.com/api/character/')
       const data = await response.json()
       console.log(data)
       this.setState({
           loading:false,
           data:data
       })
      }
      catch(error){
        this.setState({
            loading:false,
            error:error
        })
      }

   }



    render() {
        return (
           <Fragment>
              <div className="rick"> 
                 <div className="rickContainer">
                   <div className="rickLayout">
                   <img className="rickLogo" src={logo} alt='logo' />
                   <ul className="rickRow">
                     {

                         this.state.data.results.map((character)=>{
                           return(
                            <li key={character.id}>
                          <div className="CharacterCard" style={{ backgroundImage: `url(${character.image})` }}>
                          <div className="CharacterCard__name-container text-truncate">
          {character.name}
        </div>
                          </div>
                          </li>
                         )
                         })
                    
                    
                     }
                     
                   </ul>
                   </div>
                 
                </div> 
                
              </div>
             


           </Fragment>
        )
    }
}

/**
 * 
 *  <div className="rick">
                <div className="rickContainer">
                    <div className="rickLayout">
                <img className="rickLogo" src={logo} alt='logo' />
                <ul className="rickRow">
                      {this.state.data.results.map(character => (
                         <li className="col-6 col-md-3" key={character.id}>
                          <CharacterCard character={character} />
                          </li>
                        ))
                      }

                       

                       
                      
        
          </ul>

          <button className="rickButton">more characters </button>

                 </div>
                </div>
            </div>
 */

export default RickyMorty
