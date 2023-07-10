import styled from 'styled-components';

export const Container = styled.div`
  min-height: 63svh;
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
      [col-start] minmax(min-content, 20rem) [col-end]
    )
    [center-end] minmax(4vw, 1fr) [full-end];
`;
