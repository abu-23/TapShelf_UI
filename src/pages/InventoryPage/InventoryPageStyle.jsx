import styled, { css } from "styled-components";

export const MainDiv = styled.div``;

export const OverallInventoryDiv = styled.div`
  background: white;
  margin: 1rem;
  border-radius: 10px;
  padding: 0.5rem;
  z-index: 0;
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
  margin: 0.8rem 0rem;
  color: ${(props) =>
    props.section === "Top Selling"
      ? "violet"
      : props.section === "Categories"
      ? "blue"
      : props.section === "Total Products"
      ? "orange"
      : "red"};
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
export const Description = styled(Date)``;
export const SectionDiv = styled.div`
  margin: 0.8rem 0rem;
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
export const HorizontalLine = styled.hr`
  opacity:0.3;
`;
export const Sections = styled.div`
    color:grey;
    font-weight:500;
    padding:0.3rem 0rem;
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
