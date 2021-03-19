import Card from "../components/Card";
import { Container, Columns } from 'react-bulma-components';
import { gql, useQuery } from '@apollo/client'; // para graphql

const query = gql`
  query{
    launches{
      id
      mission_name
      is_tentative
      links {
        mission_patch
      }
    }
  }
`;

const Index = () => {
  const { data, error, loading } = useQuery(query);

  const launches = data?.launches ?? [] // null or undefined

  return (
    <Container>
      <Columns style={{ marginTop: 40 }}>
        {launches.map((launch) => (
          <Columns.Column key={launch.id} size={4}>
            <Card />
          </Columns.Column>
        ))}
      </Columns>
    </Container>
  )
}

export default Index
