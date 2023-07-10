import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px solid #000;
  font-family: 'Josefin Sans', sans-serif;

  display: grid;
  grid-template-rows: 8rem;

  grid-template-columns:
    [full-start]
    minmax(4vw, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 18rem) [col-end]
    )
    [center-end] 8rem minmax(4vw, 1fr) [full-end];

  @media screen and (max-width: 968px) {
    grid-column: full-start / full-end;
  }
`;

export const Logo = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  display: flex;
  align-items: center;
  font-size: 3rem;
  cursor: pointer;

  @media screen and (max-width: 968px) {
    grid-column: 2 / 5;
    font-size: 2rem;
  }
`;

export const Cart = styled.div`
  grid-row: 1 / 2;
  grid-column: 10 / 11;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
  border-right: 1px solid #000;
  border-left: 1px solid #000;
  color: #1b9c85;
  cursor: pointer;

  position: relative;

  @media screen and (max-width: 968px) {
    grid-row: 1 / 2;
    grid-column: 10 / 12;
    border-right: none;
  }
`;

export const Badge = styled.span`
  height: 1.4rem;
  width: 1.4rem;
  font-size: 1rem;
  border-radius: 50%;
  color: #fff;
  background-color: #160276;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 2.2rem;
  top: 2.5rem;

  @media screen and (max-width: 968px) {
    right: 2.8rem;
    top: 2.5rem;
  }
`;

export const Search = styled.div`
  grid-row: 1 / 2;
  grid-column: 8 / 10;
  display: flex;
  align-items: center;

  @media screen and (max-width: 968px) {
    display: none;
  }
`;
export const Input = styled.input`
  height: 98%;
  width: 100%;
  padding-left: 1rem;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.div`
  height: 100%;
  font-size: 2.2rem;
  padding-left: 1rem;
  border-left: 1px solid #000;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Login = styled.div`
  grid-row: 1 / 2;
  grid-column: 6 / 7;
  height: 100%;
  font-size: 1.7rem;
  font-family: 'Nunito', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.3s ease-in;

  &:hover {
    color: #44a0f6;
  }

  @media screen and (max-width: 968px) {
    display: none;
  }
`;

export const Register = styled.div`
  grid-row: 1 / 2;
  grid-column: 7 / 8;
  height: 100%;
  font-size: 1.7rem;
  font-family: 'Nunito', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in;

  &:hover {
    color: #44a0f6;
  }

  position: relative;

  @media screen and (max-width: 968px) {
    display: none;
  }
`;

export const Username = styled.div`
  grid-row: 1 / 2;
  grid-column: 7 / 8;
  height: 100%;
  font-size: 1.7rem;
  font-family: 'Nunito', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in;

  &:hover {
    color: #44a0f6;
  }

  @media screen and (max-width: 968px) {
    font-size: 1.6rem;
    grid-column: 8 / 9;
    justify-content: flex-end;
  }
`;
export const Dropdown = styled.div`
  width: 14rem;
  padding: 2rem;
  font-size: 1.4rem;
  color: #fff;
  background-color: #1b9c85;
  border-radius: 1rem;
  position: absolute;
  top: 7rem;
  right: 35vw;
  z-index: 999;
`;
export const Profile = styled.div`
  margin-bottom: 1rem;
  cursor: pointer;
`;
export const Logout = styled.div`
  cursor: pointer;
`;
