import styled from 'styled-components';

export const Container = styled.div`
  background-color: #212a3e;
  border-bottom: 1px solid #212a3e;

  display: grid;
  grid-template-rows: 25rem;

  grid-template-columns:
    [full-start]
    minmax(4vw, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 18rem) [col-end]
    )
    [center-end] 8rem minmax(4vw, 1fr) [full-end];
`;
