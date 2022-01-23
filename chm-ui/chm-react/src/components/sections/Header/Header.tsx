import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import sitePages from '../../../app/constants/pages';
import Menu from '../Menu/Menu';

interface HeaderProps {
    title: string,
    subTitle: string
}

const Header: React.FC<HeaderProps> = ({ title, subTitle = '' }) => (
  <Flex direction="row" align="center" justify="space-between" mb={8}>
    <Heading as="h1">{title}</Heading>
    {subTitle && <Heading as="h2">{subTitle}</Heading>}
    <Menu pages={sitePages} />
  </Flex>
);

export default Header;
