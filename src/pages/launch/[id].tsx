import React from 'react';
import { Router, useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { getLaunch } from '../../graphql/queries';
import { getLaunchResponse } from '../../interfaces';
import Card from '../../components/Card';
import { Columns } from 'react-bulma-components';
import Page from '../../components/Page';

export default function LaunchComponent() {
    const router = useRouter();
    const {query: { id }} = router;
    
    const { data, error, loading } = useQuery<getLaunchResponse>(getLaunch, {
        variables: {
         id,
        },
    });

    const launch = data?.launch;
  
    if(launch === null){
        return <div>Not Found</div>
    }
  
    if(error){
      return <div>{error}</div>
    }

    return (
        <Page title={`Launch #${launch?.id}`}
         description="SpaceX"
          onClickBack={() => router.back()}
          loading={loading}>

            <Columns.Column size={6} offset={3}>
            
            <Card title={launch?.mission_name}
              avatar={launch?.links.mission_patch_small}
              image_placeholder={launch?.links.mission_patch}
              description={launch?.details}
              timestamp={launch?.launch_date_utc}
              />
            
            </Columns.Column>.

        </Page>
    )
}
