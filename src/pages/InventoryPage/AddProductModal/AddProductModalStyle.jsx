import styled, { keyframes } from "styled-components";

export const SlideInAnimation = keyframes`
0% {
  -webkit-transform: translateY(50%);
}
100% {
  -webkit-transform: translateY(0%);
}
::-webkit-keyframes slide-in {
  0% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0%);
  }
}
`;
export const Container = styled.div`
  width: 30vw;
  height: 89vh;
  background: white;
  position: absolute;
  top: 5%;
  right: 30%;
  opacity: 1;
  padding: 1rem 1.6rem;
  border-radius: 7px;
  animation-name: ${SlideInAnimation};
  animation-duration: 0.4s;
  z-index: 5;
`;

export const StyledModal = styled.div`
  position: fixed;
  border-radius: 7px;
  width: 100%;
  height: 100%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  top: 0%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  jusity-content: center;
  z-index: 1;
`;

export const DiscardButton = styled.div`
  border-radius: 10px;
  padding: 0.7rem 1.2rem;
  cursor: pointer;
`;

export const AddProduct = styled.div`
  border-radius: 10px;
  background-color: #2a69b6;
  color: white;
  padding: 0.7rem 1.4rem;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  text-align: left;
`;
export const ImageInput = styled.div`
display:flex;
`;
export const ButtonImage = styled.button`
color:blue;
background:none;
border:none;
cursor:pointer;
`;

export const SelectImageDiv = styled.div`
margin:2rem 0rem;
text-align:center;
color:grey;
`;
export const InputDiv = styled.input`
  padding: 1rem 0rem;
  border-radius: 7px;
  height: 10%;
  width: 80%;
  border: solid 0.2px grey;
`;
export const ProductSpec = styled.div`
  padding: 1rem 0rem;
  margin: 0rem;
  text-align: left;
`;

export const ImageDiv = styled.div`
margin:1rem 2rem;
margin-left:6rem;
border-radius:7px;
padding:1rem;
height:10vh;
width:5vw;
border:2px dashed grey;
`;

export const ImageSelected = styled.img`
  height:20vh;
  width:15vh;
  margin-left:8rem;
`;
