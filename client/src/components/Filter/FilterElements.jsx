import styled from 'styled-components';

export const Container = styled.div`
  grid-column: full-start / full-end;

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
`;

export const Select = styled.select`
  grid-column: 2 / 3;
  height: 98%;
  border: none;

  :focus {
    outline: none;
  }
`;
export const Option = styled.option``;
