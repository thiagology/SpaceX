import React from 'react';
import { Card, Media, Content, Heading, Image } from 'react-bulma-components';

type CardComponentProps = { // tipo das props de card
  image_placeholder?: string;
  avatar?: string;
  title: string;
  subtitle?: string;
  description?: string;
  timestamp?: string;
}

const CardComponent: React.FC<CardComponentProps> =({
   image_placeholder,
    avatar,
    title,
    subtitle,
    description, 
    timestamp}) => {
    return (
       <Card>
        <Card.Image size="4by3" src={image_placeholder} />
        <Card.Content>
          <Media>
            <Media.Item renderAs="figure" position="left">
              <Image size={64} alt="64x64" src={avatar} />
            </Media.Item>
            <Media.Item>
              <Heading size={4}>{title}</Heading>
              <Heading subtitle size={6}>{subtitle}</Heading>
            </Media.Item>
          </Media>
          <Content>
            {description}
            <time dateTime="2016-1-1">{timestamp}</time>
          </Content>
        </Card.Content>
      </Card>
    )
}

export default CardComponent;