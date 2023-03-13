import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  color: ${(props) => props.theme["gray-700"]};
 // background-color: ${(props) => props.theme["gray-400"]};
 //background-color: blue;
  
  width: 100%;
  height: 100vh;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
 
`;

export const ConatinerBox = styled.div`
  display: flex;
  width: 800px;
  height: 450px;
  margin-left: 8%;
  color: white;
  //justify-content: center;
  //align-items: center;
  background:
    linear-gradient(to right, #E1E1E6 3px, transparent 3px) 0 0,
    linear-gradient(to right, #E1E1E6 3px, transparent 3px) 0 100%,
    linear-gradient(to left, #E1E1E6 3px, transparent 3px) 100% 0,
    linear-gradient(to left, #E1E1E6 3px, transparent 3px) 100% 100%,
    linear-gradient(to bottom, #E1E1E6 3px, transparent 3px) 0 0,
    linear-gradient(to bottom, #E1E1E6 3px, transparent 3px) 100% 0,
    linear-gradient(to top, #E1E1E6 3px, transparent 3px) 0 100%,
    linear-gradient(to top, #E1E1E6 3px, transparent 3px) 100% 100%;

  background-repeat: no-repeat;
  background-size: 30px 30px;

  padding: 10px 30px;

`
export const Box = styled.div`
display: flex;
width: 100%;
height: 100%;
padding: 5px auto;
margin: 10px;
background-color: rgba(50, 50, 56, 0.6); 
  
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
h2,h3,h4{
  display: flex;
  width: 100%;
  //margin: auto;
  justify-content:center ;
 align-items: center;
 margin: 5px;
 
}

ul>li{
 display: flex;
 width: 100%;
 justify-content: center;
 align-items: center;
 
}

`
