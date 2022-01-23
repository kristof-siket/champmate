import { Flex } from '@chakra-ui/react';
import React from 'react';

type HomeProps = {
    title: string
};

const Home: React.FC<HomeProps> = ({ title, children }) => (
  <Flex
    direction="column"
    align="center"
    maxW={{ xl: '1200px' }}
    m="0 auto"
  >
    <h1>{title}</h1>
    {children}
  </Flex>
);

export default Home;
