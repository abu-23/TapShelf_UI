import React from "react";
import { BrandNameDiv, MainDiv, SidebarLowerDiv } from "./SidebarStyle";
import SidebarItem from "./sidebar-items/SidebarItem";
export default function Sidebar() {
  return (
    <MainDiv>
      <BrandNameDiv>TapShelf</BrandNameDiv>
      <SidebarItem text="Dashboard" navigateTo="/dashboard" />
      <SidebarItem text="Inventory" navigateTo="/inventory" />
      <SidebarItem text="Reports" navigateTo="/reports" />
      <SidebarItem text="Suppliers" navigateTo="/suppliers" />
      <SidebarItem text="Orders" navigateTo="/orders" />
      <SidebarItem text="Manage Store" navigateTo="/manage" />
      <SidebarLowerDiv>
        <SidebarItem text="Settings" navigateTo="/settings" />
        <SidebarItem text="Logout" navigateTo="/logout" />
      </SidebarLowerDiv>
    </MainDiv>
  );
}
