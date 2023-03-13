import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding:0;
    box-sizing: border-box;


 }
 body {
   //background-color: ${(props) => props.theme["gray-500"]};
   background-image: url("../../public/zombie (sem logo).jpg");
   background-size: cover;

   height: 100vh;
   background-position: center top;
   background-repeat: no-repeat;
   color: ${(props) => props.theme["gray-100"]};
   -webkit-fontsmoothing: antialiased;
   font-family: "Roboto", sans-serif;
   justify-content: space-between;
   margin: auto;
   @media only screen and (max-width: 360px) {
  body {
    background-size: 30%;
  }
}

}


`;

