import styled from 'styled-components';

export const Container = styled.div`
  width: 100svw;
  display: grid;
  grid-template-rows: 8rem 85vh 8rem repeat(3, min-content);

  grid-template-columns:
    [full-start]
    minmax(5vw, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 18rem) [col-end]
    )
    [center-end] minmax(5vw, 1fr) [full-end];
`;
