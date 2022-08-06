import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import Header from '../components/Header'
import styles from '../styles/pages/Home.module.scss'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <div className='page'>
      <Header title='Find My Pet'/>
      <h1>Let's get those pets back home</h1>
      <Button
        onClick={() => router.push('/poster/create')}
        text='Create Poster'
      />
      <Button
        onClick={() => router.push('/sighting/report')}
        text='Report Sighting'
      />
    </div>
  )
}

export default Home
