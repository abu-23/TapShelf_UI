import React from "react";
import {
  HeaderDiv,
  ProfileImage,
  NotificationIcon,
  SearchDiv,
  LeftDiv,
} from "./HeaderStyle";
import { Row, Col } from "../Layout/LayoutStyle";
import profileIcon from "../../assets/profile.png";
import notificationIcon from "../../assets/bell.png";
export default function Header() {
  return (
    <>
      <HeaderDiv>
        <Row>
          <Col col={8}>
            <SearchDiv placeholder="Search product, supplier, order " />
          </Col>

          <Col col={4}>
            <LeftDiv>
              <NotificationIcon alt="notification" src={notificationIcon} />
              <ProfileImage alt="profile-pic" src={profileIcon} />
            </LeftDiv>
          </Col>
        </Row>
      </HeaderDiv>
    </>
  );
}
