import styled from 'styled-components';

export const Genres = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  padding: 0;
`;

export const Container = styled.div`
  width: 600px;
  padding: 24px;
`;

export const ImgWrap = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;

  img {
    display: block;
  }
`;

export const Descr = styled.div`
  font-size: 16px;
`;
