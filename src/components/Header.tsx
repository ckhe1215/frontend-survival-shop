import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 4rem;
  }

  nav {
    padding-block: 2rem;

    ul {
      display: flex;
    }

    li {
      margin-right: 2rem;
    }

    .active {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

function Header() {
  return (
    <Container>
      <h1>Shop</h1>
      <nav>
        <Link to="/products">Products</Link>
      </nav>
    </Container>
  );
}

export default Header;
