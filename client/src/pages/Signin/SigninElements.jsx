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

  background: linear-gradient(
    to right bottom,
    #4535d9,
    rgba(41, 152, 255, 1),
    rgba(40, 180, 133, 1)
  );
`;

export const Form = styled.form`
  grid-column: 3 / 9;
  grid-row: 2 / 8;

  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.3s ease-in;
`;
export const Title = styled.h2`
  color: #fff;
  margin: 2rem 0;
  font-size: calc(1.5vw + 2rem);
`;
export const FormControl = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.8rem;

  :focus {
    outline: none;
  }
`;
export const Label = styled.label`
  color: #fff;
  font-size: 1.4rem;
  margin-bottom: 0.2rem;
  margin-left: 0.1rem;
`;
export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
`;
export const Button = styled.button`
  color: #fff;
  border: 1px solid #fff;
  border-radius: 0.2rem;
  margin: 2rem;
  padding: 1rem 2rem;
  box-shadow: 1px 3px 5px 0px #737272;

  background: linear-gradient(
    to right bottom,
    #4535d9,
    rgba(41, 152, 255, 1),
    rgba(40, 180, 133, 1)
  );

  &:hover {
    background: linear-gradient(to right bottom, #5141dc, #44a0f6, #60e4b8);
  }
`;

export const Register = styled.span`
  font-size: 1.4rem;
  color: #fff;
  text-align: left;

  a {
    margin-left: 1rem;
  }
`;
