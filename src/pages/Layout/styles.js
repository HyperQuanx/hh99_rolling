import styled from 'styled-components';

export const NavbarBox = styled.div`
  margin: 10px;
  margin-bottom: 30px;
  border: 1px solid black;
  font-size: 60px;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  background: linear-gradient(45deg, #ffd1dc, #a7e9af);
`;

export const NavbarTitle = styled.a`
  margin-left: 30px;
  color: black;
  &:visited {
    color: inherit;
    text-decoration: inherit;
  }
`;

export const NavbarLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background-color: transparent;
`;

export const FooterContainer = styled.div`
  margin: 30px 40px 0px 40px;
  padding: 20px 0 0 0;
  border-top: 1px solid black;
  flex-shrink: 0;
  bottom: 0;
  width: 95%;
  height: 100%;
`;

export const LinkStyle = styled.a`
  margin-right: 10px;
  color: inherit;
  text-decoration: none;
  font-size: 20px;

  &:visited {
    color: inherit; /* 또는 다른 색상으로 지정할 수 있습니다. */
  }
`;
