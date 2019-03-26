import styled from 'styled-components'

const Button = styled.button `
  background: transparent;
  width: 150px;
  height: 50px;
  border-radius: 3px;
  border: 2px solid black;
  
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
  box-shadow: 5px 5px 0px;
  transition: 0.3s;
    &:hover {
        transition: 0.3s;
           box-shadow: 1px 1px 0px;
    }    
`
export default Button
