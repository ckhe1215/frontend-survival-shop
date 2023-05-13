import styled from 'styled-components';
import { useEffect } from 'react';
import useProductDetailStore from '../../../hooks/useProductDetailStore';
import useProductFormStore from '../../../hooks/useProductFormStore';
import numberFormat from '../../../utils/numberFormat';

const Container = styled.div`
  margin-block: .2rem;
`;

export default function Price() {
  const [, productFormStore] = useProductFormStore();

  return (
    <Container>
      {numberFormat(productFormStore.price)}
      원
    </Container>
  );
}
