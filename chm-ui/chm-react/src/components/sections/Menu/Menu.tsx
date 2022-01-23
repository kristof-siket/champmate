import { Stack } from '@chakra-ui/react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import MenuItem from './MenuItem';

interface MenuProps {
    pages: {
        title: string,
        to: string
    }[],
}

const Menu: React.FC<MenuProps> = ({ pages }) => (
  <Stack spacing={4} direction="row">
    {pages.map((page, index) => {
      const id = uuidv4();
      return (
        <MenuItem key={id} to={page.to} isLast={index === pages.length - 1}>
          {page.title}
        </MenuItem>
      );
    })}
  </Stack>
);

export default Menu;
