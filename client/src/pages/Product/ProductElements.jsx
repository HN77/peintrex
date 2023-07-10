import styled from 'styled-components';

export const Container = styled.div`
  min-height: 75svh;
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;

  grid-template-columns:
    [full-start]
    minmax(4vw, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 20rem) [col-end]
    )
    [center-end] minmax(4vw, 1fr) [full-end];
`;

export const Content = styled.div`
  grid-column: center-start / center-end;
  grid-row: 2 / auto;
  position: relative;
  font-family: 'Karla', sans-serif;

  display: grid;
  grid-template-rows: 1fr;

  grid-template-columns:
    [full-start]
    minmax(4vw, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 20rem) [col-end]
    )
    [center-end] minmax(4vw, 1fr) [full-end];

  @media screen and (max-width: 1068px) {
    max-height: 60svh;
    grid-template-columns: 2rem 1fr 1fr 2rem;
    grid-template-rows: 1rem 1fr 1fr 1fr 1fr 1rem;
  }
  @media screen and (max-width: 790px) {
    max-height: 120svh;
    grid-template-columns: 2rem 1fr 2rem;
    grid-template-rows: 1rem 1fr 1fr auto 1rem;
  }
`;

export const Image = styled.div`
  grid-column: 1 / 5;
  border-radius: 1rem;
  overflow: hidden;

  @media screen and (max-width: 1068px) {
    grid-column: 2 / 3;
    grid-row: 2 / 6;
  }

  @media screen and (max-width: 790px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Info = styled.div`
  grid-column: 5 / 8;
  border-radius: 1rem;
  padding: 1.5rem;

  @media screen and (max-width: 1068px) {
    grid-column: 3 / 6;
    grid-row: 2 / 3;
  }

  @media screen and (max-width: 790px) {
    padding: 3rem 0;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
`;
export const Action = styled.div`
  width: 100%;
  height: auto;
  grid-column: 8 / 11;
  background-color: #eeeeee;
  padding: 1.5rem;
  border-radius: 1rem;

  position: absolute;

  @media screen and (max-width: 1068px) {
    grid-column: 3 / 6;
    grid-row: 3 / 6;
    margin: 1.5rem;
    box-sizing: border-box;
  }

  @media screen and (max-width: 790px) {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    margin: 0;
    box-sizing: border-box;
    position: initial;
  }
`;

export const Name = styled.h1`
  width: 100%;
  color: #2c3333;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  font-size: calc(1rem + 1.6vw);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const Price = styled.h3`
  width: 100%;
  color: #2c3333;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Desc = styled.h4`
  width: 100%;
  font-size: 1.2rem;
  color: #757777;
  margin-top: 1rem;
`;

export const Bold = styled.p`
  color: #000;
  font-weight: bold;
  margin-bottom: 0.2rem;
`;

export const Share = styled.div`
  width: 100%;
  font-size: 1.4rem;
  margin-right: 0.3rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Button = styled.button`
  margin-top: 2rem;
  padding: 0.7rem;
  color: #fff;
  background-color: #3d1766;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #13005a;
  }
`;

export const Success = styled.span`
  color: #1f8a70;
`;
export const Error = styled.span`
  color: #cd0404;
`;

export const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;
export const Select = styled.select`
  padding: 0.3rem;
  outline: none;
`;
export const Option = styled.option``;
export const Qty = styled.div``;
