import type { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import { Button, Paragraph, Title, Tag, Rating } from '../components'
import { withLayout } from '../layouts/Layout'
import axios from 'axios'
import { IMenuItem } from '../types/menu-interface'

const Home = ({ menu, firstCategory }: IHomeProps): JSX.Element => {
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

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<IMenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory }
  )
  return {
    props: {
      menu,
      firstCategory,
    },
  }
}

interface IHomeProps extends Record<string, unknown> {
  menu: IMenuItem[]
  firstCategory: number
}
