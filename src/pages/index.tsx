import Card from "../components/Card";
import { Columns } from 'react-bulma-components';
import { useQuery } from '@apollo/client'; // para graphql
import { getLaunches } from '../graphql/queries';
import { QueryInterface } from '../interfaces';
import { useRouter } from "next/router";
import Page from "../components/Page";
import Head from 'next/head';


const Index = () => {
  const { data, error, loading } = useQuery<QueryInterface>(getLaunches); //query para dados da spacex
  const router = useRouter();
  
  const launches = data?.launches ?? [] // null or undefined

  if(error){
    return <div>{error}</div>
  }


  return (
    
    <Page title="Launches" description="SpaceX Launches" loading={loading}>

      <Head>
        <title>SpaceX Launches</title>
        <meta name="description" content="lançamento"></meta>
      </Head>

      <Columns style={{ marginTop: 40 }}>
        {launches.slice(0, 12).map((launch) => (
          <Columns.Column key={launch.id} size={4}>
            <Card
             onClick={() => router.push(`/launch/${launch.id}`)}
             title={launch.mission_name}
             avatar={launch.links.mission_patch_small}
             image_placeholder={launch.links.mission_patch}
             description={launch.details}
             timestamp={launch.launch_date_utc}/>
          </Columns.Column>
        ))}
      </Columns>
    </Page>
  )
}

export default Index;
