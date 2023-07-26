import { createGlobalStyle } from 'styled-components'



const GlobalStyles=createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
 body{
background-color:${props=>props.theme.colors.VeryLightGray};
display:flex;
align-items:center;
justify-content:center;
margin-top: 16px;
margin-bottom: 32px;
 }
 `

export default GlobalStyles