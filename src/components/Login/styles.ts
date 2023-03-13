import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  color: ${(props) => props.theme["gray-700"]};
 // background-color: ${(props) => props.theme["gray-400"]};
 //background-color: #323238;
 background-color: rgba(50, 50, 56, 0.4); 
  
  width: 20%;
  height: 100%;
  //padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  `;

export const ContainerBox = styled.div`
display: flex;
width: 100%;
height: 60vh;
justify-content: center;
text-align: center;
flex-direction: column;
background-color: yellow;
//box-sizing: border-box;

`
export const BoxForm = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  //margin: 10px;
  text-align: center;
  flex-direction: column;
  color: red;
  justify-content: center;
  align-items: center;
  gap: 12px;


`
export const Title = styled.h2`
  display: flex;
  width: 100%;
  height: auto;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  color: white;

`
