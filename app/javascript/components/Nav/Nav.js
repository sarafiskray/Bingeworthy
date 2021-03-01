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
  margin-left: 24px;
  margin-right: 24px;
  max-width: 1300px; 

  nav ul li {
    margin-left: 10px;
  }
`

const Logo = styled.span`
  font-size: 32px;
`

const Nav = (props) => {
    return (
        <Wrapper>
          <Container>
            <nav className="black">
              <div className="nav-wrapper">
                <Link className="left" to={"/"}>
                  <Logo>Bingeworthy</Logo>
                </Link>
                    { 
                    props.loginStatus ? 
                    <ul className="right">
                      <li><Status username={props.username} /></li>
                      <li><Logout logout={props.logout} /></li>
                    </ul>
                    :
                    <ul className="right">
                      <li><Login /></li>
                      <li><SignUp /></li>
                    </ul>
                    }   
              </div>
            </nav>
            {/* <Navbar>
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
            </Navbar>   */}
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