import { Title } from "components/atoms/Title/Title";
import { ViewWrapper } from "components/atoms/ViewWrapper/ViewWrapper";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Dashboard = () => {
  return (
    <ViewWrapper>
      <Title> Dashboard </Title>
      <p>Dashboard</p>
    </ViewWrapper>
  );
};

export default Dashboard;
