import React from "react";
import { Row, Col, MainDiv } from "./LayoutStyle";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
      <MainDiv>
        <Row>
          <Col col={2.5}>
            <Sidebar />
          </Col>
          <Col col={9.5}>
            <Header />
            <Outlet/>
          </Col>
        </Row>
      </MainDiv>
  );
}
