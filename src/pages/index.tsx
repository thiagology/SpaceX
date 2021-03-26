import Card from "../components/Card";
import { Container, Columns } from 'react-bulma-components';
import { useQuery } from '@apollo/client'; // para graphql
import { getLaunches } from '../graphql/queries';
import { QueryInterface } from '../interfaces';


const Index = () => {
  const { data, error, loading } = useQuery<QueryInterface>(getLaunches); //query para dados da spacex
  
  const launches = data?.launches ?? [] // null or undefined
  
  if(loading){ // tela de carregamento
    return <div>Loading</div>
  }

  if(error){
    return <div>{error}</div>
  }


  return (
    <Container>
      <Columns style={{ marginTop: 40 }}>
        {launches.map((launch) => (
          <Columns.Column key={launch.id} size={4}>
            <Card title={launch.mission_name}
             avatar={launch.links.mission_patch_small}
             image_placeholder={launch.links.mission_patch}
             description={launch.details}
             timestamp={launch.launch_date_utc}/>
          </Columns.Column>
        ))}
      </Columns>
    </Container>
  )
}

export default Index;
