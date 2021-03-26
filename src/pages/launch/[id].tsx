import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { getLaunch } from '../../graphql/queries';
import { getLaunchResponse } from '../../interfaces';
import Card from '../../components/Card';
import { Container, Columns } from 'react-bulma-components';

export default function LaunchComponent() {
    
    const {query: { id }} = useRouter();
    
    const { data, error, loading } = useQuery(getLaunch, {
        variables: {
         id,
        },
    });


    const launch = data?.launch;
  
    if(loading){ 
      return <div>Loading</div>
    }
    
    if(launch === null){
        return <div>Not Found</div>
    }
  
    if(error){
      return <div>{error}</div>
    }

    return (
        <Container>
            <Columns.Column size={6} offset={3}>
            
            <Card title={launch.mission_name}
              avatar={launch.links.mission_patch_small}
              image_placeholder={launch.links.mission_patch}
              description={launch.details}
              timestamp={launch.launch_date_utc}
              />
            
            </Columns.Column>.
        </Container>
    )
}
