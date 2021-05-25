import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #303032;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

// const Bars = styled(FaBars)`
//   display: none;
//   color: #fff;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256el;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff
    color: #010606;;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to='/'>
        <h1>EasyBake</h1>
      </NavLink>
      {/* <Bars /> */}
      <NavMenu>
        <NavLink to='/bakery'>Bakery</NavLink>
        <NavLink to='/refinery'>Refinery</NavLink>
        <NavLink to='/team'>Team</NavLink>
      </NavMenu>
      <NavBtn></NavBtn>
    </Nav>
  );
};

export default Navbar;
