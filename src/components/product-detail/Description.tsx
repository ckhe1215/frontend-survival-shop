import styled from 'styled-components';

type DescriptionProps = {
  value: string;
}

function key(text:string, index: number) {
  return `${text}-${index}`;
}

const Container = styled.div`
  li {
    min-height: 1rem;
    line-height: 1.4;
  }
`;

export default function Description({ value }: DescriptionProps) {
  if (!value.trim()) {
    return null;
  }

  const lines = value.split('\n');

  return (
    <Container>
      <ul>
        {lines.map((line, index) => (
          <li key={key(line, index)}>
            {line}
          </li>
        ))}
      </ul>
    </Container>
  );
}
