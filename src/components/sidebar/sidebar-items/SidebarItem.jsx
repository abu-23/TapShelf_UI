import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import propTypes from "prop-types";
import { ItemWrapper, MenuText } from "./SidebarItem.style";

function SidebarItem({ text, navigateTo }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === navigateTo;
  const handleClick = (link) => {
    navigate(link);
  };
  return (
    <ItemWrapper onClick={() => handleClick(navigateTo)}>
      <MenuText isActive={isActive}>{text}</MenuText>
    </ItemWrapper>
  );
}

SidebarItem.propTypes = {
  text: propTypes?.string,
  navigateTo: propTypes?.string,
};

export default SidebarItem;
