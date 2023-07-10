import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows:
    [full-start]
    minmax(4vw, 1fr) [center-start] repeat(
      6,
      [col-start] minmax(min-content, 8.5rem) [col-end]
    )
    [center-end] minmax(4vw, 1fr) [full-end];

  grid-template-columns:
    [full-start]
    minmax(4vw, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 20rem) [col-end]
    )
    [center-end] minmax(4vw, 1fr) [full-end];
`;

export const MethodInfo = styled.div`
  grid-column: 3 / 6;
  grid-row: 2 / 8;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const Title = styled.h2`
  font-size: 3.4rem;
  color: #696969;
  margin-bottom: 2rem;
`;
export const SubTitle = styled.h3`
  font-size: 1.8rem;
  color: #696969;
  margin-bottom: 1rem;
`;
export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;
export const Label = styled.label`
  color: #696969;
  font-size: 1.2rem;
  margin-left: 1rem;
`;
export const Radio = styled.input`
  color: #696969;
`;
export const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 1rem 2rem;
  margin-top: 2rem;
  border-radius: 0.6rem;
  cursor: pointer;

  &:hover {
    background-color: #1e1e1e;
  }
`;
