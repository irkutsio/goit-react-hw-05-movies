import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const StyledLink = styled(NavLink)`
  color: #170b2a;

  &.active {

    color: #ffec82;

  }
`;

const Container = styled.header`
  height: 80px;
  background-color: #A0A0A0;
  font-size: 40px;
`;

export const SharedLayout = () => {
  return (
    <div>
      <Container>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Container>
      <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
