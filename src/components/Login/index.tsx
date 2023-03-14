import React from "react";
import * as S from "./styles";
export const Login = () => {
  return (
     <S.Container >
   <S.ContainerBox>
   <S.Title>LOGIN</S.Title>
      <S.BoxForm>
        <label>Email</label>
        <input type="text" placeholder="email" />
        <label> PASSWORD</label>
        <input type="password" placeholder="Password" />
        <button type="submit">ENTER</button>
        
      </S.BoxForm>
   </S.ContainerBox>
    <S.DivDiscord>
      <img  src="../../../public/discordia.svg"  alt="DISCORD" className="discord-svg"/>
      <p>DISCORD SERVER</p>
      <span>TERMS OFUSE PRIVATE</span>
    </S.DivDiscord>
    </S.Container> 
  );
};
