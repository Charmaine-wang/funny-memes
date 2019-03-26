
import React, { Component } from 'react'
import Button from "../Button"
import Image from "../Image"
import TopText from "../TopText"
import BottomText from "../BottomText"
import "./Api.css"

class Api extends Component  {
    constructor(){
        super()
        this.state = {
          topText: "",
          bottomText: "",
          funMemes: [],
          
        }
        this.handleChange = this.handleChange.bind(this)
        
      }
    
      componentDidMount() {
          this.fetchAdvice() 
          
       

      }
            fetchAdvice = () => {
              fetch("https://api.imgflip.com/get_memes")
              .then(response => response.json())
              .then(data =>  {
                this.setState({
                  funMemes: data.data.memes[Math.floor(Math.random() * (data.data.memes.length) + 1)]
                  })
                   })
             }

       handleChange = (event)  => {
        const {name, value} = event.target
          this.setState({ 
            [name]: value
        
        })
    }
    

    render(){ 
  

        return (
            <div className="api-contaioner">
              <form className="meme-form" onSubmit={this.fetchAdvice} >
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /> 

                <Button>Get new image</Button> 
              </form>
                <Image imageURL={this.state.funMemes.url}/>

                <TopText topText={this.state.topText} />  
                <BottomText bottomText={this.state.bottomText}/>
           

            </div>
        )
}
}

export default Api

