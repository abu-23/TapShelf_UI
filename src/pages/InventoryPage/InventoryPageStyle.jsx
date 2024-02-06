import styled, { css, keyframes } from "styled-components";

export const MainDiv = styled.div``;

export const OverallInventoryDiv = styled.div`
  background: white;
  margin: 1rem;
  border-radius: 10px;
  padding: 0.5rem;
  z-index: 0;
`;
export const ProductsEditDiv = styled.div`
  background: red;
  text-align: right;
`;
export const ProductDetails = styled.div`
  display: flex;
`;
export const AddProduct = styled.div`
  text-align: center;

  border-radius: 10px;
  background-color: #2a69b6;
  color: white;
  padding: 0.7rem 1.2rem;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  height: 40%;
  width: 50%;
  cursor: pointer;
`;

export const Filters = styled.div`
  margin: 0rem 0.5rem;
  border-radius: 10px;
  border: 0.05rem solid gray;
  padding: 0.7rem 1.2rem;
  text-align: center;
`;
export const Download = styled.div`
  margin: 0rem 0.5rem;
  text-align: center;

  border-radius: 10px;
  border: 0.05rem solid gray;
  padding: 0.7rem 1.2rem;
`;
export const TitleDiv = styled.div`
  font-size: 22px;
  margin: 1rem 0.5rem;
`;
export const SubInventoryDiv = styled.div`
  border-right: 0.05rem solid #c0c3c6;
  margin: 1rem;
`;
export const SectionName = styled.div`
  color: #1f70d4;
  font-size: 17px;
  font-weight: 600;
`;
export const Count = styled.div`
  color: #595b5e;
  font-size: 16px;
  font-weight: 600;
`;
export const Date = styled.div`
  color: #a4a7aa;
  font-size: 16px;
  font-weight: 400;
`;
export const ProductsDiv = styled.div`
  background: white;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 1rem;
`;
export const ProductsList = styled.div`
  margin: 1rem;
`;
export const Products = styled.div`
  font-size: 22px;
  text-align: left;
`;
export const HeadDiv = styled.div`
  dsiplay: flex;
  margin: 1rem 0.5rem;
`;

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
  height: 70vh;
  background: white;
  position: absolute;
  top: 12%;
  right: 30%;
  opacity: 1;
  padding: 0 1.6rem;
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
  opacity: 0.8;
  background-color: #e3e4e5;
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

export const Span = styled.span`
  font-weight: 700;
  color: ${(props) =>
    props.availablity === "Out of stock"
      ? css`red`
      : props.availablity === "In stock"
      ? "green"
      : "orange"};
`;
