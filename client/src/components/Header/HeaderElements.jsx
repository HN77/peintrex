import styled from 'styled-components';

export const Container = styled.div`
  grid-column: full-start / full-end;
  grid-row: 2 / 3;

  display: grid;
  grid-template-rows:
    [full-start]
    minmax(4vw, 1fr) [center-start] repeat(
      12,
      [col-start] minmax(min-content, 2rem) [col-end]
    )
    [center-end] minmax(4vw, 1fr) [full-end];

  grid-template-columns:
    [full-start]
    minmax(8vw, 1fr) [center-start] repeat(
      12,
      [col-start] minmax(min-content, 20rem) [col-end]
    )
    [center-end] minmax(8vw, 1fr) [full-end];

  @media screen and (max-width: 968px) {
    display: grid;
    grid-template-rows: 2rem 1fr 1fr 4rem;
    grid-template-columns: 2rem 1fr 2rem;
  }
`;

export const Title = styled.div`
  grid-column: 2 / 7;
  grid-row: 5 / 7;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 1rem;
  padding: 0 1.5rem;

  @media screen and (max-width: 968px) {
    height: 80%;
    grid-column: 2 / 4;
    grid-row: 3 / 4;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
  }
`;

export const Text = styled.p`
  line-height: 3.5rem;
  font-size: calc(2rem + 1.5vw);
  font-weight: 700;
  line-height: 5rem;
  color: #d0d0d0;
  padding: 2rem 0;
  backdrop-filter: blur(50px);

  @media screen and (max-width: 968px) {
    font-size: calc(2rem + 1vw);
    line-height: 3rem;
  }
`;

export const Button = styled.button`
  color: #fff;
  border: none;
  font-size: 1.6rem;
  padding: 1rem 3rem;
  background-color: #1b9c85;
  border-radius: 0.5rem;
  cursor: pointer;
  z-index: 9;

  @media screen and (max-width: 968px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;

export const Galerie = styled.div`
  grid-column: 7 / -1;
  grid-row: 1 / -1;

  @media screen and (max-width: 968px) {
    grid-column: 1 / -1;
    grid-row: 2 / 5;
    box-sizing: border-box;
  }
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 16rem;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 85vh;
`;

export const VideoBg = styled.video`
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-position: top;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  z-index: -1;
`;

export const ImgA = styled.img`
  height: 90%;
  width: 90%;
  grid-column: 2 / 7;
  grid-row: 2 / 8;
  object-fit: center;
  border-radius: 1rem;
  outline-offset: 0.5rem;
  z-index: 10;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
  &:hover {
    z-index: 999;
    transition: all 0.3s;
    transform: scale(1.05);
    outline: 0.6rem solid #377d71;
  }

  @media screen and (max-width: 968px) {
    grid-column: 3 / 9;
    grid-row: 2 / 5;
  }
`;
export const ImgB = styled.img`
  height: 90%;
  width: 90%;
  grid-column: 6 / 11;
  grid-row: 3 / 9;
  object-fit: center;
  border-radius: 1rem;
  outline-offset: 0.5rem;
  z-index: 10;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
  &:hover {
    z-index: 999;
    transition: all 0.3s;
    transform: scale(1.05);
    outline: 0.6rem solid #377d71;
  }
  @media screen and (max-width: 968px) {
    grid-column: 6 / 12;
    grid-row: 3 / 6;
  }
`;
export const ImgC = styled.img`
  height: 90%;
  width: 90%;
  grid-column: 4 / 9;
  grid-row: 6 / 12;
  object-fit: center;
  border-radius: 1rem;
  outline-offset: 0.5rem;
  z-index: 10;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
  &:hover {
    z-index: 999;
    transition: all 0.3s;
    transform: scale(1.05);
    outline: 0.6rem solid #377d71;
  }

  @media screen and (max-width: 968px) {
    grid-column: 4 / 10;
    grid-row: 4 / 7;
  }
`;
