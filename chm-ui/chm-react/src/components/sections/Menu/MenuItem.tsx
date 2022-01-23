import { Link, Text } from '@chakra-ui/react';
import React from 'react';

type MenuItemProps = {
    to: string
    isLast: boolean
}

const MenuItem: React.FC<MenuItemProps> = ({ children, isLast, to = '/' }) => (
  <Text
    mb={{ base: isLast ? 0 : 8, sm: 0 }}
    mr={{ base: 0, sm: isLast ? 0 : 8 }}
    display="block"
  >
    <Link to={to}>{children}</Link>
  </Text>
);

export default MenuItem;
