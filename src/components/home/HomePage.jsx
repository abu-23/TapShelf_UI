import React from "react";
import { Row, Col, MainDiv, WelcomeText } from "./HomePageStyle";

export default function HomePage() {
  return (
    <MainDiv>
      <WelcomeText>Welcome User,</WelcomeText>
      <div>Select inventory section from sidebar to see more details. </div>
    </MainDiv>
  );
}
