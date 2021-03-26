import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from "next";
import { getLaunch } from '../../graphql/queries';
import apolloClient from "../../graphql/apolloClient";
import { LaunchProps } from '../../interfaces';
import { Columns } from 'react-bulma-components';
import Card from '../../components/Card';
import Page from '../../components/Page';
import Meta from '../../components/Meta';
import Loading from '../../components/Loading';

 const LaunchComponent: React.FC<LaunchProps> = ({ launch }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <Page title={`Launch #${launch.id}`}
      description="SpaceX"
      onClickBack={() => router.back()}>

      <Meta
        title={launch.mission_name}
        description={launch.details}
        url_image={launch.links.mission_patch}
      />

      <Columns.Column size={6} offset={3}>

        <Card title={launch.mission_name}
          avatar={launch.links.mission_patch_small}
          image_placeholder={launch.links.mission_patch}
          description={launch.details}
          timestamp={launch.launch_date_utc}
        />

      </Columns.Column>

    </Page>
  )
};

//rotas estáticas da aplicação 
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [...new Array(10)].map((_, index) => ({ //array de 10 posições
    params: { id: String(index + 1) },
  }));

  return {
    fallback: true,
    paths,
  };
};

//props estáticas da aplicação
export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;

  const { data, error } = await apolloClient.query({
    query: getLaunch,
    variables: {
      id,
    },
  });

  if (error) {
    return {
      notFound: true,
    };
  }

  const launch = data.launch;

  return {
    props: {
      launch,
    },
  };
};

export default LaunchComponent;