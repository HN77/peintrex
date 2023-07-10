import styled from 'styled-components';

export const Container = styled.div`
  grid-column: full-start / full-end;

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

export const List = styled.div`
  grid-column: 2 / 5;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const Item = styled.div`
  font-size: 1.7rem;
  margin-right: 3rem;
  cursor: pointer;
  font-family: 'Nunito', sans-serif;

  @media screen and (max-width: 968px) {
    font-size: 1.4rem;
  }
`;

export const Social = styled.div`
  grid-column: 8 / 11;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 968px) {
    display: none;
  }
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.2rem;
  margin-left: 3rem;
  cursor: pointer;
`;
