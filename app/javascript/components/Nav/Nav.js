import React, { Fragment } from 'react'
import SignUp from '../Cognito/SignUp'
import Login from '../Cognito/Login'
import Status from '../Cognito/Status'
import Logout from '../Cognito/Logout'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom'


const Wrapper = styled.div`
  width: 100%;
  height: 65px;
  line-height: 2;
  background-color: black;
  color: white;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
`

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Left = styled.div`
  flex-basis: auto;
  align-self: flex-start !important;
  margin-left: 24px;
`

const Right = styled.div`
  flex-basis: 12%;
  align-self: flex-end !important;
  
`

const Logo = styled.span`
  font-family: 'Poppins-ExtraBold';
  font-weight: bold;
  font-size: 32px;
  a {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    color: #fff;
    text-decoration: none;
  }
`

const Nav = (props) => {
    return (
        <Wrapper>
          <Container>
            <Navbar>
              <Left>
                <Logo><Link to="/">Bingeworthy</Link></Logo>
              </Left>
              <Right>
                { 
                props.loginStatus ? 
                <Fragment>
                  <Status username={props.username} />
                  <Logout logout={props.logout} />
                </Fragment>
                :
                <Fragment>
                  <Login />
                  <SignUp />
                </Fragment>
                }   
              </Right>
            </Navbar>  
          </Container>
        </Wrapper>
        
        // <Fragment>
        //     <Status loginStatus={props.loginStatus} logout={props.logout} username={props.username} />
        //     <SignUp />
        //     <Login />
        // </Fragment>
    )
}

export default Nav;