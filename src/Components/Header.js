import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display : flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  transition: border-bottom 0.25s ease-in-out;
  border-bottom: 3px solid ${props => props.current ? "#3498db" : "transparent" }
`;

const Slink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export default withRouter (props => {
  // console.log(`props`, props);
  return (
    <Header className='nav'>
      <List>
        <Item current={props.location.pathname === '/'}>
          <Slink to='/'>Movies</Slink>
        </Item>
        <Item current={props.location.pathname === '/tv'}>
          <Slink to='/tv'>TV</Slink>
        </Item>
        <Item current={props.location.pathname === '/search'}>
          <Slink to='/search'>Search</Slink>
        </Item>
      </List>
    </Header>
  )
})
