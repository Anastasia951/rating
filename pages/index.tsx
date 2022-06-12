import type { NextPage } from 'next'
import { Button, Paragraph, Title, Tag } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Title tag='h1'>Some Text</Title>
      <Button appearance='primary' arrowPos='right'>
        Button
      </Button>
      <Button appearance='transparent' arrowPos='down'>
        Button
      </Button>
      <Paragraph size='small'>dfsdfdf</Paragraph>
      <Paragraph size='medium'>dfsdfdf</Paragraph>
      <Paragraph size='large'>dfsdfdf</Paragraph>
      <Tag>Tag example</Tag>
    </>
  )
}

export default Home
