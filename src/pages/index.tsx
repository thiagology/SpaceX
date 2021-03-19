import Card from "../components/Card";
import { Container, Columns } from 'react-bulma-components';

const Index = () => <Container>
  <Columns style={{marginTop: 4}}>
    <Columns.Column>
      <Card />
    </Columns.Column>
    <Columns.Column>
      <Card />
    </Columns.Column>
  </Columns>

</Container>

export default Index
