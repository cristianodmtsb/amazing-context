import React from 'react'
import { useCounterContext } from '../../contexts/CounterContext';
import { Button } from '../../components/Button'
import { Heading } from '../../components/Heading'

export function Home() {
  const [state, actions] = useCounterContext();

  console.log(state);

  return (
    <div>
      <Heading>Home {state.count}</Heading>
      <Button onButtonClick={actions.INCREMENT} label="INCREMENT" />
      <Button onButtonClick={actions.DECREMENT} label="DECREMENT" />
      <Button onButtonClick={actions.RESET} label="RESET" />
      <Button onButtonClick={() => actions.SET_COUNT({count: 20})} label="SET_COUNT 20" />
      <Button onButtonClick={() => actions.SET_COUNT({count: 50})} label="SET_COUNT 50" />
      <Button onButtonClick={actions.SET_COUNT_ASYNC} label="SET_COUNT_ASYNC" />
      <Button onButtonClick={actions.SET_COUNT_ASYNC_SUCCESS} label="SET_COUNT_ASYNC_SUCCESS" />
      <Button onButtonClick={actions.SET_COUNT_ASYNC_ERROR} label="SET_COUNT_ASYNC_ERROR" />

    </div>
  )
}
