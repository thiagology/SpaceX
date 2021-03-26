import { gql } from '@apollo/client'; // para graphql

export const getLaunches = gql`
  query{
    launches{
      id
      mission_name
      details
      launch_date_utc
      links {
        mission_patch
        mission_patch_small
      }
    }
  }
`;