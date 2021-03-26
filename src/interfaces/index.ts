export type Launch = {
    id: string;
    mission_name: string;
    details: string;
    launch_date_utc: string;
    links: {
      mission_patch: string;
      mission_patch_small: string;
    }
  
  }
  
  export type QueryInterface = {
    launches: Launch[]
  }

  export type getLaunchResponse = {
    launch: Launch
  }

  export type PageProps = {
    title: string;
    description: string;
    onClickBack?: () => void;
    loading?: boolean;
  };
