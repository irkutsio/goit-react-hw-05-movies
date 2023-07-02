import styled from 'styled-components';

export const Genres = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  padding: 0;
  color: #170b2a;
`;

export const Overview = styled.p`
color: #170b2a;
`

export const Rating = styled.p`
color: #170b2a;`

export const Container = styled.div`
  width: 600px;
  padding: 24px;

  h2 {
    color: #170b2a;
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;

  img {
    display: block;
    border: 4px solid gold;
  }
`;

export const Descr = styled.div`
  font-size: 16px;
`;
