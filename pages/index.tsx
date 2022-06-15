import type { NextPage } from 'next'
import { useState } from 'react'
import { Button, Paragraph, Title, Tag, Rating } from '../components'
import { withLayout } from '../layouts/Layout'

const Home: NextPage = () => {
  const [counter, setCounter] = useState<number>(0)
  return (
    <>
      <Title tag='h1'>{counter}</Title>
      <Button
        appearance='primary'
        arrowPos='right'
        onClick={() => setCounter(counter + 1)}>
        Button
      </Button>
      <Button appearance='transparent' arrowPos='down'>
        Button
      </Button>
      <Paragraph size='small'>dfsdfdf</Paragraph>
      <Paragraph size='medium'>dfsdfdf</Paragraph>
      <Paragraph size='large'>dfsdfdf</Paragraph>
      <Tag size='medium'>Tag example</Tag>
      <Rating rating={3} isEditable />
    </>
  )
}

export default withLayout(Home)
