import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 30px 0;
  grid-row: 1 / 3;
  grid-column: 1 / 1;
`;

export const Logo = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  height: 60px;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.white};
  padding-right: 10px;
`;

export const activeClassName = "active-link";
export const StyledNavLink = styled(NavLink)`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  text-align: end;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: bold;
  position: relative;
`;
