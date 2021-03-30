import Head from 'next/head';
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Columns } from 'react-bulma-components';
import apolloClient from "../graphql/apolloClient";
import { getLaunches } from '../graphql/queries';
import { LaunchesProps } from '../interfaces';
import Page from "../components/Page";
import Card from "../components/Card";



const Index: React.FC<LaunchesProps> = ({launches}) => {
 
  const router = useRouter();

  return (
    
    <Page title="Launches" description="Lançamentos da SpaceX">

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
};

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await apolloClient.query({
    query: getLaunches,
  });

  if (error) {
    return {
      notFound: true,
    };
  }

  const launches = data.launches;

  return {
    props: {
      launches,
    },
  };
};

export default Index;
