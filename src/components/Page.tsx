import React from "react";
import { Box, Heading, Container, Button } from "react-bulma-components";
import Loading from "../components/Loading";
import { PageProps } from "../interfaces";


const Page: React.FC<PageProps> = ({
  title,
  description,
  onClickBack,
  loading,
  children,
}) => {
  return (
    <div className="bg_image">

    <Container >
      <Box>
        <Heading>{title}</Heading>
        <Heading subtitle size={6}>
          {description}
        </Heading>

        {onClickBack && <Button onClick={onClickBack}>Back</Button>}
      </Box>

      {loading ? <Loading /> : children}
    </Container>

    </div>
  );
};

export default Page;
