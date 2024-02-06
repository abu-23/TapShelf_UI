import styled, { css } from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  padding: 1rem 1rem 1rem 1rem;
`;
export const MenuText = styled.div`
  color: black;
  cursor:pointer;
  ${((props) => (props.isActive ? css`font-size:18px; font-weight:500; color:blue` : ''))}
`;
