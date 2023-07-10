import styled from 'styled-components';

export const Container = styled.div`
  grid-column: full-start / full-end;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem;
  border-bottom: 1px solid #dbdbdb;
`;

export const Image = styled.img`
  height: 8rem;
  width: 8rem;
  z-index: 1;
  border-radius: 1rem;
  object-fit: cover;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 4px 8px 0px;
`;

export const Name = styled.h3`
  min-width: 20rem;
  color: #5e5e5e;
  font-size: 1.6rem;
  cursor: pointer;
`;

export const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Option = styled.option`
  padding: 0 0.4rem;
`;
export const Select = styled.select`
  appearance: none;
  padding: 1rem 3rem;
  border-radius: 0.4rem;
`;

export const Trash = styled.div`
  color: #b31312;
  font-size: 2.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: self-end;
`;
