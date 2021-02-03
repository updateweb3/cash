import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink exact activeClassName="active" to="/">GoCash</StyledLink>
      <StyledLink exact activeClassName="active" to="/bank">赛道</StyledLink>
      <StyledLink exact activeClassName="active" to="/bonds">债券</StyledLink>
      <StyledLink exact activeClassName="active" to="/boardroom">董事会</StyledLink>
      {/* <StyledLink2 href="https://snapshot.page/#/basiscash.eth" target="_blank" >Vote</StyledLink2> */}
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: ${props => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${props => props.theme.spacing[3]}px;
  padding-right: ${props => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.color.grey[500]};
  }
  &.active {
    color: ${props => props.theme.color.primary.main};
  }
`
// const StyledLink2 = styled.a`
//   color: ${props => props.theme.color.grey[400]};
//   font-weight: 700;
//   padding-left: ${props => props.theme.spacing[3]}px;
//   padding-right: ${props => props.theme.spacing[3]}px;
//   text-decoration: none;
//   &:hover {
//     color: ${props => props.theme.color.grey[500]};
//   }
//   &.active {
//     color: ${props => props.theme.color.primary.main};
//   }
// `;// eslint-disable-line no-unused-vars

export default Nav