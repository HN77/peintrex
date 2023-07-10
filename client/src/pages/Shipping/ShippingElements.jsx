import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows:
    [full-start]
    minmax(4vw, 1fr) [center-start] repeat(
      6,
      [col-start] minmax(min-content, 7.6rem) [col-end]
    )
    [center-end] minmax(4vw, 1fr) [full-end];

  grid-template-columns:
    [full-start]
    minmax(4vw, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 18rem) [col-end]
    )
    [center-end] minmax(4vw, 1fr) [full-end];

  /* background: linear-gradient(
    to right bottom,
    #4535d9,
    rgba(41, 152, 255, 1),
    rgba(40, 180, 133, 1)
  ); */

  @media screen and (max-width: 968px) {
    min-height: 68vh;
  }
`;

export const Form = styled.form`
  box-sizing: border-box;
  grid-column: 3 / 9;
  grid-row: 2 / 8;

  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in;
`;
export const Title = styled.h2`
  color: #797979;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
  font-size: calc(1.2vw + 2rem);
`;
export const FormControl = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.8rem;

  :focus {
    outline: none;
  }

  @media screen and (max-width: 968px) {
    width: 100%;
  }
`;
export const Label = styled.label`
  color: #888888;
  font-size: 1.4rem;
  margin-bottom: 0.2rem;
  margin-left: 0.1rem;
`;
export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 1.2rem 0 1.2rem 1.2rem;
  border: 1px solid #44a0f6;
  border-radius: 0.5rem;
`;
export const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 1rem 2rem;
  margin-top: 2rem;
  border-radius: 0.6rem;

  &:hover {
    background-color: #1e1e1e;
  }
`;
