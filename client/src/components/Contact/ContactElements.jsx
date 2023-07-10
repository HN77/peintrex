import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: col-start 2 / col-end 7;
  grid-row: 6 / 7;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
`;

export const Form = styled.form`
  grid-column: 1 / 9;
  grid-row: 1 / 9;
`;

export const Title = styled.h2`
  color: #4b56d2;
  margin: 1.6rem 0;
  font-size: calc(1vw + 0.8rem);
  text-align: center;
  text-transform: uppercase;
`;

export const Content = styled.div`
  display: flex;
  background-image: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.9) 55%,
      transparent 50%
    ),
    url(/../../images/nat-1.jpg);
  background-size: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
`;

export const FormControl = styled.div`
  width: 45%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  margin-bottom: 0.2rem;
  margin-left: 0.1rem;
  color: #4b4b4b;
  font-size: 1.3rem;
`;
export const Input = styled.input`
  padding: 0.8rem;
  margin-bottom: 0.7rem;
`;
export const Textarea = styled.textarea`
  color: #4b4b4b;
  margin-top: 0.8rem;
  padding: 1.8rem;
`;
export const Button = styled.button`
  color: #fff;
  border: none;
  padding: 1rem;
  font-size: 1.6rem;
  margin: 2rem 0;
  border-radius: 0.4rem;
  cursor: pointer;

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
