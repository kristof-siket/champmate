import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import { Button, Input, Box, Text, Stack } from "@chakra-ui/react"


export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <Box alignItems='center' justifyContent='center' align='center'>
      <Stack alignItems='center' justifyContent='center' align='center' direction="row" spacing={1}>
        <Button colorScheme='teal' onClick={() => dispatch(decrement())}>-</Button>
        <Text>{count}</Text>
        <Button colorScheme='teal' onClick={() => dispatch(increment())}>+</Button>
      </Stack>
      <Box>
      <Input
          margin={5}
          value={incrementAmount}
          size="lg"
          placeholder='Amount'
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
      <Stack direction="row" spacing={2}>
        <Button colorScheme='teal' variant='solid' onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </Button>
        <Button colorScheme='teal' variant='outline' onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </Button>
        <Button colorScheme='teal' variant='outline' onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add if odd
        </Button>
      </Stack>
      </Box>
    </Box>
  );
}
