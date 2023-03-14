import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  color: ${(props) => props.theme["gray-700"]};
 // background-color: ${(props) => props.theme["gray-400"]};
 //background-color: #323238;
  
  width: 18%;
  height: 100%;
  //padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  `;

export const ContainerBox = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.3);//rgba(50, 50, 56, 0.6);
  margin-top: 90px;
  padding: 10px;
`;
export const BoxForm = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
//  margin: 10px;
 
  text-align: center;
  flex-direction: column;
  color: red;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const Title = styled.h2`
  display: flex;
  width: 100%;
  height: auto;
  font-size: 25px;
  justify-content: center;
  align-items: center;
  color: white;
`;
export const DivDiscord = styled.div`
  display: flex;
  width: 100%;
   height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  img {
   padding: 20px auto 0px auto;
    width: 82px;
    filter: brightness(0) invert(1);
  }
  p {
    color: white;
    font-size: 15px;
    margin: -5px auto 5px auto;
  }
  span {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20%;
  color: white;
  text-align: center;
  padding: 10px;
  }
  img {
  mask-image: url('../../../public/discordia.svg');
  mask-mode: luminance;
  mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-image: url('../../../public/discordia.svg');
  -webkit-mask-mode: luminance;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
}


`;
